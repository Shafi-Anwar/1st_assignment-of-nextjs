import React from "react";

function Navbar() {
  return (
    <div>
      <header className="flex justify-between items-center  p-4">
        <div>
          <h1 className="text-xl font-bold">Logo Here</h1>
          <p className="text-sm">Slogan Here</p>
        </div>
        <div className="text-right">
          <p className="text-lg">8583959528</p>
          <div className="flex gap-2 justify-end mt-1">
            <div className="w-5 h-5 border rounded-full" />
            <div className="w-5 h-5 border rounded-full" />
            <div className="w-5 h-5 border rounded-full" />
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="flex justify-center gap-8  py-2 text-gray-600">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/services">Services</a>
        <a href="/blog">Blog</a>
        <a href="/contacts">Contacts</a>
      </nav>
    </div>
  );
}

export default Navbar;
