import { Navbar } from "@/components/Home/Navbar/Navbar"
import { Hero } from "@/components/Home/Hero/Hero"
import { WhyUse } from "@/components/Home/WhyUse/WhyUse"
import { Footer } from "@/components/Home/Footer/Footer"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <WhyUse />
      </main>
      <Footer />
    </div>
  )
}