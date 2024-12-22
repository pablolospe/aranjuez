'use client'

import { useState } from 'react';
import { Menu, Phone } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
      <nav className="bg-stone-100 border-b border-stone-200 px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <button className="lg:hidden" onClick={toggleMenu}>
              <Menu className="h-6 w-6 text-stone-700" />
            </button>
            <h1 className="text-2xl font-serif text-stone-800">Aranjuez</h1>
            <div className="hidden lg:flex space-x-6 text-stone-600">
              <Link href="/">
                <span className="hover:text-stone-900">Inicio</span>
              </Link>
              <Link href="/menu">
                <span className="hover:text-stone-900">Menú</span>
              </Link>
              <Link href="/reservas">
                <span className="hover:text-stone-900">Reservas</span>
              </Link>
              <Link href="/eventos">
                <span className="hover:text-stone-900">Eventos</span>
              </Link>
            </div>
          </div>
          <div className="hidden lg:block">
            <button className="px-4 py-2 bg-stone-800 text-white rounded hover:bg-stone-700">
              <Phone className="h-5 w-5 inline-block mr-2" /> Contacto
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="lg:hidden mt-4 space-y-2 text-stone-600">
            <Link href="/">
              <span className="block px-4 py-2 hover:bg-stone-200">Inicio</span>
            </Link>
            <Link href="/menu">
              <span className="block px-4 py-2 hover:bg-stone-200">Menú</span>
            </Link>
            <Link href="/reservas">
              <span className="block px-4 py-2 hover:bg-stone-200">Reservas</span>
            </Link>
            <Link href="/eventos">
              <span className="block px-4 py-2 hover:bg-stone-200">Eventos</span>
            </Link>
            <a href="tel:+582129931326" className="block px-4 py-2 hover:bg-stone-200">
              Contacto
            </a>
          </div>
        )}
      </nav>
    );
};

export default Navbar;