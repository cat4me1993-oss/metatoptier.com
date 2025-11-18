import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => {
  return (
    <div className="group relative p-8 rounded-2xl bg-dark-700/50 border border-gray-800 hover:border-neon-cyan/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,243,255,0.1)] backdrop-blur-sm">
      <div className="absolute inset-0 bg-gradient-to-b from-neon-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
      
      {icon && (
        <div className="mb-6 text-neon-cyan group-hover:text-white transition-colors duration-300">
          {icon}
        </div>
      )}
      
      <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-neon-cyan transition-colors">
        {title}
      </h3>
      <p className="text-gray-400 leading-relaxed group-hover:text-gray-200 transition-colors">
        {description}
      </p>
    </div>
  );
};