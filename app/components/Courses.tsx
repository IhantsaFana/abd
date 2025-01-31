import Image from "next/image"

export default function Courses() {
  const courses = [
    {
      image: "/img/course-1.jpg?height=300&width=400",
      category: "Web Development",
      price: "$169",
      title: "Website Design",
      description:
        "Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.",
      trainer: {
        name: "Antonio",
        image: "/img/trainers/trainer-1.jpg?height=100&width=100",
      },
      students: 50,
      likes: 65,
    },
    {
      image: "/img/course-2.jpg?height=300&width=400",
      category: "Marketing",
      price: "$250",
      title: "Search Engine Optimization",
      description:
        "Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.",
      trainer: {
        name: "Lana",
        image: "/img/trainers/trainer-2.jpg?height=100&width=100",
      },
      students: 35,
      likes: 42,
    },
    {
      image: "/img/course-3.jpg?height=300&width=400",
      category: "Content",
      price: "$180",
      title: "Copywriting",
      description:
        "Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.",
      trainer: {
        name: "Brandon",
        image: "/img/trainers/trainer-3.jpg?height=100&width=100",
      },
      students: 20,
      likes: 85,
    },
  ]

  return (
    <section className="py-16 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Courses</h2>
        <p className="text-xl text-center text-gray-600 mb-12">Popular Courses</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src={course.image || "/placeholder.svg"}
                alt={course.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                    {course.category}
                  </span>
                  <span className="text-gray-600 font-bold">{course.price}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Image
                      src={course.trainer.image || "/placeholder.svg"}
                      alt={course.trainer.name}
                      width={40}
                      height={40}
                      className="rounded-full mr-2"
                    />
                    <span className="text-sm text-gray-600">{course.trainer.name}</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center text-sm text-gray-600">
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                        ></path>
                      </svg>
                      {course.students}
                    </span>
                    <span className="flex items-center text-sm text-gray-600">
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        ></path>
                      </svg>
                      {course.likes}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

