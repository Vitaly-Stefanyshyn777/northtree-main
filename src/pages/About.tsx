
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Award, Users, History, Check } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-forest-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-playfair text-gray-900 mb-6">
              About Us
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Two decades of excellence in professional tree services
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1472396961693-142e6e269027" 
                alt="Our Team at Work" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold font-playfair text-gray-900">Our Story</h2>
              <p className="text-gray-600">
                Founded in 2003, North Tree Felling has grown from a small local business to one of the region's most trusted tree service providers. Our journey has been built on a foundation of expertise, dedication, and a commitment to excellence.
              </p>
              <div className="grid gap-4">
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-forest-600" />
                  <span className="text-gray-700">Over 20 years of industry experience</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-forest-600" />
                  <span className="text-gray-700">Fully licensed and insured</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-forest-600" />
                  <span className="text-gray-700">Certified arborists on staff</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="text-center">
              <Award className="h-12 w-12 text-forest-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Excellence</h3>
              <p className="text-gray-600">Committed to delivering the highest quality tree services.</p>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 text-forest-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Team</h3>
              <p className="text-gray-600">Skilled professionals with extensive industry experience.</p>
            </div>
            <div className="text-center">
              <History className="h-12 w-12 text-forest-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Long History</h3>
              <p className="text-gray-600">Two decades of successful tree care services.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
