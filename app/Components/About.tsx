import Image from "next/image"
import Link from "next/link"

export default function About() {
  return (
    <section className="py-16 bg-gray-100 text-gray-600">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image
              src="/img/about.jpg?height=400&width=600"
              alt="About us"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <h3 className="text-3xl font-bold mb-4 text-gray-700">Voluptatem dignissimos provident quasi corporis</h3>
            <p className="text-gray-600 mb-4 italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center">
                <svg
                  className="w-6 h-6 text-green-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-6 h-6 text-green-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Duis aute irure dolor in reprehenderit in voluptate velit.</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-6 h-6 text-green-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
              </li>
            </ul>
            <Link href="#" className="text-blue-500 hover:text-blue-600 flex items-center">
              Read More
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

