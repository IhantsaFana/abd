import Image from "next/image"
import Link from "next/link"

export default function About() {
  return (
    <section className="py-16 bg-gray-100 text-gray-600">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image
              src="/img/about.jpg"
              alt="abd.org - Education for rural areas"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <h3 className="text-3xl font-bold mb-4 text-gray-700">Offrir une éducation de qualité aux zones rurales</h3>
            <p className="text-gray-600 mb-4 italic">
              Grâce à la connexion Starlink et à des infrastructures adaptées, abd.org permet d&apos;accéder à des cours vidéo pour les élèves en zones rurales de Madagascar, afin de préparer les examens nationaux et d&apos;apprendre de nouvelles langues.
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
                <span>Cours de soutien pour les examens CEPE, BEPC, BAC.</span>
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
                <span>Apprentissage des langues pour un meilleur avenir.</span>
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
                <span>Sessions interactives en direct pour répondre aux questions des élèves.</span>
              </li>
            </ul>
            <Link href="#" className="text-blue-500 hover:text-blue-600 flex items-center">
              En savoir plus
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
