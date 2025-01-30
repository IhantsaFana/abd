import Card from "../hooks/card";

export default function Counts() {
  return (
    <section className="py-16 bg-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card>
            <div className="text-center">
              <span className="text-4xl font-bold text-blue-500">1232</span>
              <p className="text-gray-600 mt-2">Students</p>
            </div>
          </Card>
          <Card>
            <div className="text-center">
              <span className="text-4xl font-bold text-blue-500">64</span>
              <p className="text-gray-600 mt-2">Courses</p>
            </div>
          </Card>
          <Card>
            <div className="text-center">
              <span className="text-4xl font-bold text-blue-500">42</span>
              <p className="text-gray-600 mt-2">Events</p>
            </div>
          </Card>
          <Card>
            <div className="text-center">
              <span className="text-4xl font-bold text-blue-500">24</span>
              <p className="text-gray-600 mt-2">Trainers</p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
