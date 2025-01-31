import { IconType } from "react-icons";
import { FaEye, FaKeyboard, FaBook, FaCogs, FaSync, FaStar, FaCamera, FaMicrochip, FaGlobe, FaSun } from "react-icons/fa";
import Card from "../hooks/card";

type Feature = {
  icon: IconType;
  color: string;
  title: string;
};

const features: Feature[] = [
  { icon: FaEye, color: "#ffbb2c", title: "Vue optimisée" },
  { icon: FaKeyboard, color: "#5578ff", title: "Commande intuitive" },
  { icon: FaBook, color: "#e80368", title: "Apprentissage interactif" },
  { icon: FaCogs, color: "#e361ff", title: "Paramètres personnalisables" },
  { icon: FaSync, color: "#47aeff", title: "Mise à jour automatique" },
  { icon: FaStar, color: "#ffa76e", title: "Qualité garantie" },
  // { icon: FaDiamond, color: "#11dbcf", title: "Plateforme premium" },
  { icon: FaCamera, color: "#4233ff", title: "Vision claire" },
  { icon: FaMicrochip, color: "#b2904f", title: "Performance optimale" },
  { icon: FaGlobe, color: "#b20969", title: "Accessibilité mondiale" },
  // { icon: FaActivity, color: "#ff5828", title: "Activités ludiques" },
  { icon: FaSun, color: "#29cc61", title: "Énergie renouvelable" },
];

export default function Features() {
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
              <feature.icon className="w-16 h-16 mx-auto mb-4" color={feature.color} />
              <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

