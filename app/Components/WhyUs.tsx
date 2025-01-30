import Link from "next/link"
import Card from "../hooks/card"

export default function WhyUs() {
  return (
    <section className="bg-gray-800 py-16 text-gray-600">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-blue-500 text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Why Choose Our Products?</h3>
              <p className="mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Duis aute irure dolor in reprehenderit Asperiores dolores sed et. Tenetur quia eos.
                Autem tempore quibusdam vel necessitatibus optio ad corporis.
              </p>
              <Link
                href="#"
                className="inline-block bg-white text-blue-500 px-6 py-2 rounded-full hover:bg-gray-100 transition duration-300"
              >
                Learn More
              </Link>
            </div>
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                  <svg
                    className="w-12 h-12 text-blue-500 mx-auto mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                    ></path>
                  </svg>
                  <h4 className="text-xl font-bold mb-2">Corporis voluptates officia eiusmod</h4>
                  <p className="text-gray-600">
                    Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip
                  </p>
              </Card>
              <Card>
                  <svg
                    className="w-12 h-12 text-blue-500 mx-auto mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
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
                  </svg>
                  <h4 className="text-xl font-bold mb-2">Ullamco laboris ladore pan</h4>
                  <p className="text-gray-600">
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                  </p>
              </Card>
              <Card>
                  <svg
                    className="w-12 h-12 text-blue-500 mx-auto mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                    ></path>
                  </svg>
                  <h4 className="text-xl font-bold mb-2">Labore consequatur incidid dolore</h4>
                  <p className="text-gray-600">
                    Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere
                  </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

