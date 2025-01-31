"use client";

import Card from "../hooks/card";
import { useState, useEffect } from "react";

export default function Counts() {
  const [count, setCount] = useState({
    students: 0,
    courses: 0,
    events: 0,
    trainers: 0,
  });

  useEffect(() => {
    const maxCountStudent = 150;
    const maxCountCourse = 50;
    const maxCountEvent = 10;
    const maxCountTrainer = 15;
    const timer = setInterval(() => {
      setCount((prevState) => ({
        students: Math.min(prevState.students + 1, maxCountStudent),
        courses: Math.min(prevState.courses + 1, maxCountCourse),
        events: Math.min(prevState.events + 1, maxCountEvent),
        trainers: Math.min(prevState.trainers + 1, maxCountTrainer),
      }));
    }, 50);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 bg-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card>
            <div className="text-center">
              <span className="text-4xl font-bold text-blue-500">
                {count.students}+
              </span>
              <p className="text-gray-600 mt-2">Etudiants</p>
            </div>
          </Card>
          <Card>
            <div className="text-center">
              <span className="text-4xl font-bold text-blue-500">
                {count.courses}+
              </span>
              <p className="text-gray-600 mt-2">Cours</p>
            </div>
          </Card>
          <Card>
            <div className="text-center">
              <span className="text-4xl font-bold text-blue-500">
                {count.events}
              </span>
              <p className="text-gray-600 mt-2">Evenements</p>
            </div>
          </Card>
          <Card>
            <div className="text-center">
              <span className="text-4xl font-bold text-blue-500">
                {count.trainers}
              </span>
              <p className="text-gray-600 mt-2">Formateurs</p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

