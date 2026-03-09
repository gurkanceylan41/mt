"use client";

import { useState, useEffect, useRef } from "react";
import { useThemeContext } from "@/app/contexts/ThemeContext";
import { Check, ShoppingCart, Eye, X, Package, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

function ProductCard({ product, onQuickView }) {
  const { darkMode, theme } = useThemeContext();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const intervalRef = useRef(null);

  const allImages = product.images && product.images.length > 0
    ? product.images
    : [product.image];

  const handleMouseEnter = () => {
    if (allImages.length > 1) {
      intervalRef.current = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
      }, 1000);
    }
  };

  const handleMouseLeave = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setCurrentImageIndex(0);
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <div
      className={`group relative overflow-hidden rounded-lg transition-all duration-500 ${
        darkMode
          ? "bg-[#161616] border border-[#2a2825] hover:border-[#c4a265]"
          : "bg-white border border-[#e8e5df] hover:border-[#9a7740]"
      } hover:shadow-xl hover:-translate-y-1`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={allImages[currentImageIndex]}
          alt={product.title}
          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
        />

        {/* Image Indicators */}
        {allImages.length > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {allImages.map((_, idx) => (
              <div
                key={idx}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  idx === currentImageIndex
                    ? "bg-white w-4"
                    : "bg-white/50"
                }`}
              />
            ))}
          </div>
        )}

        {/* Gradient Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t ${
          darkMode ? "from-[#161616]" : "from-black/50"
        } via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500`} />

        {/* Tag Badge */}
        {product.tag && (
          <div className={`absolute top-4 left-4 px-3 py-1.5 rounded-[4px] text-xs font-semibold ${
            darkMode
              ? "bg-[#c4a265] text-[#0a0a0a]"
              : "bg-[#9a7740] text-white"
          }`}>
            {product.tag}
          </div>
        )}

        {/* Quick View Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-400">
          <button
            onClick={() => onQuickView(product)}
            className={`px-5 py-2.5 rounded-lg text-sm font-semibold flex items-center gap-2 shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 ${
              darkMode
                ? "bg-[#f0ede8] text-[#111111] hover:bg-white"
                : "bg-white text-[#111111] hover:bg-[#f5f5f0]"
            }`}
          >
            <Eye className="w-4 h-4" />
            Hızlı Bakış
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Subcategory Chip */}
        <div className="flex items-center gap-1.5 mb-3">
          <div className={`w-1.5 h-1.5 rounded-full ${darkMode ? "bg-[#c4a265]" : "bg-[#9a7740]"}`} />
          <span className={`text-xs font-semibold tracking-wider uppercase ${
            darkMode ? "text-[#c4a265]/80" : "text-[#9a7740]/70"
          }`}>
            {product.subcategory}
          </span>
        </div>

        {/* Title */}
        <h3 className={`text-base font-semibold leading-snug mb-2 line-clamp-2 ${theme.text}`}>
          {product.title}
        </h3>

        {/* Features as inline tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {product.features.slice(0, 3).map((feature, idx) => (
            <span
              key={idx}
              className={`text-[10px] font-medium px-2.5 py-1 rounded-[4px] ${
                darkMode
                  ? "bg-[#1a1a1a] text-[#8a8580] border border-[#2a2825]"
                  : "bg-[#fafaf8] text-[#6b6b6b] border border-[#e8e5df]"
              }`}
            >
              {feature}
            </span>
          ))}
          {product.features.length > 3 && (
            <span className={`text-[10px] font-medium px-2 py-1 ${theme.textMuted}`}>
              +{product.features.length - 3}
            </span>
          )}
        </div>

        {/* Footer */}
        <div className={`flex items-center justify-between pt-3.5 border-t ${
          darkMode ? "border-[#2a2825]" : "border-[#e8e5df]"
        }`}>
          <div className="flex items-center gap-1.5">
            <Package className={`w-3.5 h-3.5 ${theme.textMuted}`} />
            <span className={`text-xs font-medium ${theme.textMuted}`}>
              Min {product.minOrder} adet
            </span>
          </div>
          <button className={`flex items-center gap-1.5 px-4 py-2 rounded-[6px] text-xs font-semibold transition-all duration-300 ${
            darkMode
              ? "bg-[#c4a265]/10 text-[#c4a265] hover:bg-[#c4a265]/20 border border-[#c4a265]/20"
              : "bg-[#9a7740] text-white hover:bg-[#8a6730]"
          }`}>
            <ShoppingCart className="w-3.5 h-3.5" />
            Teklif Al
          </button>
        </div>
      </div>
    </div>
  );
}

function QuickViewModal({ product, onClose }) {
  const { darkMode, theme } = useThemeContext();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  if (!product) return null;

  const allImages = product.images && product.images.length > 0
    ? product.images
    : [product.image];

  const goToPrevImage = () => {
    setSelectedImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  const goToNextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % allImages.length);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-md" />

      {/* Modal */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-lg shadow-2xl ${
          darkMode
            ? "bg-[#111111] border border-[#2a2825]"
            : "bg-white"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className={`absolute top-5 right-5 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
            darkMode
              ? "bg-[#1a1a1a] border border-[#2a2825] text-[#f0ede8] hover:border-[#c4a265]"
              : "bg-[#f5f5f0] text-[#6b6b6b] hover:bg-[#e8e5df]"
          }`}
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid md:grid-cols-2 gap-0">
          {/* Image Gallery */}
          <div className="relative aspect-square md:aspect-auto md:min-h-[500px] overflow-hidden rounded-t-lg md:rounded-l-lg md:rounded-tr-none">
            <img
              src={allImages[selectedImageIndex]}
              alt={product.title}
              className="w-full h-full object-cover transition-all duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

            {/* Navigation Arrows */}
            {allImages.length > 1 && (
              <>
                <button
                  onClick={goToPrevImage}
                  className={`absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
                    darkMode
                      ? "bg-[#161616]/90 border border-[#2a2825] text-[#f0ede8] hover:border-[#c4a265]"
                      : "bg-white/90 text-[#111111] hover:bg-white"
                  }`}
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={goToNextImage}
                  className={`absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
                    darkMode
                      ? "bg-[#161616]/90 border border-[#2a2825] text-[#f0ede8] hover:border-[#c4a265]"
                      : "bg-white/90 text-[#111111] hover:bg-white"
                  }`}
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}

            {/* Thumbnail Strip */}
            {allImages.length > 1 && (
              <div className={`absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 p-2 rounded-lg ${
                darkMode ? "bg-[#0a0a0a]/80" : "bg-black/30"
              } backdrop-blur-sm`}>
                {allImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImageIndex(idx)}
                    className={`w-12 h-12 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                      idx === selectedImageIndex
                        ? darkMode
                          ? "border-[#c4a265] scale-110"
                          : "border-white scale-110"
                        : "border-transparent opacity-70 hover:opacity-100"
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            {product.tag && (
              <div className={`absolute top-5 left-5 px-4 py-2 rounded-[4px] text-xs font-semibold ${
                darkMode
                  ? "bg-[#c4a265] text-[#0a0a0a]"
                  : "bg-[#9a7740] text-white"
              }`}>
                {product.tag}
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-8 md:p-10 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-4">
              <div className={`w-2 h-2 rounded-full ${darkMode ? "bg-[#c4a265]" : "bg-[#9a7740]"}`} />
              <span className={`text-xs font-semibold tracking-wider uppercase ${
                darkMode ? "text-[#c4a265]" : "text-[#9a7740]"
              }`}>
                {product.subcategory}
              </span>
            </div>

            <h2 className={`font-display text-2xl md:text-3xl font-semibold tracking-tight mb-4 ${theme.text}`}>
              {product.title}
            </h2>

            <p className={`text-sm leading-relaxed mb-8 ${theme.textMuted}`}>
              {product.description}
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-2.5 mb-8">
              {product.features.map((feature, idx) => (
                <div key={idx} className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded-lg ${
                  darkMode ? "bg-[#1a1a1a] border border-[#2a2825]" : "bg-[#fafaf8] border border-[#e8e5df]"
                }`}>
                  <div className={`w-5 h-5 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    darkMode ? "bg-[#c4a265]/20" : "bg-[#9a7740]/20"
                  }`}>
                    <Check className={`w-3 h-3 ${darkMode ? "text-[#c4a265]" : "text-[#9a7740]"}`} />
                  </div>
                  <span className={`text-sm font-medium ${theme.text}`}>
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* Min Order Info */}
            <div className={`flex items-center justify-between p-4 rounded-lg mb-6 ${
              darkMode ? "bg-[#1a1a1a] border border-[#2a2825]" : "bg-[#fafaf8] border border-[#e8e5df]"
            }`}>
              <div>
                <span className={`text-xs font-medium ${theme.textMuted}`}>
                  Minimum Sipariş
                </span>
                <p className={`text-lg font-bold ${theme.text}`}>
                  {product.minOrder} adet
                </p>
              </div>
              <Package className={`w-8 h-8 ${darkMode ? "text-[#2a2825]" : "text-[#e8e5df]"}`} />
            </div>

            {/* CTA */}
            <button className={`w-full py-4 rounded-[6px] font-semibold text-sm flex items-center justify-center gap-2.5 transition-all duration-300 ${
              darkMode
                ? "bg-white text-[#111111] hover:bg-[#f0ede8]"
                : "bg-[#111111] text-white hover:bg-[#333333]"
            }`}>
              <ShoppingCart className="w-5 h-5" />
              Teklif İste
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProductGallery({ products, categoryTitle }) {
  const { darkMode, theme } = useThemeContext();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  const totalPages = Math.ceil(products.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = products.slice(startIndex, startIndex + productsPerPage);

  return (
    <section className={`py-20 ${theme.bgAlt}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <span className={`badge mb-4 ${darkMode ? "badge-dark" : "badge-light"}`}>
              ÜRÜN KATALOĞU
            </span>
            <h2 className={`font-display text-3xl sm:text-4xl font-semibold tracking-tight ${theme.text}`}>
              {categoryTitle}
            </h2>
            <p className={`mt-2 text-sm ${theme.textMuted}`}>
              {products.length} ürün bulundu
            </p>
          </div>

          {/* Page indicator */}
          {totalPages > 1 && (
            <div className={`text-sm font-medium ${theme.textMuted}`}>
              Sayfa {currentPage} / {totalPages}
            </div>
          )}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {currentProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={setSelectedProduct}
            />
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-1.5 mt-16">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
                currentPage === 1
                  ? "opacity-30 cursor-not-allowed"
                  : darkMode
                  ? "hover:bg-[#c4a265] hover:text-[#0a0a0a]"
                  : "hover:bg-[#9a7740] hover:text-white"
              } ${
                darkMode
                  ? "bg-[#161616] border border-[#2a2825] text-[#8a8580]"
                  : "bg-[#fafaf8] border border-[#e8e5df] text-[#6b6b6b]"
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
              const showPage = page === 1 || page === totalPages ||
                (page >= currentPage - 1 && page <= currentPage + 1);
              const showEllipsis = page === currentPage - 2 || page === currentPage + 2;

              if (!showPage && !showEllipsis) return null;
              if (showEllipsis) {
                return (
                  <span key={page} className={`w-8 text-center text-sm ${theme.textMuted}`}>
                    ...
                  </span>
                );
              }

              return (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-10 h-10 rounded-lg text-sm font-semibold transition-all duration-300 ${
                    currentPage === page
                      ? darkMode
                        ? "bg-[#c4a265] text-[#0a0a0a]"
                        : "bg-[#9a7740] text-white"
                      : darkMode
                      ? "bg-[#161616] border border-[#2a2825] text-[#8a8580] hover:border-[#c4a265]"
                      : "bg-[#fafaf8] border border-[#e8e5df] text-[#6b6b6b] hover:border-[#9a7740]"
                  }`}
                >
                  {page}
                </button>
              );
            })}

            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
                currentPage === totalPages
                  ? "opacity-30 cursor-not-allowed"
                  : darkMode
                  ? "hover:bg-[#c4a265] hover:text-[#0a0a0a]"
                  : "hover:bg-[#9a7740] hover:text-white"
              } ${
                darkMode
                  ? "bg-[#161616] border border-[#2a2825] text-[#8a8580]"
                  : "bg-[#fafaf8] border border-[#e8e5df] text-[#6b6b6b]"
              }`}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* Quick View Modal */}
      {selectedProduct && (
        <QuickViewModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </section>
  );
}
