import React from "react";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-2xl font-semibold tracking-wide text-gray-800">
          Lumina
        </h1>

        {/* Menu */}
        <nav className="hidden md:flex gap-10 text-gray-700 font-medium">
          <button className="hover:text-green-600 transition">
            Tienda
          </button>

          <button className="hover:text-green-600 transition">
            Acerca de
          </button>

          <button className="hover:text-green-600 transition">
            Contacto
          </button>

          <button className="hover:text-green-600 transition">
            🛒
          </button>
        </nav>

      </div>
    </header>
  );
};

export default Navbar;