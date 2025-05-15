import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { TreePine, Shield, Award, Timer, Check, Video, ArrowRight, Users, Wrench, Leaf, Target, Sun, Lightbulb, Clock, Heart, Star } from "lucide-react";
import { Input } from "@/components/ui/input";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1513836279014-a89f7a76ae86')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold text-white font-playfair max-w-3xl">
                Professional Tree Services for Your Property
              </h1>
              <p className="mt-6 text-xl text-gray-200 max-w-2xl">
                Expert tree felling, pruning, and maintenance services with a focus on safety and satisfaction.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="bg-forest-600 hover:bg-forest-700 text-white transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-forest-600/20 relative overflow-hidden group"
                >
                  <span className="relative z-10">Get Free Quote</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-forest-500 to-forest-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                </Button>
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="bg-white/90 hover:bg-white text-forest-700 transform hover:scale-105 transition-all duration-300 hover:shadow-lg relative overflow-hidden group border-2 border-white"
                >
                  <span className="relative z-10 group-hover:text-forest-700 transition-colors">Our Services</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white to-forest-50 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-forest-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 transition-transform hover:-translate-y-1">
              <Shield className="h-12 w-12 text-forest-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2 font-playfair">Licensed & Insured</h3>
              <p className="text-gray-600">Fully licensed and insured services for your peace of mind.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 transition-transform hover:-translate-y-1">
              <Award className="h-12 w-12 text-forest-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2 font-playfair">20+ Years Experience</h3>
              <p className="text-gray-600">Decades of experience in professional tree services.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 transition-transform hover:-translate-y-1">
              <Timer className="h-12 w-12 text-forest-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2 font-playfair">24/7 Emergency Service</h3>
              <p className="text-gray-600">Round-the-clock support for emergency tree services.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1472396961693-142e6e269027" 
                alt="About North Tree Felling" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold font-playfair text-gray-900">About North Tree Felling</h2>
              <p className="text-lg text-gray-600">
                Since 2003, North Tree Felling has been at the forefront of professional tree services, combining traditional expertise with modern techniques. Our journey began with a simple mission: to provide exceptional tree care while preserving the natural beauty of our environment.
              </p>
              <p className="text-lg text-gray-600">
                Today, we're proud to be the region's most trusted tree service provider, with a team of certified arborists and specialists who share our commitment to excellence.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start space-x-3">
                  <Check className="h-6 w-6 text-forest-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Expert Team</h4>
                    <p className="text-gray-600">Certified arborists and skilled professionals</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="h-6 w-6 text-forest-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Safety First</h4>
                    <p className="text-gray-600">Rigorous safety protocols and procedures</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="h-6 w-6 text-forest-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Modern Equipment</h4>
                    <p className="text-gray-600">State-of-the-art tools and technology</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="h-6 w-6 text-forest-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Customer Focus</h4>
                    <p className="text-gray-600">Dedicated to exceeding expectations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="py-24 bg-forest-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 space-y-6">
              <h2 className="text-4xl font-bold font-playfair text-gray-900">Our Vision</h2>
              <p className="text-lg text-gray-600">
                We envision a future where urban forests thrive in harmony with community development. Our goal is to lead the industry in sustainable tree care practices while providing unmatched service quality.
              </p>
              <div className="grid gap-6">
                <div className="flex items-start space-x-4">
                  <Target className="h-8 w-8 text-forest-600" />
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900">Environmental Leadership</h4>
                    <p className="text-gray-600">Setting industry standards in sustainable practices</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Sun className="h-8 w-8 text-forest-600" />
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900">Community Impact</h4>
                    <p className="text-gray-600">Creating greener, safer spaces for future generations</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Lightbulb className="h-8 w-8 text-forest-600" />
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900">Innovation Focus</h4>
                    <p className="text-gray-600">Embracing new technologies and methodologies</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative h-[500px] rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1426604966848-d7adac402bff" 
                alt="Our Vision" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-forest-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 space-y-6">
              <h2 className="text-4xl font-bold font-playfair text-gray-900">Why Choose Us</h2>
              <p className="text-lg text-gray-600">
                We combine expertise with dedication to deliver exceptional tree services that exceed expectations. Our commitment to quality and customer satisfaction makes us the preferred choice.
              </p>
              <div className="grid gap-6">
                <div className="flex items-start space-x-4">
                  <Users className="h-8 w-8 text-forest-600" />
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900">Professional Team</h4>
                    <p className="text-gray-600">Experienced arborists and tree care specialists</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Wrench className="h-8 w-8 text-forest-600" />
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900">Modern Equipment</h4>
                    <p className="text-gray-600">State-of-the-art tools and machinery</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Leaf className="h-8 w-8 text-forest-600" />
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900">Eco-Friendly</h4>
                    <p className="text-gray-600">Sustainable practices and environmental care</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative h-[500px] rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9" 
                alt="Why Choose Us" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Working Process Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-playfair text-gray-900 mb-4">Our Working Process</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We follow a systematic approach to ensure quality and safety in every project.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative h-[400px] rounded-lg overflow-hidden bg-forest-900">
              <img 
                src="https://images.unsplash.com/photo-1523712999610-f77fbcfc3843" 
                alt="Our Process" 
                className="absolute inset-0 w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <Video className="h-16 w-16 text-white" />
              </div>
            </div>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-forest-600 text-white flex items-center justify-center">
                  1
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900">Initial Consultation</h4>
                  <p className="text-gray-600">We assess your needs and provide expert recommendations.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-forest-600 text-white flex items-center justify-center">
                  2
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900">Planning</h4>
                  <p className="text-gray-600">Detailed project planning and safety assessment.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-forest-600 text-white flex items-center justify-center">
                  3
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900">Execution</h4>
                  <p className="text-gray-600">Professional service delivery with attention to detail.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>   

      {/* Promo Section */}
      <section className="py-16 bg-forest-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2 items-center">
              <div className="p-8 md:p-12 lg:p-16">
                <div className="bg-forest-100 text-forest-700 text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                  Limited Time Offer
                </div>
                <h3 className="text-2xl md:text-3xl font-bold font-playfair text-gray-900 mb-4">
                  Spring Special: 20% Off Tree Services
                </h3>
                <p className="text-gray-600 mb-6">
                  Book any tree service before May 31st and receive a 20% discount on your entire project. Perfect timing for spring maintenance!
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-forest-600" />
                    <span className="text-gray-700">Comprehensive tree assessment included</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-forest-600" />
                    <span className="text-gray-700">Free cleanup and debris removal</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-forest-600" />
                    <span className="text-gray-700">Priority scheduling for promo customers</span>
                  </li>
                </ul>
                <Button size="lg" className="bg-forest-600 hover:bg-forest-700 text-white transform hover:scale-102 transition-all duration-300 hover:shadow-lg">
                  Claim Offer Now <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="relative h-64 md:h-full min-h-[400px]">
                <img 
                  src="https://images.unsplash.com/photo-1472396961693-142e6e269027"
                  alt="Spring Tree Service Promotion"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523712999610-f77fbcfc3843')] bg-cover bg-center">
          <div className="absolute inset-0 bg-forest-900/90 backdrop-blur-sm" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-playfair mb-6">
            Ready to Transform Your Property?
          </h2>
          <p className="text-xl text-gray-200 mb-12 max-w-2xl mx-auto">
            Let our expert team help you create a safer, more beautiful outdoor space. With over 20 years of experience, we guarantee satisfaction in every project.
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
              <Clock className="w-12 h-12 text-white mb-4 mx-auto" />
              <h3 className="text-white font-semibold text-lg mb-2">Free Consultation</h3>
              <p className="text-gray-200">Expert advice tailored to your specific needs and property requirements.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
              <Star className="w-12 h-12 text-white mb-4 mx-auto" />
              <h3 className="text-white font-semibold text-lg mb-2">Quick Response</h3>
              <p className="text-gray-200">Same-day quotes and flexible scheduling to meet your timeline.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
              <Heart className="w-12 h-12 text-white mb-4 mx-auto" />
              <h3 className="text-white font-semibold text-lg mb-2">Satisfaction Guaranteed</h3>
              <p className="text-gray-200">We're not satisfied until you're completely happy with our work.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
