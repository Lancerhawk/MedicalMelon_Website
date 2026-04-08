import Link from "next/link";
import { Icon } from "@iconify/react";

const PAGE_DATA = {
  hero: {
    title: "Find Your Perfect Career Match",
    description: "Connect with top employers and discover opportunities that align with your skills and ambitions.",
    image: {
      url: "/hero_image.webp",
      description: "Professional working on a laptop"
    }
  },
  categories: {
    title: "Explore Job Categories",
    description: "Discover opportunities across various industries",
    items: [
      {
        name: "Technology",
        description: "Explore technology jobs that match your experience",
        icon: "tabler:device-laptop"
      },
      {
        name: "Healthcare",
        description: "Explore healthcare jobs that match your experience",
        icon: "tabler:heart-rate-monitor"
      },
      {
        name: "Finance",
        description: "Explore finance jobs that match your experience",
        icon: "tabler:building-bank"
      },
      {
        name: "Marketing",
        description: "Explore marketing jobs that match your experience",
        icon: "tabler:chart-arrows"
      }
    ]
  },
  steps: {
    title: "How Medical Melon Works",
    description: "Simple steps to find your dream job",
    items: [
      {
        name: "Create Profile",
        description: "Sign up and create your professional profile with your skills and experience."
      },
      {
        name: "Search Jobs",
        description: "Browse through job listings that match your skills and preferences."
      },
      {
        name: "Apply & Track",
        description: "Apply to positions and track your application status in real-time."
      }
    ]
  }
};

function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div style={{ opacity: 1, transform: "none" }}>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">{PAGE_DATA.hero.title}</h1>
            <p className="mt-4 text-lg md:text-xl text-blue-100">
              {PAGE_DATA.hero.description}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 md:text-lg"
                href={`${process.env.NEXT_PUBLIC_APP_URL}/login`}
              >
                Sign Up
              </Link>
              <Link
                className="inline-flex items-center justify-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-blue-700 md:text-lg"
                href={`${process.env.NEXT_PUBLIC_APP_URL}/login`}
              >
                Login
              </Link>
            </div>
          </div>
          <div className="hidden md:block" style={{ opacity: 1, transform: "none" }}>
            <img
              src={PAGE_DATA.hero.image.url}
              alt={PAGE_DATA.hero.image.description}
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function CategorySection() {
  return (
    <section className="py-16 bg-white w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">{PAGE_DATA.categories.title}</h2>
          <p className="mt-4 text-xl text-gray-600">{PAGE_DATA.categories.description}</p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PAGE_DATA.categories.items.map((category) => (
            <div key={category.name} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="p-6">
                <div className="inline-flex items-center justify-center p-3 rounded-full bg-blue-100 text-blue-600">
                  <Icon icon={category.icon} width="24" height="24" />
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">{category.name}</h3>
                <p className="mt-2 text-sm text-gray-500">{category.description}</p>
                <div className="mt-4">
                  <Link
                    className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                    href={`${process.env.NEXT_PUBLIC_APP_URL}/search`}
                  >
                    Browse Jobs →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function StepsSection() {
  return (
    <section className="py-16 bg-gray-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">{PAGE_DATA.steps.title}</h2>
          <p className="mt-4 text-xl text-gray-600">{PAGE_DATA.steps.description}</p>
        </div>
        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {PAGE_DATA.steps.items.map((step, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 relative hover:-translate-y-1 transition-transform duration-200">
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xl">{index + 1}</div>
                <h3 className="mt-4 text-xl font-medium text-gray-900">{step.name}</h3>
                <p className="mt-2 text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function CTASection() {
  return (
    <section className="bg-blue-600 text-white w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold">Ready to Find Your Dream Job?</h2>
            <p className="mt-4 text-xl text-blue-100">
              Join thousands who look for a job and have found their perfect career match with Medical Melon.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-end">
            <Link
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50"
              href={`${process.env.NEXT_PUBLIC_APP_URL}/login`}
            >
              Sign Up Now
            </Link>
            <Link
              className="inline-flex items-center justify-center px-5 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-blue-700"
              href={`${process.env.NEXT_PUBLIC_APP_URL}/search`}
            >
              Browse Jobs
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <main className="w-full">
        <HeroSection />
        <CategorySection />
        <StepsSection />
        <CTASection />
      </main>
    </div>
  );
}
