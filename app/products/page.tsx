'use client';

import { useState, useEffect, useRef, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { categories, products } from '../data/products';

gsap.registerPlugin(ScrollTrigger);

function getImagePath(imagePath: string, imageFilename: string): string {
  return `${imagePath}${imageFilename}`;
}

function ProductsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const categoryParam = searchParams.get('category');
  const [selectedCategory, setSelectedCategory] = useState(categoryParam || 'all');
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const copyFilename = (filename: string, id: string) => {
    navigator.clipboard.writeText(filename);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleCategoryChange = (categorySlug: string) => {
    setSelectedCategory(categorySlug);
    if (categorySlug === 'all') {
      router.push('/products');
    } else {
      router.push(`/products?category=${categorySlug}`);
    }
  };

  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    } else {
      setSelectedCategory('all');
    }
  }, [searchParams]);

  useEffect(() => {
    if (!headerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.5,
        ease: 'power2.out',
      });

      const cards = document.querySelectorAll('.product-card');
      if (cards.length > 0) {
        gsap.fromTo('.product-card',
          { opacity: 0, y: 30 },
          {
            scrollTrigger: {
              trigger: '.product-card',
              start: 'top bottom-=50',
              once: true,
            },
            opacity: 1,
            y: 0,
            duration: 0.3,
            stagger: 0.03,
            ease: 'power2.out',
          }
        );
      }
    });

    return () => ctx.revert();
  }, [selectedCategory, searchQuery]);

  const filteredProducts = products
    .filter(p => selectedCategory === 'all' || p.categorySlug === selectedCategory)
    .filter(p => 
      searchQuery === '' || 
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const filteredCategories = selectedCategory === 'all' 
    ? categories 
    : categories.filter(c => c.slug === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div ref={headerRef} className="bg-[#231f20] py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#0061af] font-medium mb-3 uppercase tracking-wider text-sm">Browse Our Range</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Timber & Building Products</h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Quality timber, sheet materials, and building supplies for trade and DIY. 
            Serving Melbourne since 1903.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Search and Filter Bar */}
        <div className="bg-white rounded-2xl p-4 md:p-6 shadow-sm mb-8 md:sticky md:top-28 z-20">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-gray-100 rounded-xl text-[#231f20] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0061af]"
              />
            </div>

            {/* Category Filter - Desktop */}
            <div className="hidden md:flex items-center gap-2 overflow-x-auto pb-1">
              <button
                onClick={() => handleCategoryChange('all')}
                className={`px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-colors ${
                  selectedCategory === 'all'
                    ? 'bg-[#0061af] text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                All Categories
              </button>
              {categories.slice(0, 6).map(cat => (
                <button
                  key={cat.slug}
                  onClick={() => handleCategoryChange(cat.slug)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-colors ${
                    selectedCategory === cat.slug
                      ? 'bg-[#0061af] text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
              <button
                onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
                className="px-4 py-2 rounded-xl text-sm font-medium bg-gray-100 text-gray-600 hover:bg-gray-200 whitespace-nowrap"
              >
                More...
              </button>
            </div>

            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
              className="md:hidden flex items-center justify-center gap-2 bg-[#231f20] text-white py-3 px-4 rounded-xl font-medium"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
              Categories
            </button>
          </div>

          {/* Expanded Category List */}
          {mobileFiltersOpen && (
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2">
                <button
                  onClick={() => { handleCategoryChange('all'); setMobileFiltersOpen(false); }}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    selectedCategory === 'all'
                      ? 'bg-[#0061af] text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  All Categories
                </button>
                {categories.map(cat => (
                  <button
                    key={cat.slug}
                    onClick={() => { handleCategoryChange(cat.slug); setMobileFiltersOpen(false); }}
                    className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                      selectedCategory === cat.slug
                        ? 'bg-[#0061af] text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-gray-600">
            <span className="font-semibold text-[#231f20]">{filteredProducts.length}</span> products
            {selectedCategory !== 'all' && (
              <span> in <span className="font-semibold text-[#231f20]">{categories.find(c => c.slug === selectedCategory)?.name}</span></span>
            )}
          </p>
          {selectedCategory !== 'all' && (
            <button
              onClick={() => handleCategoryChange('all')}
              className="text-[#0061af] font-medium text-sm hover:underline"
            >
              Clear filter
            </button>
          )}
        </div>

        {/* Category Cards (when showing all) */}
        {selectedCategory === 'all' && searchQuery === '' && (
          <div ref={gridRef} className="mb-12">
            <h2 className="text-2xl font-bold text-[#231f20] mb-6">Browse by Category</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {categories.map((cat) => (
                <div
                  key={cat.slug}
                  onClick={() => handleCategoryChange(cat.slug)}
                  className="product-card group bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 text-left cursor-pointer"
                >
                  {/* Category Image */}
                  <div className="aspect-square bg-white rounded-xl mb-4 flex items-center justify-center overflow-hidden relative">
                    <img
                      src={getImagePath(cat.imagePath, cat.imageFilename)}
                      alt={cat.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        const target = e.currentTarget;
                        target.style.display = 'none';
                        const placeholder = target.nextElementSibling;
                        if (placeholder) {
                          (placeholder as HTMLElement).style.display = 'flex';
                        }
                      }}
                    />
                    <div className="absolute inset-0 hidden flex-col items-center justify-center p-4 text-center">
                      <svg className="w-12 h-12 mx-auto text-gray-300 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <p className="text-xs text-gray-400">Image needed</p>
                      <p className="text-xs text-gray-400 mt-1">Folder: <span className="font-mono">{cat.imagePath}</span></p>
                    </div>
                  </div>
                  <h3 className="font-semibold text-[#231f20] group-hover:text-[#0061af] transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1 line-clamp-2">{cat.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Products Grid */}
        <div>
          {selectedCategory !== 'all' && (
            <h2 className="text-2xl font-bold text-[#231f20] mb-6">
              {categories.find(c => c.slug === selectedCategory)?.name}
            </h2>
          )}
          {(selectedCategory !== 'all' || searchQuery !== '') && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map(product => (
                <Link
                  key={product.id}
                  href={`/products/${product.categorySlug}/${product.slug}`}
                  className="product-card group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                >
                  {/* Product Image */}
                  <div className="relative aspect-square bg-white overflow-hidden">
                    <img
                      src={getImagePath(product.imagePath, product.imageFilename)}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        const target = e.currentTarget;
                        target.style.display = 'none';
                        const placeholder = target.nextElementSibling;
                        if (placeholder) {
                          (placeholder as HTMLElement).style.display = 'flex';
                        }
                      }}
                    />
                    <div className="absolute inset-0 hidden flex-col items-center justify-center p-4 text-center">
                      <svg className="w-16 h-16 text-gray-300 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <p className="text-xs text-gray-400 mb-1">Image needed</p>
                    </div>
                    {product.badge && (
                      <span className={`absolute top-3 left-3 px-3 py-1 text-xs font-semibold rounded-full ${
                        product.badge === 'Popular' ? 'bg-[#0061af] text-white' :
                        product.badge === 'Premium' ? 'bg-amber-500 text-white' :
                        product.badge === 'Australian' ? 'bg-green-600 text-white' :
                        product.badge === 'Structural' ? 'bg-purple-600 text-white' :
                        'bg-[#231f20] text-white'
                      }`}>
                        {product.badge}
                      </span>
                    )}
                  </div>

                  {/* Product Info */}
                  <div className="p-5">
                    <p className="text-xs text-[#0061af] font-medium mb-1">{product.category}</p>
                    <h3 className="font-semibold text-[#231f20] mb-2 group-hover:text-[#0061af] transition-colors line-clamp-2">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-500 mb-3">
                      {product.variants.length} {product.variants.length === 1 ? 'size' : 'sizes'} available
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">Sold per {product.soldBy}</span>
                      <svg className="w-5 h-5 text-gray-400 group-hover:text-[#0061af] group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <svg className="w-16 h-16 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
            <h3 className="text-xl font-semibold text-[#231f20] mb-2">No products found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your search or filter to find what you're looking for.</p>
            <button
              onClick={() => { handleCategoryChange('all'); setSearchQuery(''); }}
              className="text-[#0061af] font-medium hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#0061af] mx-auto mb-4"></div>
          <p className="text-gray-600">Loading products...</p>
        </div>
      </div>
    }>
      <ProductsContent />
    </Suspense>
  );
}
