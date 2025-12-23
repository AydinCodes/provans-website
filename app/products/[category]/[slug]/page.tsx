'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import gsap from 'gsap';
import Image from 'next/image';
import { getCategoryBySlug, getProductBySlug, getProductsByCategory } from '@/app/data/products';

function getImagePath(imagePath: string, imageFilename: string): string {
  return `${imagePath}${imageFilename}`;
}

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const categorySlug = params.category as string;
  
  const product = getProductBySlug(slug);
  const category = getCategoryBySlug(categorySlug);
  const relatedProducts = getProductsByCategory(categorySlug).filter(p => p.slug !== slug).slice(0, 4);
  
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [selectedLength, setSelectedLength] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [imageError, setImageError] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyImageFilename = () => {
    if (product) {
      navigator.clipboard.writeText(product.imageFilename);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };
  
  const pageRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (product) {
      const url = getImagePath(product.imagePath, product.imageFilename);
      setImageUrl(url);
      setImageError(false);
    }
  }, [product]);

  useEffect(() => {
    if (!pageRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(imageRef.current, {
        opacity: 0,
        x: -50,
        duration: 0.8,
        ease: 'power3.out',
      });

      gsap.from(detailsRef.current, {
        opacity: 0,
        x: 50,
        duration: 0.8,
        ease: 'power3.out',
        delay: 0.2,
      });

      gsap.from('.related-product', {
        scrollTrigger: {
          trigger: '.related-products',
          start: 'top bottom-=100',
          once: true,
        },
        opacity: 0,
        y: 40,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
        immediateRender: false,
      });
    }, pageRef);

    return () => ctx.revert();
  }, [slug]);

  useEffect(() => {
    if (product?.variants[selectedVariant]?.lengths) {
      setSelectedLength(product.variants[selectedVariant].lengths[0]);
    } else {
      setSelectedLength(null);
    }
  }, [selectedVariant, product]);

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#231f20] mb-4">Product Not Found</h1>
          <Link href="/products" className="text-[#0061af] font-medium hover:underline">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const currentVariant = product.variants[selectedVariant];

  return (
    <div ref={pageRef} className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/products" className="text-gray-500 hover:text-[#0061af] transition-colors">
              Products
            </Link>
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link href={`/products?category=${categorySlug}`} className="text-gray-500 hover:text-[#0061af] transition-colors">
              {category?.name || product.category}
            </Link>
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-[#231f20] font-medium">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Detail */}
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Product Image */}
          <div ref={imageRef}>
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm sticky top-32">
              <div className="aspect-square bg-gray-100 relative">
                {imageUrl && !imageError ? (
                  <img
                    src={imageUrl}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                    <svg className="w-20 h-20 text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-gray-400 text-sm mb-2">Image needed:</p>
                    <button
                      onClick={copyImageFilename}
                      className="text-[#0061af] font-mono text-sm font-medium mb-1 hover:text-[#004a8a] transition-colors cursor-pointer px-3 py-1 rounded hover:bg-blue-50"
                      title="Click to copy filename"
                    >
                      {copied ? '✓ Copied!' : product.imageFilename}
                    </button>
                    <p className="text-gray-400 text-xs">Folder: <span className="font-mono">{product.imagePath}</span></p>
                  </div>
                )}
                {product.badge && (
                  <span className={`absolute top-4 left-4 px-4 py-2 text-sm font-semibold rounded-full ${
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
            </div>
          </div>

          {/* Product Details */}
          <div ref={detailsRef}>
            <div className="mb-6">
              <p className="text-[#0061af] font-medium text-sm uppercase tracking-wider mb-2">
                {product.category}
              </p>
              <h1 className="text-3xl md:text-4xl font-bold text-[#231f20] mb-4">
                {product.name}
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Features */}
            {product.features && product.features.length > 0 && (
              <div className="mb-8">
                <h3 className="font-semibold text-[#231f20] mb-3">Features</h3>
                <div className="flex flex-wrap gap-2">
                  {product.features.map((feature, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Size Selection */}
            <div className="mb-6">
              <h3 className="font-semibold text-[#231f20] mb-3">
                Select Size
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {product.variants.map((variant, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedVariant(i)}
                    className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                      selectedVariant === i
                        ? 'bg-[#0061af] text-white shadow-lg shadow-[#0061af]/25'
                        : 'bg-white text-[#231f20] border border-gray-200 hover:border-[#0061af]'
                    }`}
                  >
                    {variant.size}
                  </button>
                ))}
              </div>
            </div>

            {/* Length Selection (if applicable) */}
            {currentVariant.lengths && currentVariant.lengths.length > 0 && (
              <div className="mb-6">
                <h3 className="font-semibold text-[#231f20] mb-3">
                  Select Length
                </h3>
                <div className="flex flex-wrap gap-2">
                  {currentVariant.lengths.map((length) => (
                    <button
                      key={length}
                      onClick={() => setSelectedLength(length)}
                      className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                        selectedLength === length
                          ? 'bg-[#231f20] text-white'
                          : 'bg-white text-[#231f20] border border-gray-200 hover:border-[#231f20]'
                      }`}
                    >
                      {length}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* No lengths - Random lengths notice */}
            {!currentVariant.lengths && (
              <div className="mb-6 p-4 bg-amber-50 border border-amber-200 rounded-xl">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-amber-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="font-medium text-amber-800">Random Lengths</p>
                    <p className="text-sm text-amber-700">This product is available in random lengths. Contact us for current stock availability.</p>
                  </div>
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-8">
              <h3 className="font-semibold text-[#231f20] mb-3">Quantity</h3>
              <div className="flex items-center gap-4">
                <div className="flex items-center bg-white border border-gray-200 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-3 text-[#231f20] hover:bg-gray-100 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                    </svg>
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-16 text-center py-3 text-[#231f20] font-medium focus:outline-none"
                  />
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-3 text-[#231f20] hover:bg-gray-100 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                </div>
                <span className="text-gray-500">
                  {product.soldBy === 'linear meter' ? 'metres' : 
                   product.soldBy === 'sheet' ? 'sheets' :
                   product.soldBy === 'door' ? 'doors' :
                   product.soldBy === 'length' ? 'lengths' :
                   product.soldBy}
                </span>
              </div>
            </div>

            {/* Sold By Info */}
            <div className="mb-8 p-4 bg-gray-100 rounded-xl">
              <div className="flex items-center gap-3">
                <svg className="w-6 h-6 text-[#0061af]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                <div>
                  <p className="font-medium text-[#231f20]">Sold per {product.soldBy}</p>
                  <p className="text-sm text-gray-600">Contact us for pricing and availability</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex-1 bg-[#0061af] text-white py-4 px-8 rounded-xl font-semibold hover:bg-[#004d8c] transition-colors flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Request Quote
              </button>
              <button className="flex-1 bg-[#231f20] text-white py-4 px-8 rounded-xl font-semibold hover:bg-black transition-colors flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call to Order
              </button>
            </div>

            {/* Contact Info */}
            <div className="mt-6 p-4 bg-white border border-gray-200 rounded-xl">
              <p className="text-sm text-gray-600 mb-2">Need help? Contact our team:</p>
              <a href="tel:0398738888" className="text-lg font-semibold text-[#0061af] hover:underline">
                (03) 9873 8888
              </a>
            </div>
          </div>
        </div>

        {/* Product Specifications */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-[#231f20] mb-6">Specifications</h2>
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
            <table className="w-full">
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="px-6 py-4 text-gray-500 font-medium">Category</td>
                  <td className="px-6 py-4 text-[#231f20]">{product.category}</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="px-6 py-4 text-gray-500 font-medium">Available Sizes</td>
                  <td className="px-6 py-4 text-[#231f20]">
                    {product.variants.map(v => v.size).join(', ')}
                  </td>
                </tr>
                {product.variants[0].lengths && (
                  <tr className="border-b border-gray-100">
                    <td className="px-6 py-4 text-gray-500 font-medium">Available Lengths</td>
                    <td className="px-6 py-4 text-[#231f20]">
                      {product.variants[0].lengths.join(', ')}
                    </td>
                  </tr>
                )}
                <tr className="border-b border-gray-100">
                  <td className="px-6 py-4 text-gray-500 font-medium">Sold By</td>
                  <td className="px-6 py-4 text-[#231f20] capitalize">{product.soldBy}</td>
                </tr>
                {product.features && (
                  <tr>
                    <td className="px-6 py-4 text-gray-500 font-medium">Features</td>
                    <td className="px-6 py-4 text-[#231f20]">{product.features.join(', ')}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16 related-products">
            <h2 className="text-2xl font-bold text-[#231f20] mb-6">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map(relatedProduct => {
                const relatedImageUrl = getImagePath(relatedProduct.imagePath, relatedProduct.imageFilename);
                return (
                <Link
                  key={relatedProduct.id}
                  href={`/products/${relatedProduct.categorySlug}/${relatedProduct.slug}`}
                  className="related-product group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="aspect-square bg-gray-100 relative overflow-hidden">
                    {relatedImageUrl ? (
                      <img
                        src={relatedImageUrl}
                        alt={relatedProduct.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    ) : (
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                        <svg className="w-12 h-12 text-gray-300 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <p className="text-xs text-gray-400 font-mono">{relatedProduct.imageFilename}</p>
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-[#231f20] group-hover:text-[#0061af] transition-colors line-clamp-2">
                      {relatedProduct.name}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      {relatedProduct.variants.length} sizes
                    </p>
                  </div>
                </Link>
              );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
