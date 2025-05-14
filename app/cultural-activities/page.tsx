import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Users } from "lucide-react"

export default function CulturalActivitiesPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-brand-dark text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Cultural Activities</h1>
            <p className="text-lg md:text-xl mb-8">
              Explore our diverse range of cultural activities designed to celebrate heritage, foster community
              connections, and promote wellbeing through shared experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Workshops Section */}
      <section id="workshops" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4 text-brand-dark">Community Workshops</h2>
            <p className="text-lg text-gray-600 max-w-3xl">
              Interactive workshops that explore cultural identity, mental health awareness, and community building
              through creative expression and shared learning.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Card key={item}>
                <div className="aspect-video bg-gray-200 rounded-t-lg"></div>
                <CardHeader>
                  <CardTitle>Cultural Identity Workshop</CardTitle>
                  <CardDescription>Exploring heritage and personal identity</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2 text-brand-teal" />
                      <span>June 25, 2023 | 2:00 PM - 4:00 PM</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-brand-teal" />
                      <span>Community Center, London</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-2 text-brand-teal" />
                      <span>20 spots available</span>
                    </div>
                  </div>
                  <p className="mt-4">
                    A workshop focused on exploring cultural identity through creative activities, discussion, and
                    reflection. Suitable for all ages and backgrounds.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-brand-dark hover:bg-brand-dark/90">Register Now</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Celebrations Section */}
      <section id="celebrations" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4 text-brand-dark">Cultural Celebrations</h2>
            <p className="text-lg text-gray-600 max-w-3xl">
              Events celebrating diverse cultural traditions, festivals, and heritage to foster understanding and
              community connections across different backgrounds.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {[1, 2, 3, 4].map((item) => (
              <Card key={item} className="flex flex-col md:flex-row overflow-hidden">
                <div className="md:w-1/3 bg-gray-200 aspect-video md:aspect-auto"></div>
                <div className="md:w-2/3">
                  <CardHeader>
                    <CardTitle>Cultural Heritage Festival</CardTitle>
                    <CardDescription>Celebrating diverse traditions and customs</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-sm mb-4">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2 text-brand-teal" />
                        <span>July 15-16, 2023 | 11:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2 text-brand-teal" />
                        <span>Victoria Park, London</span>
                      </div>
                    </div>
                    <p className="line-clamp-2">
                      A weekend celebration of cultural diversity featuring music, dance, food, art, and interactive
                      activities for the whole family.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button className="bg-brand-dark hover:bg-brand-dark/90">Learn More</Button>
                  </CardFooter>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Youth Programs Section */}
      <section id="youth" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4 text-brand-dark">Youth Programs</h2>
            <p className="text-lg text-gray-600 max-w-3xl">
              Specialized programs for young people that combine cultural education, mental health support, and skills
              development in a supportive environment.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card>
              <CardHeader className="bg-brand-teal text-white">
                <CardTitle>Youth Mentorship</CardTitle>
                <CardDescription className="text-white/90">Ages 13-18</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="rounded-full bg-brand-teal/10 p-1 mt-0.5 mr-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-brand-teal"></div>
                    </div>
                    <span>One-on-one mentoring with cultural sensitivity</span>
                  </li>
                  <li className="flex items-start">
                    <div className="rounded-full bg-brand-teal/10 p-1 mt-0.5 mr-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-brand-teal"></div>
                    </div>
                    <span>Weekly sessions with trained mentors</span>
                  </li>
                  <li className="flex items-start">
                    <div className="rounded-full bg-brand-teal/10 p-1 mt-0.5 mr-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-brand-teal"></div>
                    </div>
                    <span>Personal development and goal setting</span>
                  </li>
                  <li className="flex items-start">
                    <div className="rounded-full bg-brand-teal/10 p-1 mt-0.5 mr-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-brand-teal"></div>
                    </div>
                    <span>Cultural identity exploration</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-brand-dark hover:bg-brand-dark/90">Apply Now</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="bg-brand-gold text-white">
                <CardTitle>Creative Expression</CardTitle>
                <CardDescription className="text-white/90">Ages 8-16</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="rounded-full bg-brand-gold/10 p-1 mt-0.5 mr-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-brand-gold"></div>
                    </div>
                    <span>Art, music, and storytelling workshops</span>
                  </li>
                  <li className="flex items-start">
                    <div className="rounded-full bg-brand-gold/10 p-1 mt-0.5 mr-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-brand-gold"></div>
                    </div>
                    <span>Cultural traditions and modern expression</span>
                  </li>
                  <li className="flex items-start">
                    <div className="rounded-full bg-brand-gold/10 p-1 mt-0.5 mr-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-brand-gold"></div>
                    </div>
                    <span>Bi-weekly sessions with materials provided</span>
                  </li>
                  <li className="flex items-start">
                    <div className="rounded-full bg-brand-gold/10 p-1 mt-0.5 mr-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-brand-gold"></div>
                    </div>
                    <span>Culminating in community exhibition</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-brand-dark hover:bg-brand-dark/90">Register</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="bg-brand-dark text-white">
                <CardTitle>Leadership Development</CardTitle>
                <CardDescription className="text-white/90">Ages 16-24</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="rounded-full bg-brand-dark/10 p-1 mt-0.5 mr-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-brand-dark"></div>
                    </div>
                    <span>Leadership skills with cultural context</span>
                  </li>
                  <li className="flex items-start">
                    <div className="rounded-full bg-brand-dark/10 p-1 mt-0.5 mr-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-brand-dark"></div>
                    </div>
                    <span>Monthly workshops and project-based learning</span>
                  </li>
                  <li className="flex items-start">
                    <div className="rounded-full bg-brand-dark/10 p-1 mt-0.5 mr-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-brand-dark"></div>
                    </div>
                    <span>Community service opportunities</span>
                  </li>
                  <li className="flex items-start">
                    <div className="rounded-full bg-brand-dark/10 p-1 mt-0.5 mr-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-brand-dark"></div>
                    </div>
                    <span>Networking with community leaders</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-brand-dark hover:bg-brand-dark/90">Learn More</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Calendar Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4 text-brand-dark">Upcoming Events Calendar</h2>
            <p className="text-lg text-gray-600 max-w-3xl">
              Browse our calendar of upcoming cultural activities and events. Filter by type, age group, or location to
              find activities that interest you.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1">
                <input type="text" placeholder="Search events..." className="w-full px-4 py-2 border rounded-md" />
              </div>
              <div className="flex gap-2">
                <select className="px-4 py-2 border rounded-md">
                  <option>All Categories</option>
                  <option>Workshops</option>
                  <option>Celebrations</option>
                  <option>Youth Programs</option>
                </select>
                <Button className="bg-brand-dark hover:bg-brand-dark/90">Filter</Button>
              </div>
            </div>

            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((item) => (
                <div key={item} className="border rounded-lg p-4 flex flex-col md:flex-row gap-4">
                  <div className="md:w-1/6">
                    <div className="text-center bg-brand-dark/5 p-3 rounded-md">
                      <div className="text-xl font-bold text-brand-dark">25</div>
                      <div className="text-sm">June</div>
                    </div>
                  </div>
                  <div className="md:w-3/6">
                    <h3 className="font-bold text-lg">Cultural Identity Workshop</h3>
                    <p className="text-sm text-gray-600 mb-2">Exploring heritage and personal identity</p>
                    <div className="flex items-center text-sm">
                      <Calendar className="h-4 w-4 mr-1 text-brand-teal" />
                      <span>2:00 PM - 4:00 PM</span>
                      <MapPin className="h-4 w-4 ml-3 mr-1 text-brand-teal" />
                      <span>Community Center, London</span>
                    </div>
                  </div>
                  <div className="md:w-2/6 flex items-center justify-end">
                    <Button className="bg-brand-dark hover:bg-brand-dark/90">Register</Button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex justify-center">
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Get Involved</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Interested in participating in our cultural activities or volunteering to help organize events? Get in touch
            with us today!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-brand-teal hover:bg-brand-teal/90 text-white">Contact Us</Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10">
              Volunteer Opportunities
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
