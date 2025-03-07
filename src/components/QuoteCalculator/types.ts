export interface ProductPrices {
  'Basic T-Shirt': number;
  'Premium T-Shirt': number;
  'Polo Shirt': number;
  'Hoodie': number;
}

export interface QuantityFactors {
  '20-49': number;
  '50-99': number;
  '100-249': number;
  '250+': number;
}

export interface ColorPrices {
  'One Color': number;
  'Two Colors': number;
  'Full Color': number;
}

export interface SizeFactors {
  'Small (A6)': number;
  'Standard (A4)': number;
  'Large (A3)': number;
}

export interface SecondPrintPrices {
  'No Second Print': number;
  'One Color': number;
  'Two Colors': number;
  'Full Color': number;
}

export interface Brands {
  'Gildan': string;
  'AScolour': string;
}

export interface QuoteFormState {
  brand: keyof Brands;
  productType: keyof ProductPrices;
  quantity: keyof QuantityFactors;
  firstPrintColor: keyof ColorPrices;
  printSize: keyof SizeFactors;
  secondPrint: keyof SecondPrintPrices;
}

export interface CalculatedPrice {
  totalPerItem: number;
  breakdown: {
    basePrice: number;
    firstPrintPrice: number;
    secondPrintPrice: number;
    quantityDiscount: number;
  };
} 