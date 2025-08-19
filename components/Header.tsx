"use client";
import Link from "next/link";
import React, { useState, useEffect, useCallback } from "react";
import {
  Search,
  Heart,
  ShoppingCart,
  User,
  ChevronDown,
  Sun,
  Moon,
} from "lucide-react";

interface Suggestion {
  id: number;
  text: string;
}

const categories = [
  { name: "Electronics", sub: ["Mobiles", "Laptops", "Accessories"] },
  { name: "Fashion", sub: ["Men", "Women", "Kids"] },
  { name: "Home", sub: ["Furniture", "Decor", "Kitchen"] },
];

const suggestionsList: Suggestion[] = [
  { id: 1, text: "Apple Watch" },
  { id: 2, text: "Samsung Phone" },
  { id: 3, text: "Laptop Bag" },
  { id: 4, text: "Watch" },
  { id: 5, text: "Wireless Earbuds" },
  { id: 6, text: "Gaming Laptop" },
  { id: 7, text: "Bluetooth Speaker" },
  { id: 8, text: "Smart TV" },
  { id: 9, text: "Running Shoes" },
  { id: 10, text: "Men's Jacket" },
  { id: 11, text: "Women's Handbag" },
  { id: 12, text: "Kids Toys" },
  { id: 13, text: "Kitchen Appliances" },
  { id: 14, text: "Fitness Tracker" },
  { id: 15, text: "Office Chair" },
  { id: 16, text: "Wireless Keyboard" },
  { id: 17, text: "Tablet Stand" },
  { id: 18, text: "Power Bank" },
  { id: 19, text: "Coffee Maker" },
  { id: 20, text: "Portable Projector" },
];

const Header: React.FC = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Handle Search
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    if (value.length > 0) {
      setSuggestions(
        suggestionsList.filter((item) =>
          item.text.toLowerCase().includes(value.toLowerCase())
        )
      );
    } else {
      setSuggestions([]);
    }
  };

  // Theme toggle function
  const handleThemeToggle = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  // ✅ Handle Scroll Behavior (fixed with useCallback)
  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    setIsVisible(currentScrollY < lastScrollY);
    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]); // ✅ No ESLint warnings now

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-16"
      } ${theme} border-b shadow-sm`}
    >
      {/* Top Bar */}
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className={`text-2xl font-bold ${theme}`}>MyStore</div>

        {/* Search Bar */}
        <div className="relative w-1/2 z-50">
          <input
            type="text"
            placeholder="Search for products..."
            value={query}
            onChange={handleSearchChange}
            className={`w-full rounded-full border px-4 py-2 pl-10 focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-200 ${theme}`}
          />
          <Search className={`absolute left-3 top-2.5 ${theme}`} size={20} />
          {/* Auto-suggestions */}
          {suggestions.length > 0 && (
            <ul
              className={`absolute mt-1 w-full rounded-md shadow-lg border border-gray-200 z-50 ${theme}`}
            >
              {suggestions.map((s) => (
                <li key={s.id} className={`cursor-pointer px-4 py-2 ${theme}`}>
                  {s.text}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Icons + Theme Switch */}
        <div className={`flex items-center space-x-6 ${theme}`}>
          <Heart className="cursor-pointer hover:text-blue-600" />
          <ShoppingCart className="cursor-pointer hover:text-blue-600" />
          <Link href="/signup">
            <User className="cursor-pointer hover:text-blue-600" />
          </Link>
          <button
            onClick={handleThemeToggle}
            className={`p-2 rounded-full ${theme} transition`}
            aria-label="Toggle Theme"
          >
            {theme === "light" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className={`flex items-center justify-between px-6 py-3 ${theme}`}>
        {/* Categories */}
        <ul className={`flex space-x-8 font-medium ${theme}`}>
          {categories.map((cat) => (
            <li key={cat.name} className="group relative cursor-pointer">
              <div className="flex items-center hover:text-blue-600 transition-colors">
                {cat.name}
                <ChevronDown className="ml-1" size={16} />
              </div>
              {/* Dropdown */}
              <ul
                className={`absolute hidden mt-2 w-44 rounded-md shadow-lg border group-hover:block ${theme}`}
              >
                {cat.sub.map((sub) => (
                  <li key={sub} className={`px-4 py-2 cursor-pointer ${theme}`}>
                    {sub}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
