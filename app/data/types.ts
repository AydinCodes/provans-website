export interface ProductVariant {
  size: string;
  code?: string;
  lengths?: string[];
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  categorySlug: string;
  subcategory?: string;
  description: string;
  features?: string[];
  variants: ProductVariant[];
  soldBy: 'linear meter' | 'sheet' | 'length' | 'door' | 'each' | 'set';
  imagePath: string;
  imageFilename: string;
  badge?: string;
}

export interface Category {
  name: string;
  slug: string;
  description: string;
  imagePath: string;
  imageFilename: string;
}
