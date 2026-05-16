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
              className={`flex flex-col md:items-center gap-12 ${feature.reverse ? "md:flex-row-reverse" : "md:flex-row"
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
                <div className={`absolute -z-10 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-60 ${feature.reverse ? "-left-12 -top-12" : "-right-12 -bottom-12"
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

function VideoMarketingSection() {
  return (
    <section className="py-24 bg-slate-50 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Side: Marketing Content */}
          <div className="flex-1 space-y-8">
            <div className="space-y-4">
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider rounded-full">
                The Medical Melon Advantage
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-[1.1]">
                Revolutionizing Healthcare Recruitment <span className="text-blue-600">Across the USA.</span>
              </h2>
            </div>



            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Medical Melon isn't just a job board; it's a high-performance ecosystem designed for the modern medical professional. From rural clinics to metropolitan hospitals, we bridge the gap with unmatched efficiency.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-blue-600">
                  <Icon icon="tabler:circle-check-filled" width="20" height="20" />
                  <span className="font-bold text-gray-900 uppercase text-xs tracking-tight">For Applicants</span>
                </div>
                <p className="text-sm text-gray-600">Access verified roles in all 50 states with 1-click application technology.</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-blue-600">
                  <Icon icon="tabler:currency-dollar" width="20" height="20" />
                  <span className="font-bold text-gray-900 uppercase text-xs tracking-tight">For Employers</span>
                </div>
                <p className="text-sm text-gray-600 font-semibold text-blue-700">Post unlimited jobs for a flat fee of just $20. No hidden costs.</p>
              </div>
            </div>

            <div className="pt-8 space-y-3">
              <div className="flex flex-wrap gap-x-4 gap-y-2 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
                <span>NY</span><span>CA</span><span>TX</span><span>FL</span><span>IL</span><span>PA</span><span>OH</span><span>GA</span><span>NC</span><span>MI</span>
                <span className="text-blue-600 opacity-100">&bull; ALL 50 STATES COVERED</span>
              </div>
              <div className="h-px w-full bg-gradient-to-r from-gray-200 to-transparent" />
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <Link
                href={`${process.env.NEXT_PUBLIC_APP_URL}/search`}
                className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white font-bold rounded-xl hover:bg-black transition-all shadow-lg hover:shadow-xl"
              >
                Find US Jobs
              </Link>
              <Link
                href={`${process.env.NEXT_PUBLIC_APP_URL}/dashboard`}
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 font-bold rounded-xl border-2 border-gray-200 hover:border-blue-600 hover:text-blue-600 transition-all"
              >
                Post a Job - $20
              </Link>
            </div>
          </div>

          {/* Right Side: Video Content */}
          <div className="flex-1 w-full lg:max-w-[600px]">
            <div className="relative group">
              {/* Decorative Frame */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-[2rem] opacity-20 blur-2xl group-hover:opacity-30 transition-opacity" />

              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900">
                <iframe
                  className="w-full h-full"
                  src={undefined}
                  title="Medical Melon Professional Overview"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                {/* Overlay to dull the video graphics and add premium feel */}
                <div className="absolute inset-0 bg-blue-900/40 pointer-events-none flex items-center justify-center text-white/50 text-sm font-medium italic">
                  <span>Video Placeholder: No video added yet.</span>
                </div>
              </div>

              {/* Stats Overlay Badge */}
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl hidden md:block border border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                    <Icon icon="tabler:map-pin" width="24" height="24" />
                  </div>
                  <div>
                    <div className="text-xl font-black text-gray-900 leading-tight">All States of US Covered</div>
                    <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Nationwide Network</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MarqueeSection() {
  const items = [
    "Are you looking for Phlebotomist?",
    "Are you looking for Medical Doctor posts?",
    "Hiring Registered Nurses (RN) in all 50 states!",
    "Dental Assistant opportunities available now!",
    "New Healthcare Administration roles posted hourly!",
    "Apply for Nurse Practitioner (NP) positions today!",
    "Seeking Physical Therapists for top US clinics!",
    "Looking for Surgical Technician roles? Apply now!"
  ]

  return (
    <div className="w-full bg-gray-900 py-4 overflow-hidden border-y border-gray-800 shadow-2xl relative">
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-900 to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-900 to-transparent z-10" />

      <div className="flex whitespace-nowrap animate-marquee">
        <div className="flex gap-16 items-center px-8">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
              <span className="text-gray-100 text-sm md:text-base font-bold tracking-wide uppercase italic">
                {item}
              </span>
            </div>
          ))}
        </div>
        {/* Seamless Loop Duplicate */}
        <div className="flex gap-16 items-center px-8" aria-hidden="true">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
              <span className="text-gray-100 text-sm md:text-base font-bold tracking-wide uppercase italic">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
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
        <VideoMarketingSection />
        <MarqueeSection />
        <CTASection />
      </main>
    </div>
  );
}
