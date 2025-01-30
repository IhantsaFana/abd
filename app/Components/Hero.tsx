import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center">
      <Image
        src="/img/hero-bg.jpg?height=1080&width=1920"
        alt="Hero background"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto px-4 z-10 text-white">
        <h2 className="text-4xl md:text-6xl font-bold mb-4">
          Learning Today,
          <br />
          Leading Tomorrow
        </h2>
        <p className="text-xl mb-8">We are one organisation who help all teenager people on their study.</p>
        <Link
          href="/courses"
          className="bg-blue-500 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-600 transition duration-300"
        >
          Get Started
        </Link>
      </div>
    </section>
  )
}

