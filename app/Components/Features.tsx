import Card from "../hooks/card";

export default function Features() {
  const features = [
    { icon: "eye", color: "#ffbb2c", title: "Vue optimisée" },
    { icon: "command", color: "#5578ff", title: "Commande intuitive" },
    { icon: "book", color: "#e80368", title: "Apprentissage interactif" },
    { icon: "settings", color: "#e361ff", title: "Paramètres personnalisables" },
    { icon: "refresh-cw", color: "#47aeff", title: "Mise à jour automatique" },
    { icon: "star", color: "#ffa76e", title: "Qualité garantie" },
    { icon: "diamond", color: "#11dbcf", title: "Plateforme premium" },
    { icon: "camera", color: "#4233ff", title: "Vision claire" },
    { icon: "cpu", color: "#b2904f", title: "Performance optimale" },
    { icon: "globe", color: "#b20969", title: "Accessibilité mondiale" },
    { icon: "activity", color: "#ff5828", title: "Activités ludiques" },
    { icon: "sun", color: "#29cc61", title: "Énergie renouvelable" },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-indigo-500 to-blue-600 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Fonctionnalités clés</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="transform transition duration-300 hover:scale-105 hover:shadow-lg"
            >
              <svg
                className="w-16 h-16 mx-auto mb-4"
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
              <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
