'use client'
import { Icon } from '@iconify/react'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false)
  const [currentMsg, setCurrentMsg] = useState(0)

  const messages = [
    { text: "Post Jobs for Just $20 • Scale Your Team", icon: "tabler:rocket" },
    { text: "Find Your Dream Career • Top Medical Roles", icon: "tabler:briefcase" },
    { text: "Hire Elite Talent Faster • Join the Elite", icon: "tabler:users" }
  ]



  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMsg((prev) => (prev + 1) % messages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link className="flex-shrink-0 flex items-center" href="/">
              <Icon icon="tabler:stethoscope" width="32" height="32" rotate={2} color='#155dfc' />
              <span className="ml-2 text-xl font-bold text-gray-900 hidden sm:block">
                Medical Melon
              </span>
            </Link>
          </div>

          <div className="flex-1 flex justify-center px-1 sm:px-4 overflow-hidden">
            <Link
              href={`${process.env.NEXT_PUBLIC_APP_URL}/dashboard`}
              className="bg-[#e11d48] text-white px-3 py-1.5 sm:px-5 sm:py-2 rounded-md text-[10px] sm:text-xs md:text-sm font-semibold transition-colors hover:bg-[#be123c] flex items-center justify-center min-w-0 w-full max-w-[200px] sm:max-w-[400px] h-9 sm:h-10 shadow-sm"
            >
              <div className="relative w-full h-full overflow-hidden">
                {messages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`absolute inset-0 flex items-center justify-center gap-1.5 sm:gap-2 transition-all duration-700 ease-in-out transform ${idx === currentMsg
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-8 opacity-0'
                      }`}
                  >
                    <span className="relative flex h-2 w-2 shrink-0">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    <Icon icon={msg.icon} width="16" height="16" className="shrink-0 hidden sm:block" />
                    <span className="whitespace-nowrap flex items-center gap-1">
                      <span className="font-bold">{msg.text.split(' • ')[0]}</span>
                      <span className="hidden lg:inline opacity-90 font-normal"> • {msg.text.split(' • ')[1]}</span>
                    </span>
                  </div>
                ))}
              </div>
            </Link>
          </div>

          <div className="hidden sm:flex sm:items-center sm:space-x-4">
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
                href={`${process.env.NEXT_PUBLIC_APP_URL}/dashboard`}
                className="flex items-center justify-center gap-3 py-3 px-4 rounded-md text-base font-semibold bg-[#e11d48] text-white shadow-sm transition-colors active:bg-[#be123c]"
              >
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <Icon icon={messages[currentMsg].icon} width="20" height="20" />
                <span>{messages[currentMsg].text}</span>
              </Link>
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