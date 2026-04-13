import { Icon } from "@iconify/react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center">
              <Icon icon="tabler:stethoscope" width="32" height="32" rotate={2} />
              <span className="ml-2 text-xl font-bold">Medical Melon</span>
            </div>
            <p className="mt-2 text-sm text-gray-400">
              Connecting talented professionals with their dream careers.
            </p>
            <div className="mt-4 flex space-x-4">
              <Link href="/github" className="text-gray-400 hover:text-white">
                <Icon icon="tabler:brand-github" width="20" height="20" />
              </Link>
              <Link href="/twitter" className="text-gray-400 hover:text-white">
                <Icon icon="tabler:brand-twitter" width="20" height="20" />
              </Link>
              <Link href="/linkedin" className="text-gray-400 hover:text-white">
                <Icon icon="tabler:brand-linkedin" width="20" height="20" />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Look for a job
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link className="text-gray-400 hover:text-white text-sm" href={`${process.env.NEXT_PUBLIC_APP_URL}/search`}>
                  Browse Jobs
                </Link>
              </li>
              <li>
                <Link className="text-gray-400 hover:text-white text-sm" href={`${process.env.NEXT_PUBLIC_APP_URL}/signup`}>
                  Create Account
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-gray-400 hover:text-white text-sm">
                  Career Resources
                </Link>
              </li>
              <li>
                <Link href="/resume-tips" className="text-gray-400 hover:text-white text-sm">
                  Resume Tips
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Post a job
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link className="text-gray-400 hover:text-white text-sm" href={`${process.env.NEXT_PUBLIC_APP_URL}/search`}>
                  Post a Job
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-400 hover:text-white text-sm">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/employer-resources" className="text-gray-400 hover:text-white text-sm">
                  Post a job Resources
                </Link>
              </li>
              <li>
                <Link href="/success-stories" className="text-gray-400 hover:text-white text-sm">
                  Success Stories
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Company
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white text-sm">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between">
          <p className="text-sm text-gray-400">© 2026 Medical Melon. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem', flexWrap: 'wrap' }}>
            <Link href="/privacy" className="text-gray-400 hover:text-white text-sm">
              Privacy Policy
            </Link><Link href="/terms" className="text-gray-400 hover:text-white text-sm">
              Terms Of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer