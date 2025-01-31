"use client"

import { useState } from "react"
import { Label } from "@/app/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/app/components/ui/radio-group"
import { Checkbox } from "@/app/components/ui/checkbox"

export default function CourseFilters() {
  const [level, setLevel] = useState("")
  const [subjects, setSubjects] = useState<string[]>([])

  const handleSubjectChange = (subject: string) => {
    setSubjects((prev) => (prev.includes(subject) ? prev.filter((s) => s !== subject) : [...prev, subject]))
  }

  return (
    <div className="space-y-8 p-4 rounded-lg shadow-md bg-gray-50">
      <div>
        <h2 className="text-xl font-bold mb-4">Niveau d&apos;étude</h2>
        <RadioGroup value={level} onValueChange={setLevel} className="space-y-2">
          {["CEPE", "BEPC", "BAC", "Tous"].map((level) => (
            <div key={level} className="flex items-center space-x-3">
              <RadioGroupItem value={level} id={level} />
              <Label htmlFor={level} className="text-sm">{level}</Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-4">Matières</h2>
        <div className="space-y-3">
          {["Mathématiques", "Français", "Physique-Chimie", "Histoire-Géographie", "Langues", "Informatiques"].map((subject) => (
            <div key={subject} className="flex items-center space-x-3">
              <Checkbox
                id={subject}
                checked={subjects.includes(subject)}
                onCheckedChange={() => handleSubjectChange(subject)}
              />
              <Label
                htmlFor={subject}
                className="text-sm font-medium"
              >
                {subject}
              </Label>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

