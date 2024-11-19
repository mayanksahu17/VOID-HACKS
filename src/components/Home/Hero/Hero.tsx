import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <div className="bg-background py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-primary sm:text-5xl md:text-6xl">
            Streamline Your Internship Management
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-muted-foreground sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Intern Task 360 simplifies the internship process for students, mentors, and administrators. Manage tasks, track progress, and ensure success - all in one place.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <Button size="lg" className="w-full flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <Button variant="outline" size="lg" className="w-full">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}