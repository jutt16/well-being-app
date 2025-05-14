import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, Calendar, User } from "lucide-react"

export default function BlogPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-brand-dark text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Blog</h1>
            <p className="text-lg md:text-xl mb-8">
              Insights, stories, and resources to support your mental health and cultural wellbeing journey.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-brand-dark">Featured Post</h2>
          <Card className="overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="bg-gray-200 aspect-video md:aspect-auto"></div>
              <div className="p-6 md:p-8">
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>June 15, 2023</span>
                  <span className="mx-2">•</span>
                  <User className="h-4 w-4 mr-1" />
                  <span>Dr. Sarah Johnson</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Understanding Cultural Identity and Mental Health</h3>
                <p className="mb-6">
                  Exploring the important relationship between cultural identity and mental wellbeing, and how embracing
                  your heritage can support positive mental health outcomes. This comprehensive guide examines the
                  research behind cultural identity as a protective factor for mental health and provides practical
                  strategies for connecting with your cultural roots.
                </p>
                <Link href="/blog/cultural-identity-mental-health">
                  <Button className="bg-brand-dark hover:bg-brand-dark/90">
                    Read Full Article <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
            <h2 className="text-2xl font-bold text-brand-dark">Latest Articles</h2>
            <div className="flex gap-2">
              <select className="px-4 py-2 border rounded-md">
                <option>All Categories</option>
                <option>Mental Health</option>
                <option>Cultural Identity</option>
                <option>Career Development</option>
                <option>Community</option>
              </select>
              <Button className="bg-brand-dark hover:bg-brand-dark/90">Filter</Button>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 9 }).map((_, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="aspect-video bg-gray-200"></div>
                <CardHeader>
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>June 10, 2023</span>
                    <span className="mx-2">•</span>
                    <User className="h-4 w-4 mr-1" />
                    <span>James Wilson</span>
                  </div>
                  <CardTitle className="text-xl">
                    {index % 3 === 0
                      ? "The Impact of Cultural Celebrations on Mental Wellbeing"
                      : index % 3 === 1
                        ? "Navigating Career Challenges with Cultural Sensitivity"
                        : "Building Resilience Through Community Connections"}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="line-clamp-3">
                    {index % 3 === 0
                      ? "How participating in cultural celebrations and traditions can boost mental wellbeing and create a sense of belonging and identity."
                      : index % 3 === 1
                        ? "Strategies for navigating workplace challenges while honoring your cultural background and leveraging your unique perspective."
                        : "The importance of community connections for mental health resilience and how to build supportive networks."}
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href={`/blog/post-${index + 1}`}>
                    <Button variant="ghost" className="gap-1 text-brand-dark hover:text-brand-teal">
                      Read More <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <div className="flex gap-1">
              <Button variant="outline" size="icon" className="w-8 h-8 p-0">
                1
              </Button>
              <Button variant="outline" size="icon" className="w-8 h-8 p-0">
                2
              </Button>
              <Button variant="outline" size="icon" className="w-8 h-8 p-0">
                3
              </Button>
              <Button variant="outline" size="icon" className="w-8 h-8 p-0">
                ...
              </Button>
              <Button variant="outline" size="icon" className="w-8 h-8 p-0">
                8
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-4 text-brand-dark">Subscribe to Our Newsletter</h2>
          <p className="text-lg text-gray-600 mb-8">
            Stay updated with our latest articles, events, and resources delivered directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-2">
            <input type="email" placeholder="Your email address" className="flex-1 px-4 py-2 border rounded-md" />
            <Button className="bg-brand-dark hover:bg-brand-dark/90">Subscribe</Button>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            We respect your privacy. Unsubscribe at any time. See our{" "}
            <Link href="/privacy-policy" className="underline hover:text-brand-teal">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </section>
    </div>
  )
}
