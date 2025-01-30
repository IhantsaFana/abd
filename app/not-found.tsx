import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="bg-no-repeat bg-center bg-cover" style={{ backgroundImage: `url('/img/book.jpeg')` }}>
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-sm text-center">
                <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-black">404</h1>
                <p className="mb-4 text-3xl tracking-tight font-bold text-black">This page does not exist.</p>
                <p className="mb-4 text-lg font-light text-black">The link you clicked may be broken or the page may have been removed.</p>
                <p className="mb-8 text-lg font-light text-black">Check that the link you clicked is correct or try searching for the information you&apos;re looking for.</p>
                <Link href="/">
                    <button className="inline-flex text-black bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700">Back to Homepage</button>
                </Link>
            </div>   
        </div>
    </section>
  )
}

