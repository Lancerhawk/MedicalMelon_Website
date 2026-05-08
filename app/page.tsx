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
  features: [
    {
      title: "Find Your Dream Medical Job Across the US",
      description: "Browse thousands of healthcare opportunities from top hospitals and clinics nationwide. Filter by specialty, location, and job type to find the perfect fit for your career journey.",
      image: "/image.webp",
      reverse: false,
      buttonText: "Explore Jobs",
      link: "/search"
    },
    {
      title: "Post a Job and Hire Top Healthcare Talent",
      description: "Streamline your recruitment process with Medical Melon. Reach thousands of qualified healthcare professionals, manage applications, and hire the best talent for your team.",
      image: "/hero_image.webp",
      reverse: true,
      buttonText: "Post a Job",
      link: "/signup"
    }
  ],
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
                href={`${process.env.NEXT_PUBLIC_APP_URL}/signup`}
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

function FeatureSection() {
  return (
    <section className="py-20 bg-white w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-24">
          {PAGE_DATA.features.map((feature, index) => (
            <div 
              key={index} 
              className={`flex flex-col md:items-center gap-12 ${
                feature.reverse ? "md:flex-row-reverse" : "md:flex-row"
              }`}
            >
              <div className="flex-1 w-full relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {/* Decorative element */}
                <div className={`absolute -z-10 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-60 ${
                  feature.reverse ? "-left-12 -top-12" : "-right-12 -bottom-12"
                }`} />
              </div>
              
              <div className="flex-1 space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                  {feature.title}
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
                <div className="pt-4">
                  <Link
                    href={`${process.env.NEXT_PUBLIC_APP_URL}${feature.link}`}
                    className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-semibold rounded-lg text-white bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    {feature.buttonText}
                    <Icon icon="tabler:arrow-right" className="ml-2 w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
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
              href={`${process.env.NEXT_PUBLIC_APP_URL}/signup`}
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
        <FeatureSection />
        <StepsSection />
        <CTASection />
      </main>
    </div>
  );
}
