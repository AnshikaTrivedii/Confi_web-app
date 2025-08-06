export interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
  resolution: {
    width: number;
    height: number;
  };
  cabinetDimensions: {
    width: number;
    height: number;
  };
  moduleDimensions: {
    width: number;
    height: number;
  };
  moduleResolution: {
    width: number;
    height: number;
  };
  moduleQuantity: number;
  pixelPitch: number;
  pixelDensity: number;
  brightness: number;
  refreshRate: number;
  environment: 'indoor' | 'outdoor';
  maxPowerConsumption: number;
  avgPowerConsumption: number;
  weightPerCabinet: number;
  pdf?: string;
  // Optional properties for specific series
  ledType?: string;
  driverIC?: string;
  viewingAngle?: string;
  colorDepth?: string;
  frameChangingFrequently?: string;
  voltage?: string;
  serviceAccess?: string;
  ipGrade?: string;
  operatingTemperature?: string;
  storageTempHumidity?: string;
  lifeTime?: number;
  controller?: string;
  cabinetMaterial?: string;
  screenResolution?: string;
  activeDisplayArea?: string;
  contrastRatio?: string;
  colorTemperature?: string;
  driveMethod?: string;
  certificates?: string;
  ledConfiguration?: string;
  minViewDistance?: string;
  brightnessAdjustment?: string;
  availableColorPalette?: string;
  operatingHumidity?: string;
  inputPowerFrequency?: string;
  defectRate?: string;
  dataTransferMethod?: string;
  controlMethod?: string;
  mtbf?: number;
  controlDistance?: string;
  ledChip?: string;
  pcb?: string;
  powerSupply?: string;
  // Price-related properties
  price?: number;
  siChannelPrice?: number;
  resellerPrice?: number;
  prices?: {
    cabinet: {
      endCustomer: number;
      siChannel: number;
      reseller: number;
    };
    curveLock: {
      endCustomer: number;
      siChannel: number;
      reseller: number;
    };
  };
} 