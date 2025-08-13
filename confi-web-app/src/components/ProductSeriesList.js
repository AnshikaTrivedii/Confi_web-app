import React, { useState, useEffect } from 'react';
import { productAPI } from '../services/api';

const ProductSeriesList = () => {
  const [productSeries, setProductSeries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProductSeries = async () => {
      try {
        const response = await productAPI.getProductSeries();
        setProductSeries(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.response?.data?.detail || 'Failed to fetch product series');
        setLoading(false);
      }
    };

    fetchProductSeries();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-lg">Loading product series...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-red-600">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Product Series from API</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {productSeries.map((series) => (
          <div key={series.id} className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{series.name}</h3>
            <p className="text-gray-600 mb-4">{series.description}</p>
            <div className="text-sm text-gray-500">
              <p>ID: {series.id}</p>
              <p>Active: {series.is_active ? 'Yes' : 'No'}</p>
              <p>Created: {new Date(series.created_at).toLocaleDateString()}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSeriesList; 