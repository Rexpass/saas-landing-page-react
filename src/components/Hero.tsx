import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onGetStarted: () => void;
}

const Hero: React.FC<HeroProps> = ({ onGetStarted }) => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="max-w-lg">
            <div className="inline-block px-4 py-2 bg-blue-50 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400 font-medium text-sm mb-6 animate-fade-in">
              Introducing NexusFlow
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6 animate-slide-up">
              Streamline your workflow like never before
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed animate-slide-up" style={{ animationDelay: '0.1s' }}>
              The all-in-one platform that helps teams collaborate, manage projects, and deliver results with unprecedented efficiency.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <button 
                onClick={onGetStarted}
                className="px-8 py-4 bg-blue-600 text-white rounded-full flex items-center justify-center space-x-2 hover:bg-blue-700 transition-colors font-medium"
              >
                <span>Start free trial</span>
                <ArrowRight size={16} />
              </button>
              <a 
                href="#" 
                className="px-8 py-4 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-full flex items-center justify-center hover:border-blue-600 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
              >
                See how it works
              </a>
            </div>
            
            <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-3 flex items-center">
                <CheckCircle2 size={16} className="text-green-500 dark:text-green-400 mr-2" />
                No credit card required
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-3 flex items-center">
                <CheckCircle2 size={16} className="text-green-500 dark:text-green-400 mr-2" />
                14-day free trial
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                <CheckCircle2 size={16} className="text-green-500 dark:text-green-400 mr-2" />
                Cancel anytime
              </p>
            </div>
          </div>
          
          <div className="relative animate-float">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 dark:from-blue-400/10 dark:to-purple-400/10 rounded-xl transform rotate-3 scale-105"></div>
            <div className="relative bg-white dark:bg-gray-800 p-4 rounded-xl shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-700">
              <img
                src="https://images.pexels.com/photos/8439094/pexels-photo-8439094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="NexusFlow Dashboard"
                className="rounded-lg shadow-sm w-full"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-100 dark:bg-blue-900/30 rounded-full opacity-70"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-purple-100 dark:bg-purple-900/30 rounded-full opacity-70"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;