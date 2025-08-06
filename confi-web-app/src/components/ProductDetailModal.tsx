import React from 'react';
import { Product } from '../types';

interface ProductDetailModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProductDetailModal: React.FC<ProductDetailModalProps> = ({ product, isOpen, onClose }) => {
  if (!isOpen || !product) return null;

  const getEnvironmentColor = (environment: string) => {
    return environment === 'indoor' ? 'bg-blue-100 text-blue-800' : 'bg-orange-100 text-orange-800';
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">{product.name}</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-6">
          {/* Product Image and Basic Info */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Image */}
            <div className="relative h-80 bg-gradient-to-br from-[#67595e] to-[#8b7d82] rounded-xl overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  if (target.parentElement) {
                    target.parentElement.innerHTML = `
                      <div class="w-full h-full flex items-center justify-center">
                        <div class="text-center text-white">
                          <div class="text-6xl mb-4">📺</div>
                          <div class="text-xl font-semibold">${product.name}</div>
                        </div>
                      </div>
                    `;
                  }
                }}
              />
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                <span className="bg-[#67595e] text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {product.category}
                </span>
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getEnvironmentColor(product.environment)}`}>
                  {product.environment}
                </span>
              </div>
            </div>

            {/* Basic Info */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Product Overview</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Category:</span>
                    <span className="font-semibold">{product.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Environment:</span>
                    <span className="font-semibold capitalize">{product.environment}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Pixel Pitch:</span>
                    <span className="font-semibold">{product.pixelPitch}mm</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Brightness:</span>
                    <span className="font-semibold">{product.brightness} cd/m²</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Refresh Rate:</span>
                    <span className="font-semibold">{product.refreshRate} Hz</span>
                  </div>
                </div>
              </div>

              {/* Pricing if available */}
              {(product.price || product.siChannelPrice || product.resellerPrice) && (
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Pricing</h4>
                  <div className="space-y-2">
                    {product.price && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">End Customer:</span>
                        <span className="font-semibold">₹{product.price.toLocaleString()}</span>
                      </div>
                    )}
                    {product.siChannelPrice && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">SI Channel:</span>
                        <span className="font-semibold">₹{product.siChannelPrice.toLocaleString()}</span>
                      </div>
                    )}
                    {product.resellerPrice && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">Reseller:</span>
                        <span className="font-semibold">₹{product.resellerPrice.toLocaleString()}</span>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Technical Specifications */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Display Specifications */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Display Specifications</h3>
              <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Resolution:</span>
                  <span className="font-semibold">{product.resolution.width} × {product.resolution.height}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Pixel Density:</span>
                  <span className="font-semibold">{product.pixelDensity.toLocaleString()} pixels/m²</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Cabinet Dimensions:</span>
                  <span className="font-semibold">{product.cabinetDimensions.width} × {product.cabinetDimensions.height} mm</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Module Dimensions:</span>
                  <span className="font-semibold">{product.moduleDimensions.width} × {product.moduleDimensions.height} mm</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Module Resolution:</span>
                  <span className="font-semibold">{product.moduleResolution.width} × {product.moduleResolution.height}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Module Quantity:</span>
                  <span className="font-semibold">{product.moduleQuantity}</span>
                </div>
              </div>
            </div>

            {/* Power & Performance */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Power & Performance</h3>
              <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Max Power Consumption:</span>
                  <span className="font-semibold">{product.maxPowerConsumption}W</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Avg Power Consumption:</span>
                  <span className="font-semibold">{product.avgPowerConsumption}W</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Weight per Cabinet:</span>
                  <span className="font-semibold">{product.weightPerCabinet} kg</span>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Technical Parameters */}
          {(product.ledType || product.driverIC || product.viewingAngle || product.colorDepth || 
            product.voltage || product.serviceAccess || product.ipGrade || product.operatingTemperature ||
            product.lifeTime || product.controller || product.cabinetMaterial) && (
            <div className="mt-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Additional Technical Parameters</h3>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {product.ledType && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">LED Type:</span>
                      <span className="font-semibold">{product.ledType}</span>
                    </div>
                  )}
                  {product.driverIC && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Driver IC:</span>
                      <span className="font-semibold">{product.driverIC}</span>
                    </div>
                  )}
                  {product.viewingAngle && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Viewing Angle:</span>
                      <span className="font-semibold">{product.viewingAngle}</span>
                    </div>
                  )}
                  {product.colorDepth && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Color Depth:</span>
                      <span className="font-semibold">{product.colorDepth}</span>
                    </div>
                  )}
                  {product.voltage && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Voltage:</span>
                      <span className="font-semibold">{product.voltage}</span>
                    </div>
                  )}
                  {product.serviceAccess && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Service Access:</span>
                      <span className="font-semibold">{product.serviceAccess}</span>
                    </div>
                  )}
                  {product.ipGrade && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">IP Grade:</span>
                      <span className="font-semibold">{product.ipGrade}</span>
                    </div>
                  )}
                  {product.operatingTemperature && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Operating Temperature:</span>
                      <span className="font-semibold">{product.operatingTemperature}</span>
                    </div>
                  )}
                  {product.lifeTime && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Lifetime:</span>
                      <span className="font-semibold">{product.lifeTime.toLocaleString()} hours</span>
                    </div>
                  )}
                  {product.controller && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Controller:</span>
                      <span className="font-semibold">{product.controller}</span>
                    </div>
                  )}
                  {product.cabinetMaterial && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Cabinet Material:</span>
                      <span className="font-semibold">{product.cabinetMaterial}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="mt-8 flex gap-4">
            <button className="flex-1 bg-[#67595e] text-white px-6 py-3 rounded-lg hover:bg-[#8b7d82] transition-colors duration-200 font-semibold">
              Request Quote
            </button>
            <button className="flex-1 border-2 border-[#67595e] text-[#67595e] px-6 py-3 rounded-lg hover:bg-[#67595e] hover:text-white transition-colors duration-200 font-semibold">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailModal; 