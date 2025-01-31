import About from "./components/About";
import Counts from "./components/Counts";
import Courses from "./components/Courses";
import Features from "./components/Features";
import Hero from "./components/Hero";
import WhyUs from "./components/WhyUs";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <About />
      <Counts />
      <WhyUs />
      <Features />
      <Courses />
    </main>
  )
}

