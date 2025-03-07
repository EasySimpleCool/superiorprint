import { useForm } from 'react-hook-form';
import { QuoteFormState, CalculatedPrice } from '../components/QuoteCalculator/types';
import { calculatePrice } from '../utils/priceCalculations';

export const useQuoteCalculator = () => {
  const defaultValues: QuoteFormState = {
    brand: 'Gildan',
    productType: 'Basic T-Shirt',
    quantity: '20-49',
    firstPrintColor: 'One Color',
    printSize: 'Standard (A4)',
    secondPrint: 'No Second Print'
  };

  const form = useForm<QuoteFormState>({
    defaultValues,
    mode: 'onChange'
  });

  const calculateQuote = (data: QuoteFormState): CalculatedPrice => {
    return calculatePrice(data);
  };

  const price = calculateQuote(form.watch());

  return {
    form,
    price,
    calculateQuote
  };
}; 