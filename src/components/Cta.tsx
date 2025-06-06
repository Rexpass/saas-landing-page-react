import React from 'react';
import { ArrowRight } from 'lucide-react';

const Cta: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl overflow-hidden">
          <div className="md:flex items-center">
            <div className="p-12 md:p-16 md:w-3/5">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                Ready to transform your workflow?
              </h2>
              <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                Join thousands of teams who have already simplified their work with NexusFlow. Try it free for 14 days with no credit card required.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a 
                  href="#" 
                  className="px-8 py-4 bg-white text-blue-600 rounded-full flex items-center justify-center space-x-2 hover:bg-blue-50 transition-colors font-medium"
                >
                  <span>Start free trial</span>
                  <ArrowRight size={16} />
                </a>
                <a 
                  href="#" 
                  className="px-8 py-4 border border-white text-white rounded-full flex items-center justify-center hover:bg-white/10 transition-colors font-medium"
                >
                  Request demo
                </a>
              </div>
            </div>
            <div className="hidden md:block md:w-2/5">
              <img 
                src="https://images.pexels.com/photos/3183165/pexels-photo-3183165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Happy team using NexusFlow" 
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;