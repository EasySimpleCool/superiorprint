import {
  ProductPrices,
  QuantityFactors,
  ColorPrices,
  SizeFactors,
  SecondPrintPrices,
  QuoteFormState,
  CalculatedPrice,
  Brands
} from '../components/QuoteCalculator/types';

export const brandProductPrices: Record<keyof Brands, ProductPrices> = {
  'Gildan': {
    'Basic T-Shirt': 7.50,
    'Premium T-Shirt': 11.00,
    'Polo Shirt': 14.50,
    'Hoodie': 20.00,
  },
  'AScolour': {
    'Basic T-Shirt': 9.50,
    'Premium T-Shirt': 13.00,
    'Polo Shirt': 16.50,
    'Hoodie': 24.00,
  }
};

export const quantityFactors: QuantityFactors = {
  '20-49': 1,
  '50-99': 0.9,
  '100-249': 0.8,
  '250+': 0.7,
};

export const colorPrices: ColorPrices = {
  'One Color': 2.00,
  'Two Colors': 3.50,
  'Full Color': 5.00,
};

export const sizeFactors: SizeFactors = {
  'Small (A6)': 0.8,
  'Standard (A4)': 1,
  'Large (A3)': 1.5,
};

export const secondPrintPrices: SecondPrintPrices = {
  'No Second Print': 0,
  'One Color': 1.50,
  'Two Colors': 2.50,
  'Full Color': 4.00,
};

export const calculatePrice = (data: QuoteFormState): CalculatedPrice => {
  const basePrice = brandProductPrices[data.brand][data.productType];
  const quantityFactor = 1 - (quantityFactors[data.quantity] * 0.1);
  const firstPrintPrice = colorPrices[data.firstPrintColor] * sizeFactors[data.printSize];
  const secondPrintPrice = secondPrintPrices[data.secondPrint];

  const totalBeforeDiscount = basePrice + firstPrintPrice + secondPrintPrice;
  const totalPerItem = totalBeforeDiscount * (1 - (quantityFactors[data.quantity] * 0.1));

  return {
    totalPerItem,
    breakdown: {
      basePrice,
      firstPrintPrice,
      secondPrintPrice,
      quantityDiscount: (quantityFactors[data.quantity] * 0.1) * 100
    }
  };
}; 