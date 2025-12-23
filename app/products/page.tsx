'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const categories = [
  { id: 'all', name: 'All Products' },
  { id: 'timber', name: 'Timber' },
  { id: 'mouldings', name: 'Mouldings' },
  { id: 'decking', name: 'Decking & Screening' },
  { id: 'building', name: 'Building Materials' },
  { id: 'doors', name: 'Doors' },
  { id: 'hardware', name: 'Hardware' },
  { id: 'tools', name: 'Tools' },
  { id: 'paint', name: 'Paint' },
  { id: 'safety', name: 'Safety Gear' },
];

const brands = [
  { id: 'all', name: 'All Brands' },
  { id: 'makita', name: 'Makita' },
  { id: 'stanley', name: 'Stanley' },
  { id: 'dewalt', name: 'DeWalt' },
  { id: 'james-hardie', name: 'James Hardie' },
  { id: 'wedi', name: 'Wedi' },
];

const products = [
  {
    id: 1,
    name: 'Treated Pine H3 90x90mm',
    category: 'timber',
    brand: 'local',
    price: 12.50,
    unit: 'per metre',
    image: '/images/product-categories/timber.webp',
    inStock: true,
    badge: 'Popular',
  },
  {
    id: 2,
    name: 'Magnum Board™ Engineered Flooring',
    category: 'building',
    brand: 'local',
    price: 89.00,
    unit: 'per sqm',
    image: '/images/featured-products/Magnum-Board-Flooring.webp',
    inStock: true,
    badge: 'Featured',
  },
  {
    id: 3,
    name: 'Wedi Building Board 2500x600x12.5mm',
    category: 'building',
    brand: 'wedi',
    price: 65.00,
    unit: 'per sheet',
    image: '/images/featured-products/wedi-bathroom-768x336.webp',
    inStock: true,
    badge: null,
  },
  {
    id: 4,
    name: 'Merbau Decking 90x19mm',
    category: 'decking',
    brand: 'local',
    price: 8.90,
    unit: 'per metre',
    image: '/images/product-categories/decking.webp',
    inStock: true,
    badge: null,
  },
  {
    id: 5,
    name: 'Hardie™ Oblique™ Cladding',
    category: 'building',
    brand: 'james-hardie',
    price: 45.00,
    unit: 'per metre',
    image: '/images/featured-products/James-Hardie-Oblique-768x633.webp',
    inStock: false,
    badge: null,
  },
  {
    id: 6,
    name: 'Cedar Architrave 42x18mm',
    category: 'mouldings',
    brand: 'local',
    price: 6.50,
    unit: 'per metre',
    image: '/images/product-categories/mouldings.webp',
    inStock: true,
    badge: null,
  },
  {
    id: 7,
    name: 'Makita 18V Brushless Drill Kit',
    category: 'tools',
    brand: 'makita',
    price: 349.00,
    unit: 'each',
    image: '/images/product-categories/tools.webp',
    inStock: true,
    badge: 'Sale',
  },
  {
    id: 8,
    name: 'Solid Core Internal Door 2040x820',
    category: 'doors',
    brand: 'local',
    price: 189.00,
    unit: 'each',
    image: '/images/product-categories/doors.webp',
    inStock: true,
    badge: null,
  },
  {
    id: 9,
    name: 'Stanley FatMax Tape Measure 8m',
    category: 'tools',
    brand: 'stanley',
    price: 42.00,
    unit: 'each',
    image: '/images/product-categories/tools.webp',
    inStock: true,
    badge: null,
  },
  {
    id: 10,
    name: 'Dulux Weathershield Exterior Paint 10L',
    category: 'paint',
    brand: 'local',
    price: 185.00,
    unit: 'each',
    image: '/images/product-categories/paint.webp',
    inStock: true,
    badge: null,
  },
  {
    id: 11,
    name: 'Safety Glasses Clear Lens',
    category: 'safety',
    brand: 'local',
    price: 12.00,
    unit: 'each',
    image: '/images/product-categories/safety.webp',
    inStock: true,
    badge: null,
  },
  {
    id: 12,
    name: 'Stainless Steel Butt Hinge 100mm',
    category: 'hardware',
    brand: 'local',
    price: 8.50,
    unit: 'pair',
    image: '/images/product-categories/bolts.webp',
    inStock: true,
    badge: null,
  },
];

const sortOptions = [
  { id: 'featured', name: 'Featured' },
  { id: 'price-low', name: 'Price: Low to High' },
  { id: 'price-high', name: 'Price: High to Low' },
  { id: 'name', name: 'Name A-Z' },
];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedBrand, setSelectedBrand] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [showInStockOnly, setShowInStockOnly] = useState(false);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const filteredProducts = products
    .filter(p => selectedCategory === 'all' || p.category === selectedCategory)
    .filter(p => selectedBrand === 'all' || p.brand === selectedBrand)
    .filter(p => !showInStockOnly || p.inStock)
    .sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      return 0;
    });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-[#231f20] py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#0061af] font-medium mb-2 uppercase tracking-wider text-sm">Browse Our Range</p>
          <h1 className="text-3xl md:text-5xl font-bold text-white">Products</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Mobile Filter Toggle */}
          <button
            onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
            className="lg:hidden flex items-center justify-center gap-2 bg-[#231f20] text-white py-3 px-4 rounded-xl font-medium"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
            Filters
          </button>

          {/* Sidebar Filters */}
          <aside className={`lg:w-72 flex-shrink-0 ${mobileFiltersOpen ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white rounded-2xl p-6 shadow-sm sticky top-32">
              <h2 className="font-bold text-lg text-[#231f20] mb-6">Filters</h2>
              
              {/* Categories */}
              <div className="mb-8">
                <h3 className="font-semibold text-[#231f20] mb-3">Category</h3>
                <div className="space-y-2">
                  {categories.map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                        selectedCategory === cat.id
                          ? 'bg-[#0061af] text-white font-medium'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Brands */}
              <div className="mb-8">
                <h3 className="font-semibold text-[#231f20] mb-3">Brand</h3>
                <div className="space-y-2">
                  {brands.map(brand => (
                    <button
                      key={brand.id}
                      onClick={() => setSelectedBrand(brand.id)}
                      className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                        selectedBrand === brand.id
                          ? 'bg-[#0061af] text-white font-medium'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      {brand.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div className="mb-8">
                <h3 className="font-semibold text-[#231f20] mb-3">Availability</h3>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={showInStockOnly}
                    onChange={(e) => setShowInStockOnly(e.target.checked)}
                    className="w-5 h-5 rounded border-gray-300 text-[#0061af] focus:ring-[#0061af]"
                  />
                  <span className="text-sm text-gray-600">In Stock Only</span>
                </label>
              </div>

              {/* Clear Filters */}
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSelectedBrand('all');
                  setShowInStockOnly(false);
                }}
                className="w-full py-2 text-sm text-[#0061af] font-medium hover:underline"
              >
                Clear All Filters
              </button>
            </div>
          </aside>

          {/* Product Grid */}
          <main className="flex-1">
            {/* Sort & Results Count */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
              <p className="text-gray-600">
                <span className="font-semibold text-[#231f20]">{filteredProducts.length}</span> products found
              </p>
              <div className="flex items-center gap-2">
                <label className="text-sm text-gray-600">Sort by:</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0061af]"
                >
                  {sortOptions.map(opt => (
                    <option key={opt.id} value={opt.id}>{opt.name}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
                <Link
                  key={product.id}
                  href={`/products/${product.category}/${product.id}`}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  {/* Product Image */}
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      unoptimized
                    />
                    {product.badge && (
                      <span className={`absolute top-3 left-3 px-3 py-1 text-xs font-semibold rounded-full ${
                        product.badge === 'Sale' ? 'bg-red-500 text-white' :
                        product.badge === 'Popular' ? 'bg-[#0061af] text-white' :
                        'bg-[#231f20] text-white'
                      }`}>
                        {product.badge}
                      </span>
                    )}
                    {!product.inStock && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <span className="bg-white text-[#231f20] px-4 py-2 rounded-full text-sm font-semibold">
                          Out of Stock
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Product Info */}
                  <div className="p-5">
                    <h3 className="font-semibold text-[#231f20] mb-2 group-hover:text-[#0061af] transition-colors line-clamp-2">
                      {product.name}
                    </h3>
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-bold text-[#231f20]">
                        ${product.price.toFixed(2)}
                      </span>
                      <span className="text-sm text-gray-500">{product.unit}</span>
                    </div>
                    <button className="mt-4 w-full bg-[#231f20] text-white py-3 rounded-xl font-medium hover:bg-[#0061af] transition-colors">
                      View Product
                    </button>
                  </div>
                </Link>
              ))}
            </div>

            {/* Empty State */}
            {filteredProducts.length === 0 && (
              <div className="text-center py-16">
                <svg className="w-16 h-16 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
                <h3 className="text-xl font-semibold text-[#231f20] mb-2">No products found</h3>
                <p className="text-gray-600 mb-4">Try adjusting your filters to find what you're looking for.</p>
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setSelectedBrand('all');
                    setShowInStockOnly(false);
                  }}
                  className="text-[#0061af] font-medium hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
