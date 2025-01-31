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
              <strong>Phone:</strong> +261 (0) 384702532
              <br />
              <strong>Email:</strong> hello@abd.org
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Useful Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-gray-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gray-300">
                  About us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-gray-300">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-gray-300">
                  Terms of service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-gray-300">
                  Privacy policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/web-design" className="hover:text-gray-300">
                  Web Design
                </Link>
              </li>
              <li>
                <Link href="/services/web-development" className="hover:text-gray-300">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services/product-management" className="hover:text-gray-300">
                  Product Management
                </Link>
              </li>
              <li>
                <Link href="/services/marketing" className="hover:text-gray-300">
                  Marketing
                </Link>
              </li>
              <li>
                <Link href="/services/graphic-design" className="hover:text-gray-300">
                  Graphic Design
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Our Newsletter</h3>
            <p className="mb-4">
              Subscribe to our newsletter and receive the latest news about our products and services!
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 w-full rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; {new Date().getFullYear()} Mentor. All rights reserved.</p>
          <p className="mt-2">
            Designed by{" "}
            <a href="https://oeka.vercel.app/" className="text-blue-400 hover:text-blue-300">
              OEKA
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

