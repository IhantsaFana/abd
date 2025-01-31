"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Card from "../hooks/card";

export default function WhyUs() {
  return (
    <section className="relative py-16 text-white overflow-hidden">
      {/* Centered animated background */}
      <div className="absolute inset-0 flex items-center justify-center">
        {Array.from({ length: 4 }).map((_, index) => (
          <motion.div
            key={index}
            className="w-32 h-32 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 opacity-30 cube"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse",
              delay: index * 2,
            }}
            whileHover={{ rotate: Math.random() * 90 - 45, scale: 1.1 }}
          />
        ))}
      </div>

      {/* Blur effect between cubes and content */}
      <div className="absolute inset-0 bg-white opacity-50"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8 rounded-lg shadow-xl transform transition-all hover:scale-105">
            <h3 className="text-3xl font-bold mb-4">Pourquoi Choisir Abidi.org pour l&apos;apprentissage ?</h3>
            <p className="mb-6">
              Chez Abidi.org, nous offrons une expérience d&apos;apprentissage unique pour les étudiants des zones rurales, en rendant l&apos;éducation accessible par
              le biais de plateformes innovantes.
            </p>
            <Link
              href="#"
              className="inline-block bg-white text-blue-500 px-6 py-2 rounded-full hover:bg-gray-100 transition duration-300"
            >
              En Savoir Plus
            </Link>
          </div>

          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-800">
              <Card>
                <motion.svg
                  className="w-12 h-12 text-blue-500 mx-auto mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  ></path>
                </motion.svg>
                <h4 className="text-xl font-bold mb-2">Conception pour les étudiants ruraux</h4>
                <p className="text-gray-600">
                  Nous fournissons des ressources spécialisées qui répondent aux besoins des étudiants des communautés rurales, pour s&apos;assurer que personne n&apos;est laissé pour compte.
                </p>
              </Card>

              <Card>
                <motion.svg
                  className="w-12 h-12 text-blue-500 mx-auto mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.7 }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                  ></path>
                </motion.svg>
                <h4 className="text-xl font-bold mb-2">Sessions interactives en direct</h4>
                <p className="text-gray-600">
                  Notre plateforme offre des sessions en direct avec des tuteurs expérimentés pour aider à clarifier les doutes et améliorer l&apos;efficacité de l&apos;apprentissage.
                </p>
              </Card>

              <Card>
                <motion.svg
                  className="w-12 h-12 text-blue-500 mx-auto mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.9 }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                  ></path>
                </motion.svg>
                <h4 className="text-xl font-bold mb-2">Abordable et Accessible</h4>
                <p className="text-gray-600">
                  Notre plateforme est conçue pour être rentable, pour s&apos;assurer que les étudiants des zones rurales ont accès à une éducation de qualité.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

