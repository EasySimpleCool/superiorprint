import React from 'react';
import { CalculatedPrice } from './types';

interface PriceDisplayProps {
  price: CalculatedPrice;
}

//--------------------------------------------------------
// PRICE DISPLAY COMPONENT
//--------------------------------------------------------
// Purpose: Displays the calculated price and breakdown of costs
// Props:
//   - price: CalculatedPrice object containing total and breakdown
//--------------------------------------------------------

export const PriceDisplay: React.FC<PriceDisplayProps> = ({ price }) => {
  return (

    //--------------------------------------------------------
    // MAIN PRICE CONTAINER
    // Styles:
    //   - text-center: Centers all content
    //   - mb-8: Adds margin bottom for spacing
    //--------------------------------------------------------

    <div className="text-center mb-8">
      {/* Price title */}
      <p>Approx Garment + Branding Price</p>

      //--------------------------------------------------------
      // PRICE DISPLAY
      // Styles:
      //   - text-4xl: Large text size for price
      //   - font-bold: Makes price stand out
      //   - mb-1: Small margin below
      //--------------------------------------------------------

      <div className="text-4xl font-bold mb-1">
        ${price.totalPerItem.toFixed(2)}
        <span className="text-sm">+gst ea</span>
      </div>

      //--------------------------------------------------------
      // PRICE BREAKDOWN SECTION
      // Styles:
      //   - text-left: Aligns breakdown text to left
      //   - p-4: Adds padding around content
      //   - rounded-lg: Rounds corners
      //   - mt-4: Adds margin top
      //   - border: Adds border around section
      //--------------------------------------------------------

      <div className="text-left p-4 rounded-lg mt-4 border">
        <h3 className="font-semibold mb-2">Price Breakdown</h3>

        //--------------------------------------------------------
        // BREAKDOWN LIST
        // Styles:
        //   - space-y-2: Adds vertical spacing between items
        //   - text-sm: Smaller text for details
        //--------------------------------------------------------

        <ul className="space-y-2 text-sm">
          {/* Base price row */}
          <li className="flex justify-between">
            <span>Base Price:</span>
            <span>${price.breakdown.basePrice.toFixed(2)}</span>
          </li>

          {/* First print price row */}
          <li className="flex justify-between">
            <span>First Print:</span>
            <span>${price.breakdown.firstPrintPrice.toFixed(2)}</span>
          </li>

          {/* Second print price row */}
          <li className="flex justify-between">
            <span>Second Print:</span>
            <span>${price.breakdown.secondPrintPrice.toFixed(2)}</span>
          </li>

          {/* Quantity discount row */}
          <li className="flex justify-between font-semibold">
            <span>Quantity Discount:</span>
            <span>-{price.breakdown.quantityDiscount.toFixed(0)}%</span>
          </li>
        </ul>
      </div>

      {/* Additional pricing note */}
      <p className="text-sm mt-4">Pricing excludes Setup and Freight.</p>

      //--------------------------------------------------------
      // NEXT STEP BUTTON
      // Styles:
      //   - mt-6: Adds margin top
      //   - px-6 py-3: Horizontal and vertical padding
      //   - rounded-md: Slightly rounded corners
      //   - inline-flex: For icon alignment
      //   - border: Adds border around button
      //--------------------------------------------------------

      <div className="mt-6">
        <button className="px-6 py-3 rounded-md inline-flex items-center border">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
          Next step
        </button>
      </div>
    </div>
  );
}; 