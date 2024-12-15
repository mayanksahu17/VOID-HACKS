"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Users, Clock, BarChart } from "lucide-react"

export function WhyUse() {
  const features = [
    {
      icon: <CheckCircle className="h-6 w-6 text-primary" />,
      title: "Streamlined Task Management",
      description: "Easily assign, track, and complete internship tasks for improved productivity."
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "Seamless Collaboration",
      description: "Connect students, mentors, and admins on a single platform for better communication."
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "Real-time Progress Tracking",
      description: "Monitor internship progress with live updates and comprehensive reporting."
    },
    {
      icon: <BarChart className="h-6 w-6 text-primary" />,
      title: "Data-driven Insights",
      description: "Gain valuable insights into internship performance and outcomes."
    }
  ]

  return (
    <div className="bg-muted py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-primary sm:text-4xl">
            Why Use Intern Task 360?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-muted-foreground">
            Our platform offers a comprehensive solution for managing internships effectively.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  {feature.icon}
                  <span className="ml-2">{feature.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}