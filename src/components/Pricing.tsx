import React, { useState } from 'react';
import { Check, X } from 'lucide-react';

interface PlanFeature {
  name: string;
  included: boolean;
}

interface PricingPlan {
  name: string;
  price: number;
  description: string;
  buttonText: string;
  isPopular?: boolean;
  features: PlanFeature[];
}

const Pricing: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  
  const plans: PricingPlan[] = [
    {
      name: "Starter",
      price: isAnnual ? 12 : 15,
      description: "Perfect for individuals and small projects",
      buttonText: "Start with Starter",
      features: [
        { name: "Up to 5 team members", included: true },
        { name: "5 projects", included: true },
        { name: "Basic analytics", included: true },
        { name: "24-hour support response time", included: true },
        { name: "Standard automations", included: false },
        { name: "Advanced integrations", included: false },
        { name: "Custom reporting", included: false },
        { name: "API access", included: false },
      ]
    },
    {
      name: "Professional",
      price: isAnnual ? 29 : 39,
      description: "Ideal for growing teams and businesses",
      buttonText: "Start with Professional",
      isPopular: true,
      features: [
        { name: "Up to 20 team members", included: true },
        { name: "Unlimited projects", included: true },
        { name: "Advanced analytics", included: true },
        { name: "4-hour support response time", included: true },
        { name: "Standard automations", included: true },
        { name: "Advanced integrations", included: true },
        { name: "Custom reporting", included: false },
        { name: "API access", included: false },
      ]
    },
    {
      name: "Enterprise",
      price: isAnnual ? 79 : 99,
      description: "For large teams with advanced needs",
      buttonText: "Start with Enterprise",
      features: [
        { name: "Unlimited team members", included: true },
        { name: "Unlimited projects", included: true },
        { name: "Advanced analytics", included: true },
        { name: "1-hour support response time", included: true },
        { name: "Standard automations", included: true },
        { name: "Advanced integrations", included: true },
        { name: "Custom reporting", included: true },
        { name: "API access", included: true },
      ]
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Simple, transparent pricing</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Choose the plan that's right for your team. All plans include a 14-day free trial.
          </p>
          
          <div className="flex items-center justify-center mb-8">
            <div className="bg-gray-100 dark:bg-gray-800 p-1 rounded-full inline-flex">
              <button
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  isAnnual 
                    ? 'bg-white dark:bg-gray-700 shadow-sm text-blue-600 dark:text-blue-400' 
                    : 'text-gray-600 dark:text-gray-400'
                }`}
                onClick={() => setIsAnnual(true)}
              >
                Annual (Save 20%)
              </button>
              <button
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  !isAnnual 
                    ? 'bg-white dark:bg-gray-700 shadow-sm text-blue-600 dark:text-blue-400' 
                    : 'text-gray-600 dark:text-gray-400'
                }`}
                onClick={() => setIsAnnual(false)}
              >
                Monthly
              </button>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`bg-white dark:bg-gray-800 rounded-2xl ${
                plan.isPopular 
                  ? 'ring-2 ring-blue-600 dark:ring-blue-500 shadow-xl' 
                  : 'border border-gray-200 dark:border-gray-700 shadow-sm'
              } p-8 relative`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="bg-blue-600 text-white text-xs font-semibold px-4 py-1 rounded-full">
                    Most Popular
                  </div>
                </div>
              )}
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{plan.name}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">{plan.description}</p>
              
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900 dark:text-white">${plan.price}</span>
                <span className="text-gray-600 dark:text-gray-300 ml-2">/ month</span>
                {isAnnual && <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Billed annually</p>}
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    {feature.included ? (
                      <Check size={20} className="text-green-500 dark:text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                    ) : (
                      <X size={20} className="text-gray-400 mr-3 flex-shrink-0 mt-0.5" />
                    )}
                    <span className={feature.included ? 'text-gray-700 dark:text-gray-300' : 'text-gray-500 dark:text-gray-400'}>
                      {feature.name}
                    </span>
                  </li>
                ))}
              </ul>
              
              <button 
                className={`w-full py-3 rounded-lg font-medium transition-colors ${
                  plan.isPopular 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;