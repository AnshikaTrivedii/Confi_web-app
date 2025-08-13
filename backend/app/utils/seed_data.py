from sqlalchemy.orm import Session
from app.models import (
    Organisation, User, ProductSeries, Pixel, ProductParam, ComponentParam,
    Controller, ControllerPrice, HardwarePrice
)
from app.core.security import get_password_hash

def seed_organisations(db: Session):
    """Seed organisations"""
    organisations = [
        Organisation(
            name="TechCorp Solutions",
            address="123 Business Ave, Tech City, TC 12345",
            phone="+1-555-0123",
            email="contact@techcorp.com",
            website="https://techcorp.com"
        ),
        Organisation(
            name="Digital Display Inc",
            address="456 Innovation St, Digital City, DC 67890",
            phone="+1-555-0456",
            email="info@digitaldisplay.com",
            website="https://digitaldisplay.com"
        ),
        Organisation(
            name="LED Masters",
            address="789 Technology Blvd, LED Town, LT 11111",
            phone="+1-555-0789",
            email="sales@ledmasters.com",
            website="https://ledmasters.com"
        )
    ]
    
    for org in organisations:
        db.add(org)
    db.commit()
    return organisations

def seed_users(db: Session, organisations):
    """Seed users"""
    users = [
        User(
            email="admin@techcorp.com",
            username="admin",
            full_name="Admin User",
            hashed_password=get_password_hash("admin123"),
            organisation_id=organisations[0].id,
            is_superuser=True
        ),
        User(
            email="john.doe@techcorp.com",
            username="john.doe",
            full_name="John Doe",
            hashed_password=get_password_hash("password123"),
            organisation_id=organisations[0].id
        ),
        User(
            email="jane.smith@digitaldisplay.com",
            username="jane.smith",
            full_name="Jane Smith",
            hashed_password=get_password_hash("password123"),
            organisation_id=organisations[1].id
        )
    ]
    
    for user in users:
        db.add(user)
    db.commit()
    return users

def seed_product_series(db: Session):
    """Seed product series"""
    series = [
        ProductSeries(
            name="Orion Flexible Series",
            description="High-performance flexible LED displays for curved installations"
        ),
        ProductSeries(
            name="Bellatrix Indoor Series",
            description="Ultra-fine pixel pitch displays for indoor applications"
        ),
        ProductSeries(
            name="Jumbo Outdoor Series",
            description="Large-scale outdoor displays for high-impact advertising"
        ),
        ProductSeries(
            name="Nova COB Series",
            description="Advanced COB technology displays for superior image quality"
        )
    ]
    
    for s in series:
        db.add(s)
    db.commit()
    return series

def seed_pixels(db: Session, series):
    """Seed pixels"""
    pixels = [
        # Orion Flexible Series
        Pixel(
            product_series_id=series[0].id,
            pixel_pitch=1.5,
            resolution_width=213,
            resolution_height=107,
            brightness=1000,
            power_consumption=350.0,
            is_indoor=True,
            technology="COB"
        ),
        Pixel(
            product_series_id=series[0].id,
            pixel_pitch=1.8,
            resolution_width=171,
            resolution_height=85,
            brightness=1000,
            power_consumption=350.0,
            is_indoor=True,
            technology="COB"
        ),
        # Bellatrix Indoor Series
        Pixel(
            product_series_id=series[1].id,
            pixel_pitch=0.9,
            resolution_width=355,
            resolution_height=178,
            brightness=800,
            power_consumption=280.0,
            is_indoor=True,
            technology="COB"
        ),
        Pixel(
            product_series_id=series[1].id,
            pixel_pitch=1.2,
            resolution_width=266,
            resolution_height=133,
            brightness=800,
            power_consumption=280.0,
            is_indoor=True,
            technology="COB"
        ),
        # Jumbo Outdoor Series
        Pixel(
            product_series_id=series[2].id,
            pixel_pitch=6.0,
            resolution_width=53,
            resolution_height=27,
            brightness=5500,
            power_consumption=1200.0,
            is_indoor=False,
            technology="SMD"
        ),
        Pixel(
            product_series_id=series[2].id,
            pixel_pitch=8.0,
            resolution_width=40,
            resolution_height=20,
            brightness=5500,
            power_consumption=1200.0,
            is_indoor=False,
            technology="SMD"
        ),
        # Nova COB Series
        Pixel(
            product_series_id=series[3].id,
            pixel_pitch=1.0,
            resolution_width=320,
            resolution_height=160,
            brightness=1000,
            power_consumption=400.0,
            is_indoor=True,
            technology="COB"
        )
    ]
    
    for pixel in pixels:
        db.add(pixel)
    db.commit()
    return pixels

def seed_product_params(db: Session, pixels):
    """Seed product parameters"""
    params = []
    
    for pixel in pixels:
        # Add common parameters for each pixel
        params.extend([
            ProductParam(
                pixel_id=pixel.id,
                param_name="Refresh Rate",
                param_value="3840",
                param_unit="Hz"
            ),
            ProductParam(
                pixel_id=pixel.id,
                param_name="Viewing Angle",
                param_value="160",
                param_unit="degrees"
            ),
            ProductParam(
                pixel_id=pixel.id,
                param_name="Operating Temperature",
                param_value="-20 to 60",
                param_unit="°C"
            ),
            ProductParam(
                pixel_id=pixel.id,
                param_name="IP Rating",
                param_value="IP65" if not pixel.is_indoor else "IP20",
                param_unit=""
            )
        ])
    
    for param in params:
        db.add(param)
    db.commit()

def seed_component_params(db: Session, pixels):
    """Seed component parameters"""
    params = []
    
    for pixel in pixels:
        # Add component parameters for each pixel
        params.extend([
            ComponentParam(
                pixel_id=pixel.id,
                component_name="LED Module",
                param_name="Type",
                param_value="RGB",
                param_unit=""
            ),
            ComponentParam(
                pixel_id=pixel.id,
                component_name="LED Module",
                param_name="Size",
                param_value=f"{pixel.pixel_pitch}mm",
                param_unit=""
            ),
            ComponentParam(
                pixel_id=pixel.id,
                component_name="Power Supply",
                param_name="Voltage",
                param_value="5V",
                param_unit=""
            ),
            ComponentParam(
                pixel_id=pixel.id,
                component_name="Controller",
                param_name="Protocol",
                param_value="SPI",
                param_unit=""
            )
        ])
    
    for param in params:
        db.add(param)
    db.commit()

def seed_controllers(db: Session):
    """Seed controllers"""
    controllers = [
        Controller(
            name="Orion Controller Pro",
            model="OCP-1000",
            description="Professional LED display controller with advanced features",
            manufacturer="Orion Tech"
        ),
        Controller(
            name="Bellatrix Controller",
            model="BC-500",
            description="High-performance controller for fine pitch displays",
            manufacturer="Bellatrix Systems"
        ),
        Controller(
            name="Jumbo Controller",
            model="JC-2000",
            description="Large-scale display controller for outdoor applications",
            manufacturer="Jumbo Display"
        ),
        Controller(
            name="Nova Controller",
            model="NC-800",
            description="Advanced COB display controller",
            manufacturer="Nova Technologies"
        )
    ]
    
    for controller in controllers:
        db.add(controller)
    db.commit()
    return controllers

def seed_controller_prices(db: Session, controllers):
    """Seed controller prices"""
    prices = [
        ControllerPrice(controller_id=controllers[0].id, price=2500.00),
        ControllerPrice(controller_id=controllers[1].id, price=1800.00),
        ControllerPrice(controller_id=controllers[2].id, price=3200.00),
        ControllerPrice(controller_id=controllers[3].id, price=2200.00)
    ]
    
    for price in prices:
        db.add(price)
    db.commit()

def seed_hardware_prices(db: Session):
    """Seed hardware prices"""
    hardware = [
        HardwarePrice(
            hardware_type="Cabinet",
            model="Standard Cabinet",
            description="Standard LED display cabinet",
            price=500.00
        ),
        HardwarePrice(
            hardware_type="Cabinet",
            model="Premium Cabinet",
            description="Premium aluminum cabinet with cooling",
            price=800.00
        ),
        HardwarePrice(
            hardware_type="Power Supply",
            model="5V 60A PSU",
            description="60A power supply unit",
            price=300.00
        ),
        HardwarePrice(
            hardware_type="Power Supply",
            model="5V 100A PSU",
            description="100A power supply unit",
            price=450.00
        ),
        HardwarePrice(
            hardware_type="Cable",
            model="Data Cable",
            description="High-quality data transmission cable",
            price=25.00
        ),
        HardwarePrice(
            hardware_type="Cable",
            model="Power Cable",
            description="Heavy-duty power cable",
            price=35.00
        )
    ]
    
    for hw in hardware:
        db.add(hw)
    db.commit()

def seed_all_data(db: Session):
    """Seed all data"""
    print("Seeding organisations...")
    organisations = seed_organisations(db)
    
    print("Seeding users...")
    users = seed_users(db, organisations)
    
    print("Seeding product series...")
    series = seed_product_series(db)
    
    print("Seeding pixels...")
    pixels = seed_pixels(db, series)
    
    print("Seeding product parameters...")
    seed_product_params(db, pixels)
    
    print("Seeding component parameters...")
    seed_component_params(db, pixels)
    
    print("Seeding controllers...")
    controllers = seed_controllers(db)
    
    print("Seeding controller prices...")
    seed_controller_prices(db, controllers)
    
    print("Seeding hardware prices...")
    seed_hardware_prices(db)
    
    print("Database seeding completed successfully!") 