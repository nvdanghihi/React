import React from 'react'

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-black text-white z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold">Herion</div>
        <nav className="hidden md:flex space-x-6">
          <a href="#hero" className="hover:text-red-500">Home</a>
          <a href="#releases" className="hover:text-red-500">Releases</a>
          <a href="#tour" className="hover:text-red-500">Tour</a>
          <a href="#news" className="hover:text-red-500">News</a>
        </nav>
        <div className="md:hidden">
          <button className="text-white">☰</button>
        </div>
      </div>
    </header>
  );

}

export default Header
