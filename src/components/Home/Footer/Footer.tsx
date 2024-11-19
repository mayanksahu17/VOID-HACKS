import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <span className="text-2xl font-bold text-primary">Intern Task 360</span>
            <p className="mt-2 text-sm text-muted-foreground">
              Simplifying internship management for students, mentors, and administrators.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-primary tracking-wider uppercase">Company</h3>
            <ul className="mt-4 space-y-4">
              <li><Link href="/about" className="text-base text-muted-foreground hover:text-primary">About</Link></li>
              <li><Link href="/careers" className="text-base text-muted-foreground hover:text-primary">Careers</Link></li>
              <li><Link href="/privacy" className="text-base text-muted-foreground hover:text-primary">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-base text-muted-foreground hover:text-primary">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-primary tracking-wider uppercase">Connect</h3>
            <ul className="mt-4 space-y-4">
              <li><Link href="#" className="text-base text-muted-foreground hover:text-primary flex items-center"><Facebook className="h-5 w-5 mr-2" /> Facebook</Link></li>
              <li><Link href="#" className="text-base text-muted-foreground hover:text-primary flex items-center"><Twitter className="h-5 w-5 mr-2" /> Twitter</Link></li>
              <li><Link href="#" className="text-base text-muted-foreground hover:text-primary flex items-center"><Instagram className="h-5 w-5 mr-2" /> Instagram</Link></li>
              <li><Link href="#" className="text-base text-muted-foreground hover:text-primary flex items-center"><Linkedin className="h-5 w-5 mr-2" /> LinkedIn</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-base text-muted-foreground text-center">
            &copy; 2023 Intern Task 360. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}