import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileText } from "lucide-react"
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

            {/* Other cards remain the same */}
          </div>
        </TabsContent>

        {/* Other tabs content remains the same */}
      </Tabs>
    </div>
  )
}
