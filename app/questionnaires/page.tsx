import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Brain, Heart } from "lucide-react"

export default function QuestionnairesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Mental Health Questionnaires</h1>
        <p className="text-muted-foreground">
          Complete these clinically validated assessments to better understand your mental wellbeing.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <Brain className="h-8 w-8 text-brand-teal mb-2" />
            <CardTitle>GAD-7 Assessment</CardTitle>
            <CardDescription>Generalized Anxiety Disorder Assessment</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              The GAD-7 is a clinical screening tool for generalized anxiety disorder. It consists of 7 questions that
              measure the severity of anxiety symptoms over the past two weeks.
            </p>
            <div className="mt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span>Completion time:</span>
                <span>2-3 minutes</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Questions:</span>
                <span>7 items</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Link href="/questionnaires/gad7">
              <Button className="w-full gap-2 bg-brand-dark hover:bg-brand-dark/90">
                Start Assessment <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <Heart className="h-8 w-8 text-brand-teal mb-2" />
            <CardTitle>PHQ-9 Assessment</CardTitle>
            <CardDescription>Patient Health Questionnaire for Depression</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              The PHQ-9 is a depression screening tool that helps assess the severity of depression symptoms. It
              consists of 9 questions based on the diagnostic criteria for major depressive disorder.
            </p>
            <div className="mt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span>Completion time:</span>
                <span>3-5 minutes</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Questions:</span>
                <span>9 items</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Link href="/questionnaires/phq9">
              <Button className="w-full gap-2 bg-brand-dark hover:bg-brand-dark/90">
                Start Assessment <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>

      <div className="mt-12 p-6 bg-muted rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Important Information</h2>
        <div className="space-y-4 text-sm">
          <p>
            These questionnaires are designed to help you understand your mental wellbeing and are not meant to replace
            professional medical advice.
          </p>
          <p>
            If you're experiencing severe symptoms or having thoughts of harming yourself, please contact emergency
            services immediately or call a mental health helpline.
          </p>
          <div className="mt-6 p-4 bg-card rounded-md border">
            <h3 className="font-medium mb-2">UK Mental Health Support Resources:</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Samaritans: 116 123 (24/7 helpline)</li>
              <li>Mind: 0300 123 3393 (Mon-Fri, 9am-6pm)</li>
              <li>NHS: 111 for non-emergency medical advice</li>
              <li>Emergency Services: 999</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
