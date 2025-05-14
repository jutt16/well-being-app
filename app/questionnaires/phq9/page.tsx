"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { ArrowLeft, ArrowRight, Heart } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

// PHQ-9 questions
const questions = [
  {
    id: 1,
    text: "Little interest or pleasure in doing things",
  },
  {
    id: 2,
    text: "Feeling down, depressed, or hopeless",
  },
  {
    id: 3,
    text: "Trouble falling or staying asleep, or sleeping too much",
  },
  {
    id: 4,
    text: "Feeling tired or having little energy",
  },
  {
    id: 5,
    text: "Poor appetite or overeating",
  },
  {
    id: 6,
    text: "Feeling bad about yourself — or that you are a failure or have let yourself or your family down",
  },
  {
    id: 7,
    text: "Trouble concentrating on things, such as reading the newspaper or watching television",
  },
  {
    id: 8,
    text: "Moving or speaking so slowly that other people could have noticed? Or the opposite — being so fidgety or restless that you have been moving around a lot more than usual",
  },
  {
    id: 9,
    text: "Thoughts that you would be better off dead or of hurting yourself in some way",
  },
]

// Answer options
const options = [
  { value: "0", label: "Not at all", points: 0 },
  { value: "1", label: "Several days", points: 1 },
  { value: "2", label: "More than half the days", points: 2 },
  { value: "3", label: "Nearly every day", points: 3 },
]

// Follow-up question
const followUpQuestion = {
  id: "followup",
  text: "If you checked off any problems, how difficult have these problems made it for you to do your work, take care of things at home, or get along with other people?",
  options: [
    { value: "not_difficult", label: "Not difficult at all" },
    { value: "somewhat_difficult", label: "Somewhat difficult" },
    { value: "very_difficult", label: "Very difficult" },
    { value: "extremely_difficult", label: "Extremely difficult" },
  ],
}

export default function PHQ9Page() {
  const router = useRouter()
  const { toast } = useToast()
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [followUpAnswer, setFollowUpAnswer] = useState<string>("")
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleAnswerChange = (questionId: number, value: string) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: value,
    }))
  }

  const handleFollowUpChange = (value: string) => {
    setFollowUpAnswer(value)
  }

  const calculateScore = () => {
    return Object.entries(answers).reduce((total, [_, value]) => {
      return total + Number.parseInt(value)
    }, 0)
  }

  const getScoreInterpretation = (score: number) => {
    if (score >= 0 && score <= 4) return "Minimal depression"
    if (score >= 5 && score <= 9) return "Mild depression"
    if (score >= 10 && score <= 14) return "Moderate depression"
    if (score >= 15 && score <= 19) return "Moderately severe depression"
    return "Severe depression"
  }

  const handleNext = () => {
    if (currentStep < questions.length) {
      setCurrentStep(currentStep + 1)
    } else {
      setCurrentStep(questions.length + 1) // Move to follow-up question
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)

    try {
      // Here you would normally send the data to your Laravel backend
      // For now, we'll simulate a successful submission

      const score = calculateScore()
      const interpretation = getScoreInterpretation(score)

      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Show success message
      toast({
        title: "Assessment Completed",
        description: "Your PHQ-9 assessment has been saved successfully.",
      })

      // Redirect to results page
      router.push(
        `/questionnaires/results?type=phq9&score=${score}&interpretation=${encodeURIComponent(interpretation)}`,
      )
    } catch (error) {
      toast({
        title: "Submission Error",
        description: "There was a problem submitting your assessment. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const currentQuestion = currentStep <= questions.length ? questions[currentStep - 1] : null

  const isFollowUpStep = currentStep === questions.length + 1
  const isLastStep = currentStep === questions.length + 1
  const canProceed =
    currentStep <= questions.length ? answers[currentQuestion?.id || 0] !== undefined : followUpAnswer !== ""

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <div className="mb-8">
        <Button variant="ghost" onClick={() => router.push("/questionnaires")} className="mb-4">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Questionnaires
        </Button>
        <h1 className="text-3xl font-bold flex items-center gap-2 mb-2">
          <Heart className="h-6 w-6" /> PHQ-9 Assessment
        </h1>
        <p className="text-muted-foreground">
          Over the last 2 weeks, how often have you been bothered by the following problems?
        </p>
      </div>

      <div className="mb-4 w-full bg-muted rounded-full h-2.5">
        <div
          className="bg-primary h-2.5 rounded-full transition-all duration-300"
          style={{ width: `${(currentStep / (questions.length + 1)) * 100}%` }}
        ></div>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>{isFollowUpStep ? "Final Question" : `Question ${currentStep} of ${questions.length}`}</CardTitle>
          <CardDescription>
            {isFollowUpStep
              ? "Please answer this follow-up question"
              : "Select the option that best describes your experience"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {isFollowUpStep ? (
            <div className="space-y-6">
              <p className="font-medium">{followUpQuestion.text}</p>
              <RadioGroup value={followUpAnswer} onValueChange={handleFollowUpChange} className="space-y-3">
                {followUpQuestion.options.map((option) => (
                  <div key={option.value} className="flex items-center space-x-2 rounded-md border p-3">
                    <RadioGroupItem value={option.value} id={option.value} />
                    <Label htmlFor={option.value} className="flex-1 cursor-pointer">
                      {option.label}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          ) : currentQuestion ? (
            <div className="space-y-6">
              <p className="font-medium">{currentQuestion.text}</p>
              <RadioGroup
                value={answers[currentQuestion.id] || ""}
                onValueChange={(value) => handleAnswerChange(currentQuestion.id, value)}
                className="space-y-3"
              >
                {options.map((option) => (
                  <div key={option.value} className="flex items-center space-x-2 rounded-md border p-3">
                    <RadioGroupItem value={option.value} id={`q${currentQuestion.id}-${option.value}`} />
                    <Label htmlFor={`q${currentQuestion.id}-${option.value}`} className="flex-1 cursor-pointer">
                      {option.label}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          ) : null}
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentStep === 1}
            className="border-brand-dark text-brand-dark hover:bg-brand-dark/10"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Previous
          </Button>

          {isLastStep ? (
            <Button
              onClick={handleSubmit}
              disabled={!canProceed || isSubmitting}
              className="bg-brand-dark hover:bg-brand-dark/90"
            >
              {isSubmitting ? "Submitting..." : "Submit Assessment"}
            </Button>
          ) : (
            <Button onClick={handleNext} disabled={!canProceed} className="bg-brand-dark hover:bg-brand-dark/90">
              Next <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          )}
        </CardFooter>
      </Card>

      <div className="text-sm text-muted-foreground">
        <p>
          Note: Your responses are confidential and will be used to provide you with personalized insights. This
          assessment is not a diagnostic tool and does not replace professional medical advice.
        </p>
      </div>
    </div>
  )
}
