"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BarChart3, Calendar, Download, LineChart } from "lucide-react"
import Link from "next/link"

// Sample data for demonstration
const sampleData = {
  gad7: [
    { date: "2023-01-15", score: 12 },
    { date: "2023-02-10", score: 10 },
    { date: "2023-03-05", score: 8 },
    { date: "2023-04-20", score: 9 },
    { date: "2023-05-15", score: 7 },
    { date: "2023-06-10", score: 5 },
  ],
  phq9: [
    { date: "2023-01-20", score: 14 },
    { date: "2023-02-15", score: 13 },
    { date: "2023-03-10", score: 11 },
    { date: "2023-04-25", score: 10 },
    { date: "2023-05-20", score: 8 },
    { date: "2023-06-15", score: 7 },
  ],
}

export default function DashboardPage() {
  const [timeRange, setTimeRange] = useState("6m")

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Wellbeing Dashboard</h1>
          <p className="text-muted-foreground">Track your mental health journey and visualize your progress</p>
        </div>
        <div className="flex items-center gap-2">
          <Select defaultValue={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select time range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1m">Last Month</SelectItem>
              <SelectItem value="3m">Last 3 Months</SelectItem>
              <SelectItem value="6m">Last 6 Months</SelectItem>
              <SelectItem value="1y">Last Year</SelectItem>
              <SelectItem value="all">All Time</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="icon">
            <Download className="h-4 w-4" />
            <span className="sr-only">Download data</span>
          </Button>
        </div>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="anxiety">Anxiety (GAD-7)</TabsTrigger>
          <TabsTrigger value="depression">Depression (PHQ-9)</TabsTrigger>
          <TabsTrigger value="insights">Insights</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Latest GAD-7 Score</CardTitle>
                <CardDescription>Anxiety Assessment</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{sampleData.gad7[sampleData.gad7.length - 1].score}</div>
                <p className="text-xs text-muted-foreground">
                  {sampleData.gad7[sampleData.gad7.length - 1].score <= 4
                    ? "Minimal anxiety"
                    : sampleData.gad7[sampleData.gad7.length - 1].score <= 9
                      ? "Mild anxiety"
                      : sampleData.gad7[sampleData.gad7.length - 1].score <= 14
                        ? "Moderate anxiety"
                        : "Severe anxiety"}
                </p>
                <div className="mt-2 h-1 w-full bg-muted overflow-hidden rounded-full">
                  <div
                    className="bg-primary h-full transition-all duration-500"
                    style={{ width: `${(sampleData.gad7[sampleData.gad7.length - 1].score / 21) * 100}%` }}
                  ></div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Latest PHQ-9 Score</CardTitle>
                <CardDescription>Depression Assessment</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{sampleData.phq9[sampleData.phq9.length - 1].score}</div>
                <p className="text-xs text-muted-foreground">
                  {sampleData.phq9[sampleData.phq9.length - 1].score <= 4
                    ? "Minimal depression"
                    : sampleData.phq9[sampleData.phq9.length - 1].score <= 9
                      ? "Mild depression"
                      : sampleData.phq9[sampleData.phq9.length - 1].score <= 14
                        ? "Moderate depression"
                        : sampleData.phq9[sampleData.phq9.length - 1].score <= 19
                          ? "Moderately severe depression"
                          : "Severe depression"}
                </p>
                <div className="mt-2 h-1 w-full bg-muted overflow-hidden rounded-full">
                  <div
                    className="bg-primary h-full transition-all duration-500"
                    style={{ width: `${(sampleData.phq9[sampleData.phq9.length - 1].score / 27) * 100}%` }}
                  ></div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Assessments Completed</CardTitle>
                <CardDescription>Total questionnaires</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{sampleData.gad7.length + sampleData.phq9.length}</div>
                <p className="text-xs text-muted-foreground">Last completed on {new Date().toLocaleDateString()}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Progress Trend</CardTitle>
                <CardDescription>Overall wellbeing</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-500">Improving</div>
                <p className="text-xs text-muted-foreground">Based on your last 6 assessments</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <LineChart className="h-5 w-5" /> Anxiety Score Trend
                </CardTitle>
                <CardDescription>GAD-7 scores over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-end justify-between gap-2 pt-6">
                  {sampleData.gad7.map((item, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <div
                        className="w-8 bg-brand-teal rounded-t-md transition-all duration-500"
                        style={{ height: `${(item.score / 21) * 100}%` }}
                      ></div>
                      <div className="mt-2 text-xs">
                        {new Date(item.date).toLocaleDateString(undefined, { month: "short" })}
                      </div>
                      <div className="text-xs font-medium">{item.score}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <LineChart className="h-5 w-5" /> Depression Score Trend
                </CardTitle>
                <CardDescription>PHQ-9 scores over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-end justify-between gap-2 pt-6">
                  {sampleData.phq9.map((item, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <div
                        className="w-8 bg-brand-gold rounded-t-md transition-all duration-500"
                        style={{ height: `${(item.score / 27) * 100}%` }}
                      ></div>
                      <div className="mt-2 text-xs">
                        {new Date(item.date).toLocaleDateString(undefined, { month: "short" })}
                      </div>
                      <div className="text-xs font-medium">{item.score}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" /> Assessment Calendar
              </CardTitle>
              <CardDescription>Your assessment history and upcoming reminders</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">Recent Assessments</h3>
                  <Button variant="ghost" size="sm">
                    View All
                  </Button>
                </div>

                <div className="space-y-2">
                  {[...sampleData.gad7, ...sampleData.phq9]
                    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                    .slice(0, 5)
                    .map((item, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                            {item.date.includes(sampleData.gad7[0].date) ? (
                              <BarChart3 className="h-5 w-5 text-primary" />
                            ) : (
                              <LineChart className="h-5 w-5 text-primary" />
                            )}
                          </div>
                          <div>
                            <p className="font-medium">
                              {item.date.includes(sampleData.gad7[0].date) ? "GAD-7 Assessment" : "PHQ-9 Assessment"}
                            </p>
                            <p className="text-xs text-muted-foreground">{new Date(item.date).toLocaleDateString()}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="text-sm font-medium">Score: {item.score}</div>
                          <Button variant="ghost" size="sm">
                            View
                          </Button>
                        </div>
                      </div>
                    ))}
                </div>

                <div className="flex justify-center mt-6">
                  <Link href="/questionnaires">
                    <Button>Take New Assessment</Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="anxiety" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Anxiety Assessment (GAD-7)</CardTitle>
              <CardDescription>Detailed view of your GAD-7 assessment results</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <div className="h-[400px] flex items-end justify-between gap-2 pt-6">
                  {sampleData.gad7.map((item, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <div
                        className="w-16 bg-brand-teal rounded-t-md transition-all duration-500"
                        style={{ height: `${(item.score / 21) * 100}%` }}
                      ></div>
                      <div className="mt-2 text-sm">{new Date(item.date).toLocaleDateString()}</div>
                      <div className="text-sm font-medium">{item.score}</div>
                    </div>
                  ))}
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h3 className="text-lg font-medium mb-4">Score Interpretation</h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-4 h-4 rounded-full bg-green-200"></div>
                        <div className="flex-1">
                          <p className="font-medium">0-4: Minimal Anxiety</p>
                          <p className="text-sm text-muted-foreground">Little or no anxiety symptoms</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-4 h-4 rounded-full bg-blue-200"></div>
                        <div className="flex-1">
                          <p className="font-medium">5-9: Mild Anxiety</p>
                          <p className="text-sm text-muted-foreground">Mild anxiety symptoms present</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-4 h-4 rounded-full bg-yellow-200"></div>
                        <div className="flex-1">
                          <p className="font-medium">10-14: Moderate Anxiety</p>
                          <p className="text-sm text-muted-foreground">
                            Moderate anxiety symptoms that may require attention
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-4 h-4 rounded-full bg-red-200"></div>
                        <div className="flex-1">
                          <p className="font-medium">15-21: Severe Anxiety</p>
                          <p className="text-sm text-muted-foreground">
                            Severe anxiety symptoms that require intervention
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-4">Progress Analysis</h3>
                    <div className="space-y-4">
                      <div className="p-4 bg-muted rounded-lg">
                        <p className="font-medium mb-2">Overall Trend</p>
                        <p className="text-sm">
                          Your anxiety scores have shown improvement over time, decreasing from 12 to 5 (58% reduction).
                        </p>
                      </div>
                      <div className="p-4 bg-muted rounded-lg">
                        <p className="font-medium mb-2">Current Status</p>
                        <p className="text-sm">
                          Your most recent score of 5 indicates mild anxiety. This is a significant improvement from
                          your initial moderate anxiety level.
                        </p>
                      </div>
                      <div className="p-4 bg-muted rounded-lg">
                        <p className="font-medium mb-2">Recommendation</p>
                        <p className="text-sm">
                          Continue with your current strategies and consider scheduling your next assessment in 2-4
                          weeks to monitor progress.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="depression" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Depression Assessment (PHQ-9)</CardTitle>
              <CardDescription>Detailed view of your PHQ-9 assessment results</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <div className="h-[400px] flex items-end justify-between gap-2 pt-6">
                  {sampleData.phq9.map((item, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <div
                        className="w-16 bg-brand-gold rounded-t-md transition-all duration-500"
                        style={{ height: `${(item.score / 27) * 100}%` }}
                      ></div>
                      <div className="mt-2 text-sm">{new Date(item.date).toLocaleDateString()}</div>
                      <div className="text-sm font-medium">{item.score}</div>
                    </div>
                  ))}
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h3 className="text-lg font-medium mb-4">Score Interpretation</h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-4 h-4 rounded-full bg-green-200"></div>
                        <div className="flex-1">
                          <p className="font-medium">0-4: Minimal Depression</p>
                          <p className="text-sm text-muted-foreground">Little or no depression symptoms</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-4 h-4 rounded-full bg-blue-200"></div>
                        <div className="flex-1">
                          <p className="font-medium">5-9: Mild Depression</p>
                          <p className="text-sm text-muted-foreground">Mild depression symptoms present</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-4 h-4 rounded-full bg-yellow-200"></div>
                        <div className="flex-1">
                          <p className="font-medium">10-14: Moderate Depression</p>
                          <p className="text-sm text-muted-foreground">
                            Moderate depression symptoms that may require attention
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-4 h-4 rounded-full bg-orange-200"></div>
                        <div className="flex-1">
                          <p className="font-medium">15-19: Moderately Severe Depression</p>
                          <p className="text-sm text-muted-foreground">
                            Moderately severe depression symptoms that require intervention
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-4 h-4 rounded-full bg-red-200"></div>
                        <div className="flex-1">
                          <p className="font-medium">20-27: Severe Depression</p>
                          <p className="text-sm text-muted-foreground">
                            Severe depression symptoms that require immediate intervention
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-4">Progress Analysis</h3>
                    <div className="space-y-4">
                      <div className="p-4 bg-muted rounded-lg">
                        <p className="font-medium mb-2">Overall Trend</p>
                        <p className="text-sm">
                          Your depression scores have shown improvement over time, decreasing from 14 to 7 (50%
                          reduction).
                        </p>
                      </div>
                      <div className="p-4 bg-muted rounded-lg">
                        <p className="font-medium mb-2">Current Status</p>
                        <p className="text-sm">
                          Your most recent score of 7 indicates mild depression. This is a significant improvement from
                          your initial moderate depression level.
                        </p>
                      </div>
                      <div className="p-4 bg-muted rounded-lg">
                        <p className="font-medium mb-2">Recommendation</p>
                        <p className="text-sm">
                          Continue with your current strategies and consider scheduling your next assessment in 2-4
                          weeks to monitor progress.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="insights" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Wellbeing Insights</CardTitle>
              <CardDescription>Personalized insights based on your assessment data</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="p-6 bg-muted rounded-lg">
                  <h3 className="text-lg font-medium mb-4">Key Observations</h3>
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                      </div>
                      <p>
                        Your anxiety and depression scores have both shown consistent improvement over the past 6
                        months.
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                      </div>
                      <p>
                        Your anxiety scores improved more rapidly in the first 3 months, while depression scores showed
                        more gradual improvement.
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                      </div>
                      <p>
                        Both your anxiety and depression scores are now in the mild range, indicating significant
                        progress from your initial assessments.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="p-6 bg-muted rounded-lg">
                    <h3 className="text-lg font-medium mb-4">Potential Triggers</h3>
                    <p className="mb-4 text-sm">
                      Based on your assessment patterns, these factors may influence your wellbeing:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                        </div>
                        <span>Work-related stress (indicated by midweek score fluctuations)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                        </div>
                        <span>Sleep quality (mentioned in your assessment notes)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                        </div>
                        <span>Social interaction levels (correlation with score improvements)</span>
                      </li>
                    </ul>
                  </div>

                  <div className="p-6 bg-muted rounded-lg">
                    <h3 className="text-lg font-medium mb-4">Effective Strategies</h3>
                    <p className="mb-4 text-sm">These approaches appear to be working well for you:</p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                        </div>
                        <span>Regular physical activity (noted in your activity log)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                        </div>
                        <span>Mindfulness practice (correlates with improved scores)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                        </div>
                        <span>Consistent sleep schedule (based on reported improvements)</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="p-6 border rounded-lg">
                  <h3 className="text-lg font-medium mb-4">Personalized Recommendations</h3>
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <Calendar className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Schedule Regular Assessments</p>
                        <p className="text-sm text-muted-foreground">
                          Continue monthly assessments to track your progress and identify patterns.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <BarChart3 className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Focus on Sleep Quality</p>
                        <p className="text-sm text-muted-foreground">
                          Your scores show correlation with reported sleep quality. Consider tracking your sleep
                          patterns.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <LineChart className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Maintain Current Strategies</p>
                        <p className="text-sm text-muted-foreground">
                          Your current approach is working well. Continue with physical activity and mindfulness
                          practices.
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
