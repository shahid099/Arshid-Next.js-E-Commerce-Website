"use client";
import { useContext } from "react";
import MyContext from "../contextApi/createContext";
import Image from "next/image";
import { categories } from "../data/categories";
import { trendingProducts, flashSaleProducts } from "../data/products";

import { 
     BannerImg1, 
    //  BannerImg2, 
    //  BannerImg3, 
    //  BannerImg4, 
    //  BannerImg5, 
    } 
    from "../public/assest/banner/index"

export default function Main() {

  const data = useContext(MyContext);

  if (!data) {
    throw new Error("Main must be used within a FunctionsProvider");
  }

  const { user, setUser } = data;

  return (
    <main className="bg-gray-400 text-gray-900">  
      {/* Hero Section */}  
      <section className="flex px-8 py-8 gap-6">
        <div className="w-2/3 bg-gray-300 rounded-lg flex items-center justify-between pl-10">
          <div>
            <h1 className="text-4xl font-bold">SALE UP TO 50% OFF</h1>
            <button className="mt-4 px-6 py-2 bg-orange-500 text-white rounded-md">Shop Now</button>
          </div>
          <Image className="rounded-lg" src={BannerImg1} alt="Sale" width={400} height={200} />
        </div>
        <div className="flex flex-col w-1/3 gap-6">
          <div className="bg-gray-300 rounded-lg p-4 flex items-center justify-center">New Arrival</div>
          <div className="bg-gray-300 rounded-lg p-4 flex items-center justify-center">Best Deals</div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="px-8 py-6">
        <h2 className="text-xl font-semibold mb-4">Featured Categories</h2>
        <div className="grid grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div key={cat.id} className="bg-gray-50 rounded-md shadow hover:shadow-lg transition p-4 flex flex-col items-center">
              <Image src={cat.image} alt={cat.name} width={100} height={100} />
              <p className="mt-2">{cat.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Trending Products */}
      <section className="px-8 py-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Trending Products</h2>
          <button className="text-gray-500 hover:text-gray-800">See All</button>
        </div>
        <div className="grid grid-cols-4 gap-6">
          {trendingProducts.map((product) => (
            <div key={product.id} className="bg-white border rounded-md shadow hover:shadow-lg transition p-4 relative">
              {product.badge && <span className="absolute top-2 right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded">{product.badge}</span>}
              <Image src={product.image} alt={product.name} width={150} height={150} />
              <p className="mt-2">{product.name}</p>
              <p className="font-bold">{product.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Flash Sale */}
      <section className="px-8 py-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Flash Sale</h2>
          <span className="text-red-500 font-bold">03 : 21 : 15</span>
        </div>
        <div className="grid grid-cols-5 gap-4">
          {flashSaleProducts.map((product) => (
            <div key={product.id} className="bg-white border rounded-md shadow hover:shadow-lg transition p-4">
              <Image src={product.image} alt={product.name} width={120} height={120} />
              <p className="mt-2">{product.name}</p>
              <p className="font-bold">{product.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial */}
      <section className="px-8 py-8 flex gap-8">
        <blockquote className="bg-gray-50 p-6 rounded-md flex-1">
          <p className="italic mb-2">Great products, fast shipping, and excellent customer service. Highly recommend!</p>
          <div className="text-yellow-500">★★★★★</div>
          <p className="mt-1 font-semibold">Sarah W.</p>
        </blockquote>
        <div className="bg-gray-50 p-6 rounded-md flex-1">
          <h3 className="text-lg font-semibold mb-2">Subscribe to Our Newsletter</h3>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter email address"
              className="flex-1 border border-gray-300 rounded-l-md px-4 py-2 focus:outline-none"
            />
            <button className="bg-orange-500 text-white px-6 rounded-r-md">Subscribe</button>
          </div>
        </div>
      </section>
    </main>
  );
}








