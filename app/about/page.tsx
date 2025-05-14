import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle, Users, Heart, Briefcase, ArrowRight } from "lucide-react"

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-brand-dark text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">RIGHT 2 THRIVE UK</h1>
            <p className="text-lg md:text-xl mb-8">
              Empowering young people and their families through culturally responsive mental health support,
              mentorship, and career guidance.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-brand-dark">Our Mission</h2>
              <p className="text-lg mb-6">
                Right2Thrive UK is dedicated to providing culturally responsive mental health support, mentorship, and
                career guidance to empower young people and their families across the United Kingdom.
              </p>
              <p className="text-lg">
                We believe that everyone has the right to thrive regardless of their background, and we work to create
                inclusive spaces where cultural identity is celebrated as a strength in the journey toward wellbeing.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-brand-dark">Our Vision</h2>
              <p className="text-lg mb-6">
                We envision a society where cultural diversity is recognized as a valuable asset in mental health
                support, and where all young people have access to resources that honor their unique cultural
                identities.
              </p>
              <p className="text-lg">
                Through our work, we aim to build stronger, more resilient communities where individuals can embrace
                their heritage while navigating the challenges of modern life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-brand-dark text-center">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 rounded-full bg-brand-teal/10 flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-brand-teal" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-brand-dark">Cultural Sensitivity</h3>
              <p>
                We recognize and honor the diverse cultural backgrounds of the individuals and communities we serve,
                ensuring our approach is respectful and relevant.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 rounded-full bg-brand-gold/10 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-brand-gold" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-brand-dark">Inclusivity</h3>
              <p>
                We create welcoming spaces where everyone feels valued and respected, regardless of their background,
                identity, or circumstances.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 rounded-full bg-brand-teal/10 flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-brand-teal" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-brand-dark">Empowerment</h3>
              <p>
                We believe in equipping individuals with the tools, knowledge, and support they need to take control of
                their wellbeing and future.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 rounded-full bg-brand-gold/10 flex items-center justify-center mb-4">
                <Briefcase className="h-6 w-6 text-brand-gold" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-brand-dark">Excellence</h3>
              <p>
                We are committed to providing high-quality, evidence-based support and continuously improving our
                services to meet the evolving needs of our community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-brand-dark">Our Story</h2>
            <div className="prose prose-lg max-w-none">
              <p>
                Right2Thrive UK was founded in 2018 by a group of mental health professionals, community leaders, and
                advocates who recognized the need for culturally responsive mental health support for young people from
                diverse backgrounds.
              </p>
              <p>
                Having witnessed firsthand the challenges faced by young people navigating multiple cultural identities
                while dealing with mental health concerns, our founders were determined to create a space where cultural
                heritage was seen as a strength rather than a barrier in mental health support.
              </p>
              <p>
                What began as a small community initiative has grown into a comprehensive organization offering mental
                health assessments, cultural activities, mentorship programs, and career guidance to young people and
                families across the UK.
              </p>
              <p>
                Today, Right2Thrive UK continues to expand its reach and impact, working with schools, community
                organizations, and healthcare providers to ensure that culturally responsive mental health support is
                accessible to all who need it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-brand-dark text-center">Our Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm">
                <div className="aspect-[4/3] bg-gray-200"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1 text-brand-dark">
                    {index === 0
                      ? "Dr. Sarah Johnson"
                      : index === 1
                        ? "Michael Thompson"
                        : index === 2
                          ? "Priya Patel"
                          : index === 3
                            ? "David Okafor"
                            : index === 4
                              ? "Aisha Rahman"
                              : "James Wilson"}
                  </h3>
                  <p className="text-brand-teal font-medium mb-3">
                    {index === 0
                      ? "Founder & Clinical Director"
                      : index === 1
                        ? "Community Outreach Manager"
                        : index === 2
                          ? "Mental Health Practitioner"
                          : index === 3
                            ? "Youth Mentor Coordinator"
                            : index === 4
                              ? "Cultural Programs Lead"
                              : "Career Development Specialist"}
                  </p>
                  <p className="mb-4">
                    {index === 0
                      ? "Clinical psychologist with over 15 years of experience in culturally responsive mental health care."
                      : index === 1
                        ? "Dedicated to building partnerships with community organizations and schools."
                        : index === 2
                          ? "Specializes in supporting young people navigating cultural identity and mental health challenges."
                          : index === 3
                            ? "Develops and oversees mentorship programs that connect young people with role models."
                            : index === 4
                              ? "Creates and implements cultural activities that celebrate diversity and promote wellbeing."
                              : "Helps young people develop career paths that align with their values and cultural backgrounds."}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners & Supporters */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-brand-dark text-center">Our Partners & Supporters</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className="flex items-center justify-center p-4">
                <div className="w-32 h-16 bg-gray-200 rounded-md"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-brand-dark text-center">Our Impact</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-brand-teal mb-2">2,500+</div>
              <p className="text-lg">Young people supported</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-brand-teal mb-2">50+</div>
              <p className="text-lg">Volunteers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-brand-dark text-center">Contact Us</h2>
          <p className="text-lg text-center mb-8">Have questions or want to get involved? Reach out to us today!</p>
          <div className="flex justify-center">
            <Button asChild>
              <Link href="/contact" className="flex items-center gap-2">
                Contact Us
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
