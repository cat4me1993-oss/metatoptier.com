import React from 'react';

interface SectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  darker?: boolean;
}

export const Section: React.FC<SectionProps> = ({ 
  id, 
  title, 
  subtitle, 
  children, 
  className = '',
  darker = false
}) => {
  return (
    <section 
      id={id} 
      className={`py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden ${darker ? 'bg-dark-800' : 'bg-transparent'} ${className}`}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {(title || subtitle) && (
          <div className="text-center mb-16">
            {title && (
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light">
                {subtitle}
              </p>
            )}
            <div className="mt-6 h-1 w-24 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto rounded-full" />
          </div>
        )}
        {children}
      </div>
    </section>
  );
};