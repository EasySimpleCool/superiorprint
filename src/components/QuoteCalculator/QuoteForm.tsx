import React from 'react';
import { UseFormReturn } from 'react-hook-form';
import { QuoteFormState } from './types';
import {
  brandProductPrices,
  quantityFactors,
  colorPrices,
  sizeFactors,
  secondPrintPrices
} from '../../utils/priceCalculations';

interface QuoteFormProps {
  form: UseFormReturn<QuoteFormState>;
}

//--------------------------------------------------------
// FORM SELECT COMPONENT
//--------------------------------------------------------
// Purpose: Reusable dropdown component with label
// Props:
//   - label: Text shown above dropdown
//   - options: Array of choices for dropdown
//   - field: Form field name
//   - form: Form controller
const FormSelect: React.FC<{
  label: string;
  options: string[];
  field: keyof QuoteFormState;
  form: UseFormReturn<QuoteFormState>;
}> = ({ label, options, field, form }) => (
  //--------------------------------------------------------
  // FORM FIELD CONTAINER
  // Styles: 
  //   - mb-6: Adds margin bottom for spacing between fields
  //--------------------------------------------------------
  <div className="mb-6">
    //--------------------------------------------------------
    // LABEL
    // Styles:
    //   - block: Makes label full width
    //   - mb-2: Small margin below label
    //--------------------------------------------------------
    <label className="block mb-2">{label}</label>

    //--------------------------------------------------------
    // SELECT DROPDOWN
    // Styles:
    //   - w-full: Makes dropdown fill container width
    //   - p-3: Adds padding inside dropdown
    //   - border: Adds border around dropdown
    //   - rounded: Rounds the corners
    //--------------------------------------------------------
    <select
      className="w-full p-3 border rounded"
      {...form.register(field)}
    >
      {options.map(option => (
        <option key={option} value={option}>{option}</option>
      ))}
    </select>
  </div>
);

export const QuoteForm: React.FC<QuoteFormProps> = ({ form }) => {
  return (
    //--------------------------------------------------------
    // MAIN FORM CONTAINER
    // Styles:
    //   - max-w-3xl: Sets maximum width to 768px
    //   - mx-auto: Centers container horizontally
    //   - p-8: Adds padding inside container
    //   - border: Adds border around container
    //   - rounded-lg: Rounds corners more than default
    //   - bg-white: Sets white background
    //--------------------------------------------------------
    <div className="max-w-3xl mx-auto p-8 border rounded-lg bg-white">
      //--------------------------------------------------------
      // HEADER SECTION
      //--------------------------------------------------------
      <h2 className="text-2xl font-semibold mb-4">Custom Apparel Quote</h2>
      <p className="mb-6">
        Get an instant estimate on custom printed items below. Click next and specify additional requirements to have Customer Services come back with a complete quote.
      </p>
      <p className="italic mb-6">We print from just 20 Units.</p>

      //--------------------------------------------------------
      // FORM INPUTS
      // Contains all select dropdowns in sequence
      //--------------------------------------------------------
      <form>
        //--------------------------------------------------------
        // BRAND SELECTOR
        // First dropdown - determines product options
        //--------------------------------------------------------
        <FormSelect
          label="Select Brand"
          options={['Gildan', 'AScolour']}
          field="brand"
          form={form}
        />

        //--------------------------------------------------------
        // PRODUCT TYPE SELECTOR
        // Shows products available for selected brand
        //--------------------------------------------------------
        <FormSelect
          label="What do you Need?"
          options={Object.keys(brandProductPrices.Gildan)}
          field="productType"
          form={form}
        />

        //--------------------------------------------------------
        // QUANTITY SELECTOR
        // Shows available quantity ranges
        //--------------------------------------------------------
        <FormSelect
          label="How many do you Need?"
          options={Object.keys(quantityFactors)}
          field="quantity"
          form={form}
        />

        //--------------------------------------------------------
        // FIRST PRINT COLOR SELECTOR
        // Primary print color options
        //--------------------------------------------------------
        <FormSelect
          label="First Print (Colors)"
          options={Object.keys(colorPrices)}
          field="firstPrintColor"
          form={form}
        />

        //--------------------------------------------------------
        // PRINT SIZE SELECTOR
        // Size options for the first print
        //--------------------------------------------------------
        <FormSelect
          label="First Print (Size)"
          options={Object.keys(sizeFactors)}
          field="printSize"
          form={form}
        />

        //--------------------------------------------------------
        // SECOND PRINT COLOR SELECTOR
        // Optional additional print color options
        //--------------------------------------------------------
        <FormSelect
          label="Second Print (Colors)"
          options={Object.keys(secondPrintPrices)}
          field="secondPrint"
          form={form}
        />
      </form>
    </div>
  );
}; 