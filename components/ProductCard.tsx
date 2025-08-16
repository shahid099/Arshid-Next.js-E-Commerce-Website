// components/ProductCard.tsx
"use client";
import React from "react";

export type ProductTile = {
  id: number;
  title: string;
  price: number;
  description?: string;
  category?: string;
  image?: string; // data URL or external URL
};

export default function ProductCard({ product }: { product: ProductTile }) {
  return (
    <article className="border rounded-lg bg-white p-3 shadow-sm hover:shadow-md flex flex-col">
      <div className="relative w-full h-56 mb-3 bg-gray-100 rounded overflow-hidden">
        {product.image ? (
          <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">No image</div>
        )}
      </div>

      <h3 className="text-sm font-medium text-gray-800 mb-1 line-clamp-2">{product.title}</h3>
      <p className="text-sm text-gray-500 mb-3 line-clamp-2">{product.description}</p>

      <div className="mt-auto flex items-center justify-between gap-2">
        <div>
          <div className="text-lg font-semibold text-gray-900">${product.price}</div>
        </div>

        <div className="flex items-center gap-2">
          <button className="border rounded px-3 py-1 text-sm">Add to Cart</button>
          <button className="p-2 rounded-full border text-gray-600" aria-label="wishlist">
            ♡
          </button>
        </div>
      </div>
    </article>
  );
}
