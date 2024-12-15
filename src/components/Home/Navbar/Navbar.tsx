"use client"
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation'
import { useAuth, SignedOut } from '@clerk/nextjs'

export function Navbar() {
  const { isLoaded, userId } = useAuth()
  const router = useRouter()

  const handleLogin = () => {
    router.push("/sign-in") // Redirect to login page
  }

  const handleLogout = async () => {
    sessionStorage.clear();
    document.cookie.split(";").forEach((cookie) => {
      document.cookie = cookie
        .replace(/^ +/, "") // Remove leading spaces
        .replace(/=.*/, "=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/");
    });
    location.reload()
    
  }

  if (!isLoaded) {
    return null // Optionally, add a loader here
  }

  return (
    <nav className="bg-background border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-primary">Intern Task 360</span>
            </Link>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                href="/features"
                className="border-transparent text-gray-500 hover:border-primary hover:text-primary inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Features
              </Link>
              <Link
                href="/pricing"
                className="border-transparent text-gray-500 hover:border-primary hover:text-primary inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Pricing
              </Link>
              <Link
                href="/contact"
                className="border-transparent text-gray-500 hover:border-primary hover:text-primary inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <Button variant="ghost" size="icon" className="mr-2">
              <span className="sr-only">Toggle theme</span>
            </Button>
            {userId ? (
              <Button onClick={handleLogout} variant="outline" className="mr-2">
                Log out
              </Button>
            ) : (
              <>
                <Button onClick={handleLogin} variant="outline" className="mr-2">
                  Log in
                </Button>
                <Button onClick={() => router.push("/sign-up")}>Sign up</Button>
              </>
            )}
          </div>
        </div>
      </div>
      <SignedOut>
        <p className="text-center mt-4 text-gray-500">
          You are currently signed out. Log in to access more features.
        </p>
      </SignedOut>
    </nav>
  )
}
