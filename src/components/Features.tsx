import React from 'react';
import { BarChart3, Zap, Users, Shield, ArrowUpRight, Clock, Layers, Lightbulb } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow group">
      <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
      <a href="#" className="mt-6 inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
        Learn more <ArrowUpRight size={16} className="ml-1" />
      </a>
    </div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      icon: <BarChart3 size={24} />,
      title: "Advanced Analytics",
      description: "Gain valuable insights with real-time analytics and customizable dashboards to track your team's performance."
    },
    {
      icon: <Zap size={24} />,
      title: "Automation Tools",
      description: "Automate repetitive tasks and workflows to save time and reduce errors in your process."
    },
    {
      icon: <Users size={24} />,
      title: "Team Collaboration",
      description: "Seamless collaboration features that bring your team together, no matter where they're located."
    },
    {
      icon: <Shield size={24} />,
      title: "Enterprise Security",
      description: "Bank-level security with encryption, SSO, and compliance certifications to keep your data safe."
    },
    {
      icon: <Clock size={24} />,
      title: "Time Tracking",
      description: "Accurately track time spent on projects and tasks to improve productivity and billing."
    },
    {
      icon: <Layers size={24} />,
      title: "Integrations",
      description: "Connect with your favorite tools and services with our extensive integration library."
    },
    {
      icon: <Lightbulb size={24} />,
      title: "AI Assistance",
      description: "Leverage artificial intelligence to enhance productivity and make smarter decisions."
    },
    {
      icon: <Clock size={24} className="rotate-45" />,
      title: "24/7 Support",
      description: "Our dedicated support team is always available to help you succeed with NexusFlow."
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Everything you need to succeed</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            NexusFlow combines powerful features in one intuitive platform, helping teams of all sizes achieve more.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;