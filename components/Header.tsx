"use client";
import Link from "next/link";
import { useState } from "react";
import { Search, MapPin, ShoppingCart, Menu, User } from "lucide-react";

const Header = () => {
  const [query, setQuery] = useState("");

  return (
    <header className="w-full flex flex-col fixed top-0 left-0 z-50">
      {/* --- Top Bar --- */}
      <div className="flex items-center bg-gray-900 text-white px-4 md:px-6 py-2 gap-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-yellow-400">
          MyStore
        </Link>

        {/* Deliver To */}
        <div className="flex items-center cursor-pointer">
          <MapPin className="mr-1" size={18} />
          <div className="ml-1 leading-tight">
            <p className="text-xs text-gray-300">Deliver to</p>
            <p className="text-xs">Your Location</p>
          </div>
        </div>

        {/* Spacer for Desktop */}
        <div className="flex-grow md:block"></div>

        {/* Sign In */}
        <Link href="/login" className="md:block cursor-pointer">
          <p className="text-xs text-gray-300">Hello, Sign in</p>
          <div className="flex flex-row justify-center items-center gap-1">
            <User size={13} className="cursor-pointer hover:text-blue-600" />
            <p className="text-sm font-semibold">Account</p>
          </div>
        </Link>

        {/* Cart */}
        <Link href="/cart" className="flex items-center gap-1 cursor-pointer">
          <ShoppingCart />
          <span className="text-sm font-semibold hidden md:block">Cart</span>
        </Link>
      </div>

      {/* Search Bar (Desktop inline, Mobile below Top Bar) */}
      <div
        className="
          flex justify-center align-center w-full bg-gray-900 px-4 md:px-6 pb-2
          transition-all duration-300 ease-in-out
        "
      >
        <div className="flex-grow relative mx-auto md:mx-2 max-w-3xl">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products..."
            className="w-full rounded-l-md rounded-r-md px-4 py-2 text-white border border-gray-400"
          />
          <button className="absolute right-0 top-0 bottom-0 bg-yellow-400 text-black px-3 rounded-r-md hover:bg-yellow-500">
            <Search size={18} />
          </button>
        </div>
      </div>

      {/* --- Bottom Nav Bar --- */}
      <nav className="bg-gray-800 text-white px-4 md:px-6 py-2 flex items-center space-x-6 overflow-x-auto">
        {/* All Categories */}
        <div className="flex items-center cursor-pointer font-semibold">
          <Menu className="mr-1" size={20} />
          All
        </div>

        {/* Links */}
        <Link href="#" className="hover:underline">
          Today&apos;s Deals
        </Link>
        <Link href="#" className="hover:underline">
          Customer Service
        </Link>
        <Link href="#" className="hover:underline">
          Gift Cards
        </Link>
        <Link href="#" className="hover:underline">
          Sell
        </Link>
        <Link href="#" className="hover:underline">
          Free Shipping Zone
        </Link>
      </nav>
    </header>
  );
};

export default Header;












// "use client";
// import Link from "next/link";
// import { useState } from "react";
// import { Search, MapPin, ShoppingCart, Menu, User } from "lucide-react";

// const Header = () => {
//   const [query, setQuery] = useState("");

//   return (
//     <header className="w-full flex flex-col fixed top-0 left-0 z-50">
//       {/* --- Top Bar --- */}
//       <div className="flex items-center bg-gray-900 text-white px-4 md:px-6 py-2 gap-4">
//         {/* Logo */}
//         <Link href="/" className="text-2xl font-bold text-yellow-400">MyStore</Link>

//         {/* Deliver To */}
//         <div className="hidden md:flex items-center cursor-pointer">
//           <MapPin className="mr-1" size={18} />
//           <div className="leading-tight">
//             <p className="text-xs text-gray-300">Deliver to</p>
//             <p className="text-sm font-semibold">Your Location</p>
//           </div>
//         </div>

//         {/* Search Bar */}
//         <div className="flex-grow relative mx-2">
//           <input
//             type="text"
//             value={query}
//             onChange={(e) => setQuery(e.target.value)}
//             placeholder="Search products..."
//             className="w-full rounded-l-md rounded-r-md px-4 py-2 text-white border border-gray-400"
//           />
//           <button className="absolute right-0 top-0 bottom-0 bg-yellow-400 text-black px-3 rounded-r-md">
//             <Search size={18} />
//           </button>
//         </div>

//         {/* Sign In */}
//         <Link href="/login" className="hidden md:block cursor-pointer">
//           <p className="text-xs text-gray-300">Hello, Sign in</p>
//           <div className="flex flex-row justify-center items-center gap-1">
//             <User size={13} className="cursor-pointer hover:text-blue-600" />
//             <p className="text-sm font-semibold">Account</p>
//           </div>
//         </Link>

//         {/* Cart */}
//         <Link href="/cart" className="flex items-center gap-1 cursor-pointer">
//           <ShoppingCart />
//           <span className="text-sm font-semibold hidden md:block">Cart</span>
//         </Link>
//       </div>

//       {/* --- Bottom Nav Bar --- */}
//       <nav className="bg-gray-800 text-white px-4 md:px-6 py-2 flex items-center space-x-6 overflow-x-auto">
//         {/* All Categories */}
//         <div className="flex items-center cursor-pointer font-semibold">
//           <Menu className="mr-1" size={20} />
//           All
//         </div>

//         {/* Links */}
//         <Link href="#" className="hover:underline">
//           Today&apos;s Deals
//         </Link>
//         <Link href="#" className="hover:underline">
//           Customer Service
//         </Link>
//         <Link href="#" className="hover:underline">
//           Gift Cards
//         </Link>
//         <Link href="#" className="hover:underline">
//           Sell
//         </Link>
//         <Link href="#" className="hover:underline">
//           Free Shipping Zone
//         </Link>
//       </nav>
//     </header>
//   );
// };

// export default Header;




