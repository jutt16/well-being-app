import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, BarChart3, CheckCircle, Heart, Users, BookOpen, Briefcase } from "lucide-react"

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-brand-dark text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero-background.png')", opacity: 0.4 }}
        ></div>
        <div className="relative container mx-auto px-4 py-24 md:py-32 lg:py-40">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Supporting Your Wellbeing Journey</h1>
            <p className="text-lg md:text-xl mb-8">
              Right2Thrive UK provides culturally responsive mental health support, mentorship, and career guidance to
              empower young people and their families.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/questionnaires">
                <Button className="bg-brand-teal hover:bg-brand-teal/90 text-white">Get Started</Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-brand-dark">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer a range of services designed to support mental health and wellbeing through culturally responsive
              approaches.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <Heart className="h-8 w-8 text-brand-teal mb-2" />
                <CardTitle>Mental Health Support</CardTitle>
                <CardDescription>Culturally responsive mental health assessments and resources</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Access professional mental health tools including GAD-7 and PHQ-9 assessments, along with culturally
                  tailored resources to support your wellbeing journey.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/questionnaires">
                  <Button variant="ghost" className="gap-1 text-brand-dark hover:text-brand-teal">
                    Explore Assessments <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-8 w-8 text-brand-teal mb-2" />
                <CardTitle>Mentorship Programs</CardTitle>
                <CardDescription>Guidance and support for personal development</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Connect with experienced mentors who understand your cultural background and can provide personalized
                  guidance to help you navigate life's challenges.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/mentorship">
                  <Button variant="ghost" className="gap-1 text-brand-dark hover:text-brand-teal">
                    Find a Mentor <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <Briefcase className="h-8 w-8 text-brand-teal mb-2" />
                <CardTitle>Career Guidance</CardTitle>
                <CardDescription>Professional development and career planning</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Receive tailored career advice, skills development opportunities, and support in planning your
                  professional journey with cultural considerations in mind.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/career-guidance">
                  <Button variant="ghost" className="gap-1 text-brand-dark hover:text-brand-teal">
                    Career Resources <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Cultural Activities Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-brand-dark">Cultural Activities</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our range of cultural activities designed to celebrate diversity, foster community connections,
              and promote wellbeing.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Community Workshops</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-gray-200 rounded-md mb-4"></div>
                <p>
                  Interactive workshops that explore cultural identity, mental health awareness, and community building
                  through creative expression.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/cultural-activities#workshops">
                  <Button variant="outline" className="gap-1 border-brand-dark text-brand-dark hover:bg-brand-dark/10">
                    View Workshops <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Cultural Celebrations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-gray-200 rounded-md mb-4"></div>
                <p>
                  Events celebrating diverse cultural traditions, festivals, and heritage to foster understanding and
                  community connections.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/cultural-activities#celebrations">
                  <Button variant="outline" className="gap-1 border-brand-dark text-brand-dark hover:bg-brand-dark/10">
                    Upcoming Events <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Youth Programs</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-gray-200 rounded-md mb-4"></div>
                <p>
                  Specialized programs for young people that combine cultural education, mental health support, and
                  skills development.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/cultural-activities#youth">
                  <Button variant="outline" className="gap-1 border-brand-dark text-brand-dark hover:bg-brand-dark/10">
                    Youth Activities <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link href="/cultural-activities">
              <Button className="bg-brand-dark hover:bg-brand-dark/90">View All Cultural Activities</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Wellbeing Hub Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-brand-dark">Wellbeing Hub</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our digital wellbeing hub provides access to mental health assessments, resources, and personalized
              support.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CheckCircle className="h-8 w-8 text-brand-teal mb-2" />
                <CardTitle>Mental Health Assessments</CardTitle>
                <CardDescription>Access clinically validated questionnaires</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Complete standardized assessments like GAD-7 and PHQ-9 to better understand your mental wellbeing and
                  track your progress over time.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/questionnaires">
                  <Button className="w-full bg-brand-dark hover:bg-brand-dark/90">Take an Assessment</Button>
                </Link>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <BarChart3 className="h-8 w-8 text-brand-teal mb-2" />
                <CardTitle>Progress Tracking</CardTitle>
                <CardDescription>Monitor your wellbeing journey</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Visualize your mental health progress over time with personalized dashboards and insights tailored to
                  your needs.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/dashboard">
                  <Button className="w-full bg-brand-dark hover:bg-brand-dark/90">View Dashboard</Button>
                </Link>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <BookOpen className="h-8 w-8 text-brand-teal mb-2" />
                <CardTitle>Resources & Support</CardTitle>
                <CardDescription>Access culturally responsive resources</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Discover articles, videos, and support services that are culturally sensitive and designed to support
                  your specific needs.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/resources">
                  <Button className="w-full bg-brand-dark hover:bg-brand-dark/90">Explore Resources</Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-brand-dark">Latest from Our Blog</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Insights, stories, and resources to support your mental health and cultural wellbeing journey.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <Card key={item} className="overflow-hidden">
                <div className="aspect-video bg-gray-200"></div>
                <CardHeader>
                  <div className="text-sm text-gray-500 mb-2">June 15, 2023</div>
                  <CardTitle className="text-xl">Understanding Cultural Identity and Mental Health</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="line-clamp-3">
                    Exploring the important relationship between cultural identity and mental wellbeing, and how
                    embracing your heritage can support positive mental health outcomes.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="/blog/cultural-identity-mental-health">
                    <Button variant="ghost" className="gap-1 text-brand-dark hover:text-brand-teal">
                      Read More <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/blog">
              <Button className="bg-brand-dark hover:bg-brand-dark/90">View All Blog Posts</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-brand-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Wellbeing Journey?</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Join Right2Thrive UK today and access culturally responsive mental health support, mentorship, and resources
            designed for you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/register">
              <Button className="bg-brand-teal hover:bg-brand-teal/90 text-white">Sign Up Now</Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
