"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card"
import { Badge } from "@/app/components/ui/badge"
import { Button } from "@/app/components/ui/button"

// Types pour nos cours
type Course = {
  id: number
  title: string
  description: string
  level: string
  subject: string
}

// Données factices pour nos cours
const coursesData: Course[] = [
  {
    id: 1,
    title: "Mathématiques pour le CEPE",
    description: "Cours de base en mathématiques pour préparer le CEPE",
    level: "CEPE",
    subject: "Mathématiques",
  },
  {
    id: 2,
    title: "Français pour le BEPC",
    description: "Améliorer vos compétences en français pour le BEPC",
    level: "BEPC",
    subject: "Français",
  },
  {
    id: 3,
    title: "Physique-Chimie pour le BAC",
    description: "Cours avancé de physique-chimie pour les candidats au BAC",
    level: "BAC",
    subject: "Physique-Chimie",
  },
  {
    id: 4,
    title: "Histoire-Géographie pour le BEPC",
    description: "Préparation complète en histoire-géographie pour le BEPC",
    level: "BEPC",
    subject: "Histoire-Géographie",
  },
  {
    id: 5,
    title: "Anglais débutant",
    description: "Cours d'anglais pour les débutants, tous niveaux",
    level: "Tous",
    subject: "Langues",
  },
]

export default function CourseList() {
  const [courses] = useState<Course[]>(coursesData)

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
      {courses.map((course) => (
        <Card key={course.id} className="hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <CardTitle>{course.title}</CardTitle>
            <div className="flex gap-2 mt-2">
              <Badge className="bg-blue-100 text-blue-800">{course.level}</Badge>
              <Badge className="bg-green-100 text-green-800">{course.subject}</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-gray-600">{course.description}</p>
            <Button className="bg-primary hover:bg-primary-dark text-white">Voir le cours</Button>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

