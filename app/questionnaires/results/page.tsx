"use client"

import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, BarChart3, Download, Share2 } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function ResultsPage() {
  const searchParams = useSearchParams()
  const type = searchParams.get("type")
  const score = searchParams.get("score")
  const interpretation = searchParams.get("interpretation")

  const [chartData, setChartData] = useState<any>(null)

  useEffect(() => {
    // In a real app, you would fetch historical data from your backend
    // For now, we'll create some sample data
    if (type && score) {
      const sampleData = {
        labels: ["Previous", "Current"],
        datasets: [
          {
            label: type === "gad7" ? "Anxiety Score" : "Depression Score",
            data: [Math.floor(Math.random() * 21), Number.parseInt(score)],
            backgroundColor: ["#94a3b8", "#7c3aed"],
            borderColor: ["#94a3b8", "#7c3aed"],
            borderWidth: 1,
          },
        ],
      }
      setChartData(sampleData)
    }
  }, [type, score])

  const getAssessmentName = () => {
    if (type === "gad7") return "GAD-7 (Anxiety)"
    if (type === "phq9") return "PHQ-9 (Depression)"
    return "Assessment"
  }

  const getRecommendations = () => {
    const scoreNum = score ? Number.parseInt(score) : 0

    if (scoreNum <= 4) {
      return [
        "Continue with your current self-care practices",
        "Maintain regular physical activity",
        "Practice mindfulness for 10 minutes daily",
        "Ensure you're getting adequate sleep",
      ]
    } else if (scoreNum <= 9) {
      return [
        "Consider increasing physical activity to 30 minutes daily",
        "Try guided meditation apps for stress reduction",
        "Maintain a regular sleep schedule",
        "Consider joining a support group",
      ]
    } else if (scoreNum <= 14) {
      return [
        "Consider speaking with a mental health professional",
        "Practice deep breathing exercises when feeling overwhelmed",
        "Establish a consistent daily routine",
        "Limit caffeine and alcohol consumption",
      ]
    } else {
      return [
        "We strongly recommend consulting with a healthcare provider",
        "Consider reaching out to a mental health crisis line if needed",
        "Ask for support from trusted friends or family members",
        "Focus on basic self-care: sleep, nutrition, and gentle movement",
      ]
    }
  }

  if (!type || !score || !interpretation) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Card>
          <CardHeader>
            <CardTitle>Results Not Found</CardTitle>
            <CardDescription>We couldn't find the assessment results you're looking for.</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Please complete an assessment to view your results.</p>
          </CardContent>
          <CardFooter>
            <Link href="/questionnaires">
              <Button>Go to Assessments</Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <Link href="/questionnaires">
          <Button variant="ghost" className="mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Questionnaires
          </Button>
        </Link>
        <h1 className="text-3xl font-bold mb-2">Your Assessment Results</h1>
        <p className="text-muted-foreground">
          {getAssessmentName()} completed on {new Date().toLocaleDateString()}
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Score Summary</CardTitle>
            <CardDescription>Your assessment score and interpretation</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-col items-center justify-center p-6 bg-muted rounded-lg">
              <div className="text-6xl font-bold text-primary mb-2">{score}</div>
              <div className="text-lg font-medium">{interpretation}</div>
            </div>

            <div className="space-y-4">
              <h3 className="font-medium">Score Ranges:</h3>
              {type === "gad7" ? (
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>0-4:</span>
                    <span>Minimal anxiety</span>
                  </div>
                  <div className="flex justify-between">
                    <span>5-9:</span>
                    <span>Mild anxiety</span>
                  </div>
                  <div className="flex justify-between">
                    <span>10-14:</span>
                    <span>Moderate anxiety</span>
                  </div>
                  <div className="flex justify-between">
                    <span>15-21:</span>
                    <span>Severe anxiety</span>
                  </div>
                </div>
              ) : (
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>0-4:</span>
                    <span>Minimal depression</span>
                  </div>
                  <div className="flex justify-between">
                    <span>5-9:</span>
                    <span>Mild depression</span>
                  </div>
                  <div className="flex justify-between">
                    <span>10-14:</span>
                    <span>Moderate depression</span>
                  </div>
                  <div className="flex justify-between">
                    <span>15-19:</span>
                    <span>Moderately severe depression</span>
                  </div>
                  <div className="flex justify-between">
                    <span>20-27:</span>
                    <span>Severe depression</span>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" className="gap-2">
              <Download className="h-4 w-4" /> Download
            </Button>
            <Button variant="outline" className="gap-2">
              <Share2 className="h-4 w-4" /> Share
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recommendations</CardTitle>
            <CardDescription>Based on your assessment results</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p>
                Based on your score of <strong>{score}</strong>, which indicates <strong>{interpretation}</strong>, here
                are some recommendations:
              </p>

              <ul className="space-y-2">
                {getRecommendations().map((recommendation, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                    </div>
                    <span>{recommendation}</span>
                  </li>
                ))}
              </ul>

              <div className="p-4 bg-muted rounded-lg mt-6">
                <p className="text-sm font-medium mb-2">Important Note:</p>
                <p className="text-sm">
                  These recommendations are general suggestions and not a substitute for professional advice. If you're
                  experiencing severe symptoms, please consult with a healthcare provider.
                </p>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Link href="/resources">
              <Button className="w-full">View Support Resources</Button>
            </Link>
          </CardFooter>
        </Card>
      </div>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5" /> Progress Tracking
          </CardTitle>
          <CardDescription>Track your wellbeing over time</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-64 flex items-center justify-center bg-muted/50 rounded-lg">
            {chartData ? (
              <div className="text-center p-6">
                <p className="text-lg font-medium mb-4">Your Progress</p>
                <div className="flex items-end justify-center gap-8 h-32">
                  {chartData.datasets[0].data.map((value: number, index: number) => (
                    <div key={index} className="flex flex-col items-center">
                      <div
                        className="w-16 bg-primary/80 rounded-t-md transition-all duration-500"
                        style={{
                          height: `${(value / 21) * 100}%`,
                          backgroundColor: chartData.datasets[0].backgroundColor[index],
                        }}
                      ></div>
                      <div className="mt-2 text-sm font-medium">{chartData.labels[index]}</div>
                      <div className="text-lg font-bold">{value}</div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <p>Loading chart data...</p>
            )}
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Complete regular assessments to track your progress over time. This can help you and your healthcare
            provider understand patterns and the effectiveness of interventions.
          </p>
        </CardContent>
        <CardFooter>
          <Link href="/dashboard">
            <Button variant="outline" className="w-full">
              View Full Dashboard
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}
