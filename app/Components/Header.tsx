"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageMenuOpen, setLanguageMenuOpen] = useState(false);
  const [isCoursesDropdownOpen, setCoursesDropdownOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("fr");
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? "auto" : "hidden";
  };

  const languages = [
    { code: "fr", label: "Français" },
    { code: "en", label: "English" },
    { code: "mg", label: "Malagasy" },
  ];

  // Fermer les menus au scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsMenuOpen(false);
      setLanguageMenuOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 bg-white shadow-md z-50 text-gray-600">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo avec image */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo-abd.png" // Remplacez par le chemin réel de votre logo
            alt="abd.org logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="text-xl font-bold text-gray-800 hidden md:block">
            abd.org
          </span>
        </Link>

        {/* Menu principal desktop */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="/"
            className={`hover:text-gray-800 transition ${
              pathname === "/" ? "font-bold border-b-2 border-blue-500" : ""
            }`}
          >
            Accueil
          </Link>

          {/* Dropdown Cours */}
          <div
            className="relative"
            onMouseEnter={() => setCoursesDropdownOpen(true)}
            onMouseLeave={() => setCoursesDropdownOpen(false)}
          >
            <button className="hover:text-gray-800 flex items-center">
              Cours
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            
            {isCoursesDropdownOpen && (
              <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg py-2 w-48">
                <Link
                  href="/courses/bac"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Préparation BAC
                </Link>
                <Link
                  href="/courses/langues"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Cours de langues
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/events"
            className={`hover:text-gray-800 ${
              pathname === "/events" ? "font-bold border-b-2 border-blue-500" : ""
            }`}
          >
            Événements
          </Link>
        </nav>

        {/* Côté droit desktop */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Sélecteur de langue */}
          <div className="relative">
            <button
              onClick={() => setLanguageMenuOpen(!isLanguageMenuOpen)}
              className="flex items-center space-x-1 hover:text-gray-800"
            >
              <span className="text-sm uppercase">{currentLang}</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {isLanguageMenuOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-white shadow-lg rounded-lg py-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setCurrentLang(lang.code);
                      setLanguageMenuOpen(false);
                    }}
                    className={`block w-full px-4 py-2 text-left text-sm ${
                      currentLang === lang.code
                        ? "bg-blue-50 text-blue-600"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/courses"
            className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition"
          >
            Commencer
          </Link>
        </div>

        {/* Menu mobile */}
        <button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>
      </div>

      {/* Menu mobile avec backdrop */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/30"
            onClick={toggleMenu}
          />

          {/* Contenu du menu */}
          <div className="relative bg-white w-3/4 max-w-xs h-full transform transition-transform duration-300 ease-out">
            <nav className="flex flex-col p-4 space-y-4">
              <Link href="/" className="text-lg font-medium">
                Accueil
              </Link>

              <div className="border-t pt-4">
                <button
                  onClick={() => setCoursesDropdownOpen(!isCoursesDropdownOpen)}
                  className="flex justify-between items-center w-full"
                >
                  <span>Cours</span>
                  <svg
                    className={`w-4 h-4 transform transition-transform ${
                      isCoursesDropdownOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {isCoursesDropdownOpen && (
                  <div className="pl-4 mt-2 space-y-2">
                    <Link href="/courses/bac" className="block">
                      Préparation BAC
                    </Link>
                    <Link href="/courses/langues" className="block">
                      Cours de langues
                    </Link>
                  </div>
                )}
              </div>

              <Link href="/events">Événements</Link>

              <div className="border-t pt-4">
                <p className="text-sm text-gray-500">Langue</p>
                <div className="mt-2 space-y-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setCurrentLang(lang.code);
                        toggleMenu();
                      }}
                      className={`block w-full text-left ${
                        currentLang === lang.code ? "text-blue-600" : ""
                      }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              </div>

              <Link
                href="/courses"
                className="bg-blue-500 text-white px-6 py-2 rounded-full text-center mt-4"
              >
                Commencer
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}