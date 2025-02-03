import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">abd.org</h2>
            <p className="mb-4">
              Antananarivo, Madagascar
              <br />
              Antananarivo 101
              <br />
              Madagascar
            </p>
            <p>
              <strong>Téléphone:</strong> +261 (0) 384702532
              <br />
              <strong>Email:</strong> bonjour@abd.org
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Liens utiles</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-gray-300">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/à-propos" className="hover:text-gray-300">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-gray-300">
                  Nos services
                </Link>
              </li>
              <li>
                <Link href="/conditions-dutilisation" className="hover:text-gray-300">
                  Conditions d&apos;utilisation
                </Link>
              </li>
              <li>
                <Link href="/politique-de-confidentialité" className="hover:text-gray-300">
                  Politique de confidentialité
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Nos services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/conception-de-site-web" className="hover:text-gray-300">
                  Conception de site web
                </Link>
              </li>
              <li>
                <Link href="/services/développement-web" className="hover:text-gray-300">
                  Développement web
                </Link>
              </li>
              <li>
                <Link href="/services/gestion-de-produit" className="hover:text-gray-300">
                  Gestion de produit
                </Link>
              </li>
              <li>
                <Link href="/services/marketing" className="hover:text-gray-300">
                  Marketing
                </Link>
              </li>
              <li>
                <Link href="/services/design-graphique" className="hover:text-gray-300">
                  Design graphique
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Notre newsletter</h3>
            <p className="mb-4">
              Inscrivez-vous à notre newsletter et recevez les dernières nouvelles sur nos produits et services!
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Entrez votre email"
                className="px-4 py-2 w-full rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                S&apos;inscrire
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; {new Date().getFullYear()} Mentor. Tous droits réservés.</p>
          <p className="mt-2">
            Conçu par{" "}
            <a href="https://oeka.vercel.app/" className="text-blue-400 hover:text-blue-300">
              OEKA
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

