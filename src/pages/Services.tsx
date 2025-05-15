
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ChevronRight, Leaf, TreePine, Scissors, Ruler, Shield } from "lucide-react";

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-forest-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-playfair text-gray-900 mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional tree care services tailored to your needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: TreePine,
                title: "Tree Removal",
                description: "Safe and efficient removal of trees, including stump grinding and cleanup.",
                features: ["Emergency service available", "Complete site cleanup", "Stump removal options"]
              },
              {
                icon: Scissors,
                title: "Tree Pruning",
                description: "Expert pruning to promote healthy growth and maintain tree aesthetics.",
                features: ["Crown reduction", "Dead wood removal", "Shape maintenance"]
              },
              {
                icon: Shield,
                title: "Tree Health Care",
                description: "Comprehensive care to ensure the longevity of your trees.",
                features: ["Disease treatment", "Pest control", "Fertilization"]
              },
              {
                icon: Ruler,
                title: "Tree Assessment",
                description: "Professional evaluation of tree health and risk factors.",
                features: ["Risk assessment", "Health evaluation", "Growth analysis"]
              },
              {
                icon: Leaf,
                title: "Emergency Services",
                description: "24/7 emergency response for storm damage and hazardous situations.",
                features: ["24/7 availability", "Rapid response", "Storm damage cleanup"]
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <service.icon className="h-12 w-12 text-forest-600 mb-6" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <ChevronRight className="h-4 w-4 text-forest-600 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
