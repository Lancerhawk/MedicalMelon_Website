'use client'
import { Icon } from '@iconify/react'
import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false)
    const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link className="flex-shrink-0 flex items-center" href="/">
                <Icon icon="tabler:stethoscope" width="32" height="32" rotate={2} color='#155dfc' />
              <span className="ml-2 text-xl font-bold text-gray-900">
                Medical Melon
              </span>
            </Link>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-4">
            <Link
              className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
              href={`${process.env.NEXT_PUBLIC_APP_URL}/search`}
            >
              Browse Jobs
            </Link> 
            <Link
              className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
              href={`${process.env.NEXT_PUBLIC_APP_URL}/login`}
            >
              Login
            </Link> 
            <Link
              className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-md text-sm font-medium transition-colors"
              href={`${process.env.NEXT_PUBLIC_APP_URL}/signup`}
            >
              Sign Up
            </Link>
            
          </div>
          <div className="flex items-center sm:hidden">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100"
            >
              <Icon icon="tabler:menu-2" width="24" height="24" />
            </button>
          </div>
        </div>

        <div
          className={`
            sm:hidden 
            overflow-hidden 
            transition-all duration-300 ease-in-out
            ${isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}
          `}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            
            <div className="flex flex-col space-y-2 pt-2">
              <Link
                onClick={toggleMobileMenu}
                href={`${process.env.NEXT_PUBLIC_APP_URL}/login`}
                className="block py-2 px-3 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 border border-gray-100"
              >
                Login
              </Link>
              <Link
                onClick={toggleMobileMenu}
                href={`${process.env.NEXT_PUBLIC_APP_URL}/signup`}
                className="block py-2 px-3 rounded-md text-base font-medium bg-blue-600 text-white hover:bg-blue-700"
              >
                Sign Up
              </Link>
            </div>
            
          </div>
        </div>
      </div>
    </header >
  )
}