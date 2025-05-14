import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, ExternalLink, FileText, MapPin, Phone, Video } from "lucide-react"
import Link from "next/link"

export default function ResourcesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Wellbeing Resources</h1>
        <p className="text-muted-foreground">Access helpful resources to support your mental health journey</p>
      </div>

      <Tabs defaultValue="all" className="space-y-6">
        <TabsList>
          <TabsTrigger value="all">All Resources</TabsTrigger>
          <TabsTrigger value="articles">Articles</TabsTrigger>
          <TabsTrigger value="videos">Videos</TabsTrigger>
          <TabsTrigger value="support">Support Services</TabsTrigger>
          <TabsTrigger value="local">Local Resources</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" /> Articles & Guides
                </CardTitle>
                <CardDescription>Educational content on mental health topics</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                    </div>
                    <span>Understanding Anxiety: Causes and Management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                    </div>
                    <span>Depression: Signs, Symptoms, and Treatment Options</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                    </div>
                    <span>Mindfulness Techniques for Daily Wellbeing</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/resources?tab=articles">
                  <Button variant="outline" className="w-full">
                    View All Articles
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Video className="h-5 w-5" /> Video Resources
                </CardTitle>
                <CardDescription>Video content on mental health and wellbeing</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                    </div>
                    <span>Guided Meditation for Anxiety Relief (15 min)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                    </div>
                    <span>Understanding CBT: A Visual Guide</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                    </div>
                    <span>Sleep Hygiene: Tips for Better Rest</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/resources?tab=videos">
                  <Button variant="outline" className="w-full">
                    View All Videos
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-5 w-5" /> Support Services
                </CardTitle>
                <CardDescription>Helplines and support resources</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                    </div>
                    <span>Samaritans: 116 123 (24/7 helpline)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                    </div>
                    <span>Mind: 0300 123 3393 (Mon-Fri, 9am-6pm)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                    </div>
                    <span>NHS: 111 for non-emergency medical advice</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/resources?tab=support">
                  <Button variant="outline" className="w-full">
                    View All Support Services
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" /> Local Resources
                </CardTitle>
                <CardDescription>Resources in your local area</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                    </div>
                    <span>Community Mental Health Teams</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                    </div>
                    <span>Local Support Groups</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                    </div>
                    <span>NHS Mental Health Services</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/resources?tab=local">
                  <Button variant="outline" className="w-full">
                    View Local Resources
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5" /> Self-Help Tools
                </CardTitle>
                <CardDescription>Tools and worksheets for self-guided support</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                    </div>
                    <span>Anxiety Management Workbook</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                    </div>
                    <span>Mood Tracking Templates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                    </div>
                    <span>Guided Meditation Scripts</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Download Resources
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ExternalLink className="h-5 w-5" /> External Resources
                </CardTitle>
                <CardDescription>Links to trusted external organizations</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                    </div>
                    <span>NHS Mental Health Services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                    </div>
                    <span>Mind Charity Resources</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                    </div>
                    <span>Mental Health Foundation</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Visit External Resources
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="articles" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Mental Health Articles</CardTitle>
              <CardDescription>Educational content on mental health topics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="p-4 border rounded-lg">
                  <h3 className="text-lg font-medium mb-2">Understanding Anxiety: Causes and Management</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Learn about the causes of anxiety, common symptoms, and effective management strategies.
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="text-sm">
                      <span className="text-muted-foreground">Reading time: </span>
                      <span>10 minutes</span>
                    </div>
                    <Button size="sm">Read Article</Button>
                  </div>
                </div>

                <div className="p-4 border rounded-lg">
                  <h3 className="text-lg font-medium mb-2">Depression: Signs, Symptoms, and Treatment Options</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    An overview of depression, its impact on daily life, and various treatment approaches.
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="text-sm">
                      <span className="text-muted-foreground">Reading time: </span>
                      <span>12 minutes</span>
                    </div>
                    <Button size="sm">Read Article</Button>
                  </div>
                </div>

                <div className="p-4 border rounded-lg">
                  <h3 className="text-lg font-medium mb-2">Mindfulness Techniques for Daily Wellbeing</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Practical mindfulness exercises you can incorporate into your daily routine.
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="text-sm">
                      <span className="text-muted-foreground">Reading time: </span>
                      <span>8 minutes</span>
                    </div>
                    <Button size="sm">Read Article</Button>
                  </div>
                </div>

                <div className="p-4 border rounded-lg">
                  <h3 className="text-lg font-medium mb-2">Sleep and Mental Health: The Crucial Connection</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    How sleep affects mental health and strategies for improving sleep quality.
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="text-sm">
                      <span className="text-muted-foreground">Reading time: </span>
                      <span>15 minutes</span>
                    </div>
                    <Button size="sm">Read Article</Button>
                  </div>
                </div>

                <div className="p-4 border rounded-lg">
                  <h3 className="text-lg font-medium mb-2">Stress Management: Practical Techniques</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Effective strategies for managing stress in your personal and professional life.
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="text-sm">
                      <span className="text-muted-foreground">Reading time: </span>
                      <span>11 minutes</span>
                    </div>
                    <Button size="sm">Read Article</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="videos" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Video Resources</CardTitle>
              <CardDescription>Video content on mental health and wellbeing</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="border rounded-lg overflow-hidden">
                  <div className="aspect-video bg-muted flex items-center justify-center">
                    <Video className="h-10 w-10 text-muted-foreground" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium mb-2">Guided Meditation for Anxiety Relief (15 min)</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      A calming guided meditation to help reduce anxiety and promote relaxation.
                    </p>
                    <Button size="sm">Watch Video</Button>
                  </div>
                </div>

                <div className="border rounded-lg overflow-hidden">
                  <div className="aspect-video bg-muted flex items-center justify-center">
                    <Video className="h-10 w-10 text-muted-foreground" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium mb-2">Understanding CBT: A Visual Guide</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      An introduction to Cognitive Behavioral Therapy and how it works.
                    </p>
                    <Button size="sm">Watch Video</Button>
                  </div>
                </div>

                <div className="border rounded-lg overflow-hidden">
                  <div className="aspect-video bg-muted flex items-center justify-center">
                    <Video className="h-10 w-10 text-muted-foreground" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium mb-2">Sleep Hygiene: Tips for Better Rest</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Practical advice for improving your sleep quality and establishing healthy sleep habits.
                    </p>
                    <Button size="sm">Watch Video</Button>
                  </div>
                </div>

                <div className="border rounded-lg overflow-hidden">
                  <div className="aspect-video bg-muted flex items-center justify-center">
                    <Video className="h-10 w-10 text-muted-foreground" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium mb-2">Breathing Exercises for Stress Relief</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Simple breathing techniques you can use anywhere to reduce stress and anxiety.
                    </p>
                    <Button size="sm">Watch Video</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="support" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Support Services</CardTitle>
              <CardDescription>Helplines and support resources</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="p-6 border rounded-lg">
                  <h3 className="text-lg font-medium mb-2">Crisis Support</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Phone className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Samaritans</p>
                        <p className="text-sm">116 123 (24/7 helpline)</p>
                        <p className="text-sm text-muted-foreground">
                          Free confidential support for anyone in distress
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Crisis Text Line</p>
                        <p className="text-sm">Text "SHOUT" to 85258</p>
                        <p className="text-sm text-muted-foreground">24/7 text support for anyone in crisis</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Emergency Services</p>
                        <p className="text-sm">999</p>
                        <p className="text-sm text-muted-foreground">For immediate danger to yourself or others</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 border rounded-lg">
                  <h3 className="text-lg font-medium mb-2">Mental Health Support</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Phone className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Mind</p>
                        <p className="text-sm">0300 123 3393 (Mon-Fri, 9am-6pm)</p>
                        <p className="text-sm text-muted-foreground">
                          Information and advice on mental health problems
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">NHS</p>
                        <p className="text-sm">111 for non-emergency medical advice</p>
                        <p className="text-sm text-muted-foreground">24/7 healthcare advice and information</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Anxiety UK</p>
                        <p className="text-sm">03444 775 774 (Mon-Fri, 9:30am-5:30pm)</p>
                        <p className="text-sm text-muted-foreground">Support for anxiety disorders</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 border rounded-lg">
                  <h3 className="text-lg font-medium mb-2">Specialized Support</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Phone className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">CALM (Campaign Against Living Miserably)</p>
                        <p className="text-sm">0800 58 58 58 (5pm-midnight)</p>
                        <p className="text-sm text-muted-foreground">Support for men in crisis</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Young Minds</p>
                        <p className="text-sm">Text "YM" to 85258</p>
                        <p className="text-sm text-muted-foreground">Support for young people's mental health</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Papyrus HOPELINEUK</p>
                        <p className="text-sm">0800 068 4141</p>
                        <p className="text-sm text-muted-foreground">Prevention of young suicide</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="local" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Local Resources</CardTitle>
              <CardDescription>Resources in your local area</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="p-4 bg-muted rounded-lg">
                  <p>Enter your postcode to find local mental health resources in your area:</p>
                  <div className="flex gap-2 mt-4">
                    <input
                      type="text"
                      placeholder="Enter postcode"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                    <Button>Search</Button>
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="p-6 border rounded-lg">
                    <h3 className="text-lg font-medium mb-4">NHS Mental Health Services</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium">Community Mental Health Teams</p>
                          <p className="text-sm text-muted-foreground">
                            Local NHS teams providing specialist mental health care
                          </p>
                          <Button variant="link" className="p-0 h-auto text-sm">
                            Find your local team
                          </Button>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium">IAPT Services</p>
                          <p className="text-sm text-muted-foreground">
                            NHS talking therapies for depression and anxiety
                          </p>
                          <Button variant="link" className="p-0 h-auto text-sm">
                            Find IAPT services
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 border rounded-lg">
                    <h3 className="text-lg font-medium mb-4">Support Groups</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium">Mind Local Groups</p>
                          <p className="text-sm text-muted-foreground">
                            Local Mind branches offering support and services
                          </p>
                          <Button variant="link" className="p-0 h-auto text-sm">
                            Find your local Mind
                          </Button>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium">Peer Support Groups</p>
                          <p className="text-sm text-muted-foreground">Community-based support groups</p>
                          <Button variant="link" className="p-0 h-auto text-sm">
                            Find local groups
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 border rounded-lg">
                  <h3 className="text-lg font-medium mb-4">Local Wellbeing Services</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Community Wellbeing Centers</p>
                        <p className="text-sm text-muted-foreground">
                          Local centers offering wellbeing activities and support
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Social Prescribing Services</p>
                        <p className="text-sm text-muted-foreground">
                          Connecting people to community support for wellbeing
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Voluntary Sector Support</p>
                        <p className="text-sm text-muted-foreground">
                          Local charities and organizations offering mental health support
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
