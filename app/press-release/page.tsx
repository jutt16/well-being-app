import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, Calendar, Download } from "lucide-react"

export default function PressReleasePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-brand-dark text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Press Releases</h1>
            <p className="text-lg md:text-xl mb-8">
              Stay updated with the latest news, announcements, and initiatives from Right2Thrive UK.
            </p>
          </div>
        </div>
      </section>

      {/* Press Releases */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
            <h2 className="text-2xl font-bold text-brand-dark">Latest Press Releases</h2>
            <div className="flex gap-2">
              <select className="px-4 py-2 border rounded-md">
                <option>All Years</option>
                <option>2023</option>
                <option>2022</option>
                <option>2021</option>
                <option>2020</option>
              </select>
              <Button className="bg-brand-dark hover:bg-brand-dark/90">Filter</Button>
            </div>
          </div>

          <div className="space-y-8">
            {Array.from({ length: 5 }).map((_, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>June 15, 2023</span>
                  </div>
                  <CardTitle className="text-xl">
                    {index === 0
                      ? "Right2Thrive UK Launches New Mental Health Initiative for Young People"
                      : index === 1
                        ? "Right2Thrive UK Partners with Local Schools to Provide Cultural Mentorship"
                        : index === 2
                          ? "Annual Report Shows Significant Impact of Right2Thrive UK Programs"
                          : index === 3
                            ? "Right2Thrive UK Receives Grant to Expand Cultural Activities Program"
                            : "Right2Thrive UK Hosts Conference on Cultural Identity and Mental Health"}
                  </CardTitle>
                  <CardDescription>
                    {index === 0
                      ? "New program aims to provide culturally responsive mental health support to young people across London."
                      : index === 1
                        ? "Partnership will connect students with mentors who share their cultural background."
                        : index === 2
                          ? "Report highlights the organization's achievements and impact over the past year."
                          : index === 3
                            ? "Funding will support the expansion of cultural activities to more communities."
                            : "Conference brings together experts to discuss the intersection of cultural identity and mental wellbeing."}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    {index === 0
                      ? "Right2Thrive UK is proud to announce the launch of its new mental health initiative, 'Culturally Connected,' designed to provide young people with mental health support that honors and incorporates their cultural backgrounds and identities."
                      : index === 1
                        ? "Right2Thrive UK has formed a partnership with 15 schools across London to provide cultural mentorship programs for students from diverse backgrounds. The program will connect students with mentors who share their cultural heritage and can provide guidance on navigating cultural identity while supporting mental wellbeing."
                        : index === 2
                          ? "Right2Thrive UK has released its annual impact report, highlighting the organization's achievements over the past year. The report shows that the organization has supported over 1,000 young people through its various programs, with 85% of participants reporting improved mental wellbeing and stronger connections to their cultural identity."
                          : index === 3
                            ? "Right2Thrive UK is pleased to announce that it has received a grant from the Community Foundation to expand its cultural activities program. The funding will allow the organization to offer more workshops, celebrations, and events that celebrate cultural diversity and promote mental wellbeing through cultural connection."
                            : "Right2Thrive UK recently hosted a conference on 'Cultural Identity and Mental Health,' bringing together mental health professionals, community leaders, and young people to discuss the important intersection of cultural identity and mental wellbeing. The conference featured keynote speakers, panel discussions, and interactive workshops."}
                  </p>
                  <div className="flex items-center gap-2">
                    <Download className="h-4 w-4 text-brand-teal" />
                    <span className="text-sm text-brand-teal">Download Press Release (PDF)</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href={`/press-release/${index + 1}`}>
                    <Button className="bg-brand-dark hover:bg-brand-dark/90">
                      Read Full Press Release <ArrowRight className="ml-2 h-4 w-4" />
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
            </div>
          </div>
        </div>
      </section>

      {/* Media Contact */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold mb-8 text-brand-dark text-center">Media Contact</h2>
          <Card>
            <CardHeader>
              <CardTitle>Press Inquiries</CardTitle>
              <CardDescription>
                For media inquiries, interview requests, or additional information about Right2Thrive UK, please contact
                our media relations team.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-1">Contact Person:</h3>
                  <p>Sarah Johnson, Communications Director</p>
                </div>
                <div>
                  <h3 className="font-medium mb-1">Email:</h3>
                  <p>
                    <a href="mailto:press@right2thriveuk.com" className="text-brand-teal hover:underline">
                      press@right2thriveuk.com
                    </a>
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-1">Phone:</h3>
                  <p>+44 20 1234 5678</p>
                </div>
                <div>
                  <h3 className="font-medium mb-1">Office Hours:</h3>
                  <p>Monday to Friday, 9:00 AM - 5:00 PM GMT</p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="bg-brand-dark hover:bg-brand-dark/90">Contact Media Team</Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* Media Resources */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-brand-dark text-center">Media Resources</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Brand Assets</CardTitle>
                <CardDescription>Logos, brand guidelines, and official images</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Download our official logos, brand guidelines, and approved images for use in media coverage of
                  Right2Thrive UK.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-brand-dark hover:bg-brand-dark/90">Download Brand Kit</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Fact Sheet</CardTitle>
                <CardDescription>Key information about Right2Thrive UK</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Access our fact sheet for key information about Right2Thrive UK, including our mission, programs,
                  impact statistics, and organizational history.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-brand-dark hover:bg-brand-dark/90">Download Fact Sheet</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Annual Reports</CardTitle>
                <CardDescription>Yearly reports on our activities and impact</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  View and download our annual reports, which provide comprehensive information about our programs,
                  achievements, and financial information.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-brand-dark hover:bg-brand-dark/90">View Annual Reports</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
