import React from 'react';
import { Star } from 'lucide-react';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  image: string;
  stars: number;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      quote: "NexusFlow has completely transformed the way our team collaborates. What used to take days now takes hours, and the automation features have saved us countless hours of manual work.",
      author: "Sarah Johnson",
      role: "Product Manager",
      company: "TechCorp",
      image: "https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&w=600",
      stars: 5
    },
    {
      quote: "As a fast-growing startup, we needed a solution that could scale with us. NexusFlow has been the perfect fit, providing enterprise-level features with a user-friendly interface.",
      author: "Alex Chen",
      role: "CEO",
      company: "Innovate Labs",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600",
      stars: 5
    },
    {
      quote: "The analytics and reporting capabilities in NexusFlow have given us insights we never had before. We've been able to identify bottlenecks and optimize our processes significantly.",
      author: "Michael Rodriguez",
      role: "Operations Director",
      company: "Global Solutions",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
      stars: 4
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Loved by teams worldwide</h2>
          <p className="text-xl text-gray-600">
            Join thousands of satisfied customers who have transformed their workflow with NexusFlow.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={18} 
                    className={i < testimonial.stars ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
                  />
                ))}
              </div>
              
              <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author} 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.author}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 py-4 px-6 bg-white rounded-full shadow-sm">
            <img src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Company logo" className="h-8" />
            <img src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Company logo" className="h-8" />
            <img src="https://images.pexels.com/photos/3182826/pexels-photo-3182826.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Company logo" className="h-8" />
            <img src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Company logo" className="h-8" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;