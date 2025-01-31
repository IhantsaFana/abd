import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 md:pt-24">
      {/* Image de fond optimisée */}
      <Image
        src="/img/hero-bg.jpg"
        alt="Élèves studieux dans une salle de classe rurale"
        layout="fill"
        objectFit="cover"
        quality={90}
        priority
        className="select-none"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      
      {/* Overlay avec dégradé */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/40"></div>

      <div className="container mx-auto px-4 z-10 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in-up">
            Apprendre Aujourd&apos;hui,
            <br />
            <span className="bg-gradient-to-r from-violet-600 to-blue-400 bg-clip-text text-transparent">Diriger Demain</span>
          </h1>
          
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90 animate-fade-in-up delay-100">
            Une plateforme éducative innovante pour les jeunes des zones rurales de Madagascar
          </p>

          <div className="animate-fade-in-up delay-200">
            <Link
              href="/courses"
              className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 rounded-full text-lg md:text-xl transition-all duration-300 hover:scale-105"
            >
              Commencer Maintenant
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 ml-3 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}