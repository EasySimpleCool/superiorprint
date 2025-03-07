//--------------------------------------------------------
// QUOTE CALCULATOR COMPONENT
//--------------------------------------------------------
// Purpose: Main component that combines the quote form and price display
// Uses the useQuoteCalculator hook for form state and price calculations
//--------------------------------------------------------

import React from 'react';
import { QuoteForm } from './QuoteForm';
import { PriceDisplay } from './PriceDisplay';
import { useQuoteCalculator } from '../../hooks/useQuoteCalculator';

export const QuoteCalculator: React.FC = () => {
  // Get form and price state from custom hook
  const { form, price } = useQuoteCalculator();

  return (

    //--------------------------------------------------------
    // MAIN CONTAINER
    // Styles:
    //   - max-w-2xl: Sets maximum width to 42rem/672px
    //   - mx-auto: Centers container horizontally
    //--------------------------------------------------------

    <div className="max-w-2xl mx-auto">
      {/* Quote form component with form state */}
      <QuoteForm form={form} />

      {/* Price display component with calculated price */}
      <PriceDisplay price={price} />
    </div>
  );
}; 