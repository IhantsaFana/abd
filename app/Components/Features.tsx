import Card from "../hooks/card";

export default function Features() {
  const features = [
    { icon: "eye", color: "#ffbb2c", title: "Lorem Ipsum" },
    { icon: "command", color: "#5578ff", title: "Dolor Sitema" },
    { icon: "book", color: "#e80368", title: "Sed perspiciatis" },
    { icon: "settings", color: "#e361ff", title: "Magni Dolores" },
    { icon: "refresh-cw", color: "#47aeff", title: "Nemo Enim" },
    { icon: "star", color: "#ffa76e", title: "Eiusmod Tempor" },
    { icon: "diamond", color: "#11dbcf", title: "Midela Teren" },
    { icon: "camera", color: "#4233ff", title: "Pira Neve" },
    { icon: "cpu", color: "#b2904f", title: "Dirada Pack" },
    { icon: "globe", color: "#b20969", title: "Moton Ideal" },
    { icon: "activity", color: "#ff5828", title: "Verdo Park" },
    { icon: "sun", color: "#29cc61", title: "Flavor Nivelanda" },
  ];

  return (
    <section className="py-16 bg-gray-100 text-gray-600">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} >
              <svg
                className="w-12 h-12 mx-auto mb-4"
                fill="none"
                stroke={feature.color}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                ></path>
              </svg>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
