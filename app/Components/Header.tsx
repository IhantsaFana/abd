"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 bg-white shadow-md z-50 text-gray-600">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-gray-800">
          abd.org
        </Link>

        {/* Hamburger Icon for Mobile */}
        <button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-4">
          <Link href="/" className="text-gray-600 hover:text-gray-800 transition duration-300">
            Accueil
          </Link>
          <Link href="/about" className="text-gray-600 hover:text-gray-800 transition duration-300">
            À propos
          </Link>
          <Link href="/courses" className="text-gray-600 hover:text-gray-800 transition duration-300">
            Cours
          </Link>
          <Link href="/trainers" className="text-gray-600 hover:text-gray-800 transition duration-300">
            Formateurs
          </Link>
          <Link href="/events" className="text-gray-600 hover:text-gray-800 transition duration-300">
            Événements
          </Link>
          <Link href="/pricing" className="text-gray-600 hover:text-gray-800 transition duration-300">
            Tarifs
          </Link>
          <Link href="/contact" className="text-gray-600 hover:text-gray-800 transition duration-300">
            Contact
          </Link>
        </nav>

        {/* Get Started Button */}
        <Link
          href="/courses"
          className="hidden md:block bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition duration-300"
        >
          Commencer
        </Link>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="flex flex-col space-y-2 px-4 py-2">
            <Link href="/" className="text-gray-600 hover:text-gray-800 transition duration-300">
              Accueil
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-800 transition duration-300">
              À propos
            </Link>
            <Link href="/courses" className="text-gray-600 hover:text-gray-800 transition duration-300">
              Cours
            </Link>
            <Link href="/trainers" className="text-gray-600 hover:text-gray-800 transition duration-300">
              Formateurs
            </Link>
            <Link href="/events" className="text-gray-600 hover:text-gray-800 transition duration-300">
              Événements
            </Link>
            <Link href="/pricing" className="text-gray-600 hover:text-gray-800 transition duration-300">
              Tarifs
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-800 transition duration-300">
              Contact
            </Link>
            <Link
              href="/courses"
              className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition duration-300 text-center"
            >
              Commencer
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}