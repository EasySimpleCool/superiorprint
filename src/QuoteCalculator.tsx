import React, { useState, useEffect } from 'react';

const QuoteCalculator = () => {
  // State for form selections
  const [productType, setProductType] = useState('Basic T-Shirt');
  const [quantity, setQuantity] = useState('20-49');
  const [firstPrintColor, setFirstPrintColor] = useState('One Color');
  const [printSize, setPrintSize] = useState('Standard (A4)');
  const [secondPrint, setSecondPrint] = useState('No Second Print');
  
  // Base prices
  const baseProductPrices = {
    'Basic T-Shirt': 8.50,
    'Premium T-Shirt': 12.00,
    'Polo Shirt': 15.50,
    'Hoodie': 22.00,
  };
  
  // Quantity discount factors
  const quantityFactors = {
    '20-49': 1,
    '50-99': 0.9,
    '100-249': 0.8,
    '250+': 0.7,
  };
  
  // Print color prices
  const colorPrices = {
    'One Color': 2.00,
    'Two Colors': 3.50,
    'Full Color': 5.00,
  };
  
  // Print size factors
  const sizeFactors = {
    'Small (A6)': 0.8,
    'Standard (A4)': 1,
    'Large (A3)': 1.5,
  };
  
  // Second print options
  const secondPrintPrices = {
    'No Second Print': 0,
    'One Color': 1.50,
    'Two Colors': 2.50,
    'Full Color': 4.00,
  };
  
  // Calculate total price
  const calculatePrice = () => {
    const basePrice = baseProductPrices[productType];
    const quantityFactor = quantityFactors[quantity];
    const firstColorPrice = colorPrices[firstPrintColor];
    const sizeFactor = sizeFactors[printSize];
    const secondPrintPrice = secondPrintPrices[secondPrint];
    
    const totalPerItem = (basePrice + (firstColorPrice * sizeFactor) + secondPrintPrice) * quantityFactor;
    return totalPerItem.toFixed(2);
  };
  
  const price = calculatePrice();
  
  return (
    <div className="flex flex-col md:flex-row w-full max-w-6xl mx-auto">
      <div className="w-full md:w-1/2 p-8 border border-emerald-200 rounded-lg bg-white">
        <h2 className="text-2xl font-semibold text-emerald-700 mb-4">Custom Apparel Quote</h2>
        
        <div className="mb-6">
          <label className="block text-gray-700 mb-2">What do you Need?</label>
          <select 
            className="w-full p-3 bg-emerald-50 border border-emerald-100 rounded" 
            value={productType}
            onChange={(e) => setProductType(e.target.value)}
          >
            <option>Basic T-Shirt</option>
            <option>Premium T-Shirt</option>
            <option>Polo Shirt</option>
            <option>Hoodie</option>
          </select>
        </div>
        
        <div className="mb-6">
          <label className="block text-gray-700 mb-2">How many do you Need?</label>
          <select 
            className="w-full p-3 bg-emerald-50 border border-emerald-100 rounded"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          >
            <option>20-49</option>
            <option>50-99</option>
            <option>100-249</option>
            <option>250+</option>
          </select>
        </div>
        
        <div className="mb-6">
          <label className="block text-gray-700 mb-2">First Print (Colors)</label>
          <select 
            className="w-full p-3 bg-emerald-50 border border-emerald-100 rounded"
            value={firstPrintColor}
            onChange={(e) => setFirstPrintColor(e.target.value)}
          >
            <option>One Color</option>
            <option>Two Colors</option>
            <option>Full Color</option>
          </select>
        </div>
        
        <div className="mb-6">
          <label className="block text-gray-700 mb-2">First Print (Size)</label>
          <select 
            className="w-full p-3 bg-emerald-50 border border-emerald-100 rounded"
            value={printSize}
            onChange={(e) => setPrintSize(e.target.value)}
          >
            <option>Small (A6)</option>
            <option>Standard (A4)</option>
            <option>Large (A3)</option>
          </select>
        </div>
        
        <div className="mb-8">
          <label className="block text-gray-700 mb-2">Second Print (Colors)</label>
          <select 
            className="w-full p-3 bg-emerald-50 border border-emerald-100 rounded"
            value={secondPrint}
            onChange={(e) => setSecondPrint(e.target.value)}
          >
            <option>No Second Print</option>
            <option>One Color</option>
            <option>Two Colors</option>
            <option>Full Color</option>
          </select>
        </div>
        
        <div className="text-center mb-4">
          <p className="text-gray-600">Approx Garment + Branding Price</p>
          <div className="text-emerald-500 text-4xl font-bold mb-1">
            ${price}
            <span className="text-sm text-gray-500">+gst ea</span>
          </div>
          <p className="text-gray-500 text-sm">Pricing excludes Setup and Freight.</p>
        </div>
        
        <p className="text-center text-gray-700 mb-6">
          Need something else, additional branding, or a Bulk Run? <a href="#" className="text-emerald-600 hover:underline">Click Here.</a>
        </p>
        
        <div className="text-center">
          <button className="bg-emerald-400 hover:bg-emerald-500 text-white px-6 py-3 rounded-md inline-flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><polyline points="9 18 15 12 9 6"></polyline></svg>
            Next step
          </button>
        </div>
      </div>
      
      <div className="w-full md:w-1/2 p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">QuickQuote</h1>
        <p className="text-xl text-gray-600 mb-8">Custom Apparel + Branding</p>
        
        <div className="mb-8">
          <p className="text-gray-700 mb-6">
            The QuickQuote tool will give you an approximate finished cost for our most common items. It is a great way to get a quick idea of how much your finished items will cost - It is not representative of everything we have to offer.
          </p>
          <p className="text-gray-700 font-semibold">
            WE PRINT FROM JUST 20 UNITS.
          </p>
        </div>
        
        <div className="border-t border-gray-200 pt-6 mb-8">
          <h3 className="text-xl text-gray-700 mb-4">About Pricing (and the QuickQuote)</h3>
          <p className="text-gray-600 mb-4">
            The QuickQuote has our most commonly requested basics. Embroidery is based on stitches, let us know in the message field if you want embroidery.
          </p>
          <p className="text-gray-600 mb-4">
            We are official suppliers of apparel, textiles and promotional items from dozens of great suppliers including the best brands and many more. Let us know what you need.
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuoteCalculator;