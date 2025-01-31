import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="relative bg-no-repeat bg-center bg-cover h-screen">
      
      <div className="absolute inset-0">
        <video autoPlay loop muted className="w-full h-full object-cover">
          <source src="/video/404.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 flex items-center justify-center">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">404</h1>
          <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900">This page does not exist.</p>
          <p className="mb-4 text-lg text-gray-900">The link you clicked may be broken or the page may have been removed.</p>
          <p className="mb-8 text-lg text-gray-900">Check that the link you clicked is correct or try searching for the information you&apos;re looking for.</p>
          <Link href="/">
            <button className="inline-flex text-white bg-gradient-to-r from-blue-500 to-purple-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-full text-sm px-5 py-2.5 text-center">
              Back to Homepage
            </button>
          </Link>
        </div>   
      </div>
    </section>
  )
}

