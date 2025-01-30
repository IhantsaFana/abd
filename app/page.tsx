import About from "./Components/About";
import Counts from "./Components/Counts";
import Courses from "./Components/Courses";
import Features from "./Components/Features";
import Hero from "./Components/Hero";
import Trainers from "./Components/Trainers";
import WhyUs from "./Components/WhyUs";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <About />
      <Counts />
      <WhyUs />
      <Features />
      <Courses />
      <Trainers />
    </main>
  )
}

