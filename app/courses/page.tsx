import CourseList from "../components/CourseList"
import CourseFilters from "../components/CourseFilters"

export default function Courses() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-600">
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Nos Cours</h1>
        <div className="flex flex-col md:flex-row gap-8 bg-gray-100 p-4 rounded-lg shadow-md">
          <aside className="w-full md:w-1/4 bg-white p-4 rounded-lg border border-gray-300 shadow-sm">
            <CourseFilters />
          </aside>
          <section className="w-full md:w-3/4 bg-white p-4 rounded-lg border border-gray-300 shadow-sm">
            <CourseList />
          </section>
        </div>
      </main>
    </div>
  )
}

