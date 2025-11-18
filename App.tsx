import React from 'react';
import { SectionId } from './types';
import { BUY_LINK, CONTACT_EMAIL } from './constants';
import { Button } from './components/Button';
import { Section } from './components/Section';
import { FeatureCard } from './components/FeatureCard';
import { AiAssistant } from './components/AiAssistant';
import { Logo } from './components/Logo';

// Icons using SVG for better performance than heavy icon libraries
const IconGlobe = () => <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-9 3-9s-1.343-9-3-9m0 18c-1.657 0-3-9-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>;
const IconBadge = () => <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>;
const IconCube = () => <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>;
const IconChip = () => <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg>;
const IconTrend = () => <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>;
const IconLock = () => <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>;

function App() {
  return (
    <div className="min-h-screen bg-dark-900 text-white font-sans selection:bg-neon-cyan selection:text-black">
      
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-dark-900/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0 flex items-center gap-3">
              <Logo className="h-10 w-10" />
              <span className="font-display font-bold text-xl tracking-tight hidden sm:block">
                <span className="text-white">Meta</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple">TopTier</span>
              </span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href={`#${SectionId.WHY}`} className="hover:text-neon-cyan transition-colors px-3 py-2 text-sm font-medium">Why Us?</a>
                <a href={`#${SectionId.USE_CASES}`} className="hover:text-neon-cyan transition-colors px-3 py-2 text-sm font-medium">Use Cases</a>
                <a href={`#${SectionId.INVEST}`} className="hover:text-neon-cyan transition-colors px-3 py-2 text-sm font-medium">Invest</a>
                <Button href={BUY_LINK} variant="primary" className="px-6 py-2 text-sm">Buy Now</Button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-dark-900">
          <div className="absolute inset-0 grid-bg opacity-30"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-purple/20 rounded-full blur-[128px] animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-cyan/20 rounded-full blur-[128px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-neon-cyan/30 bg-neon-cyan/10 backdrop-blur-sm">
            <span className="text-neon-cyan text-sm font-bold tracking-widest uppercase">Premium Domain Available</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-extrabold tracking-tight mb-8 leading-tight">
            <span className="block text-white">Your Gateway to</span>
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-neon-cyan via-white to-neon-purple animate-text">
              The Future of Web3
            </span>
          </h1>
          
          <p className="mt-4 max-w-2xl mx-auto text-xl md:text-2xl text-gray-400 font-light leading-relaxed mb-12">
            Welcome to <span className="text-white font-semibold">MetaTopTier.com</span> — an iconic domain designed to represent the cutting edge of technology in the Blockchain and Metaverse space.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <Button href={BUY_LINK} variant="primary" className="w-full sm:w-auto text-lg min-w-[200px]">
              Buy Now
            </Button>
            <a href={`#${SectionId.AI_DEMO}`} className="text-gray-400 hover:text-white flex items-center gap-2 transition-colors group">
              <span className="border-b border-gray-600 group-hover:border-white pb-0.5">Ask AI about this domain</span>
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
          </div>
        </div>
      </div>

      {/* Subsection 1: Why MetaTopTier? */}
      <Section id={SectionId.WHY} title="Why MetaTopTier.com?" subtitle="The perfect foundation for your next unicorn venture.">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FeatureCard 
            title="Instant Brand Recognition"
            description="The name 'Meta' connects directly to futuristic technologies, while 'TopTier' signals your company as an industry leader and innovator."
            icon={<IconBadge />}
          />
          <FeatureCard 
            title="Perfect for Web3 & Blockchain"
            description="If you're in the DeFi, NFT, or Smart Contract space, this domain aligns perfectly with your mission to lead the decentralized world."
            icon={<IconGlobe />}
          />
          <FeatureCard 
            title="Metaverse Ready"
            description="The definitive fit for any Metaverse platform, VR/AR project, or virtual real estate agency aiming to provide a premium experience."
            icon={<IconCube />}
          />
          <FeatureCard 
            title="Meta-Technologies"
            description="Represent your cutting-edge AI, Big Data, or next-gen Meta-tech company with an unforgettable, authoritative domain name."
            icon={<IconChip />}
          />
        </div>
      </Section>

      {/* Gemini AI Demo Section */}
      <Section id={SectionId.AI_DEMO} title="Future-Proof Your Brand" subtitle="Interact with our AI to understand the potential value of this asset." darker>
        <div className="text-center mb-8">
          <p className="text-gray-300">
            Not sure if Web3 is the right direction? Ask our Gemini-powered assistant why <span className="text-neon-purple font-bold">MetaTopTier.com</span> fits your strategy.
          </p>
        </div>
        <AiAssistant />
      </Section>

      {/* Subsection 2: Use Cases */}
      <Section id={SectionId.USE_CASES} title="Ideal Use Cases" subtitle="Versatility meets authority across the digital frontier.">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { title: "Web3 Projects", desc: "Build a decentralized platform that exudes innovation." },
            { title: "Metaverse Platforms", desc: "Virtual real estate and immersive VR experiences." },
            { title: "NFT Startups", desc: "Launch marketplaces with a name that commands respect." },
            { title: "Tech Innovators", desc: "AI, Big Data, and next-gen technology development." }
          ].map((item, idx) => (
            <div key={idx} className="bg-dark-900/50 p-6 rounded-xl border border-white/5 hover:border-neon-cyan/30 transition-all duration-300">
              <div className="h-12 w-12 bg-gradient-to-br from-neon-cyan to-neon-blue rounded-lg mb-4 flex items-center justify-center text-white font-bold text-xl">
                {idx + 1}
              </div>
              <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Subsection 3: Why Invest? */}
      <Section id={SectionId.INVEST} title="Why Invest Now?" darker>
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          <div className="flex-1 space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 p-3 bg-neon-purple/10 rounded-lg text-neon-purple">
                <IconTrend />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Highly Memorable</h3>
                <p className="text-gray-400 mt-2">Short, powerful, and brandable. Ensures your business stands out in a crowded digital market.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 p-3 bg-neon-cyan/10 rounded-lg text-neon-cyan">
                <IconBadge />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Premium Authority</h3>
                <p className="text-gray-400 mt-2">Being "Top Tier" requires a strong presence. This domain projects leadership instantly.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 p-3 bg-white/10 rounded-lg text-white">
                <IconLock />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Investment in Growth</h3>
                <p className="text-gray-400 mt-2">As Web3 evolves, owning a category-defining domain is an appreciating asset for your company.</p>
              </div>
            </div>
          </div>
          
          {/* CTA Card */}
          <div className="flex-1 w-full max-w-md bg-gradient-to-b from-dark-700 to-dark-800 p-1 rounded-3xl">
             <div className="bg-dark-900 rounded-[22px] p-8 text-center h-full flex flex-col justify-center items-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-cyan to-neon-purple"></div>
                <h3 className="text-2xl font-bold text-white mb-4">Secure This Domain</h3>
                <p className="text-gray-400 mb-8">Take the first step today. Make MetaTopTier.com your brand's new home.</p>
                <Button href={BUY_LINK} fullWidth className="animate-pulse-slow">
                  Make an Offer
                </Button>
                <p className="mt-4 text-xs text-gray-500">Redirects to Afternic Secure Checkout</p>
             </div>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-black border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-col items-center justify-center mb-6">
            <Logo className="h-24 w-24 mb-4" />
            <span className="font-display font-bold text-3xl tracking-tight">
              <span className="text-white">Meta</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple">TopTier</span>
            </span>
          </div>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Empowering the Next Generation of Web3, Metaverse, and Meta-tech Leaders.
          </p>
          <div className="flex justify-center space-x-6 mb-8">
             {/* Social placeholders */}
             <a href="#" className="text-gray-500 hover:text-neon-cyan transition-colors">Twitter</a>
             <a href="#" className="text-gray-500 hover:text-neon-purple transition-colors">LinkedIn</a>
             <a href="#" className="text-gray-500 hover:text-white transition-colors">Discord</a>
          </div>
          <div className="text-sm text-gray-600">
             <p>Contact us: <a href={`mailto:${CONTACT_EMAIL}`} className="text-neon-cyan hover:underline">{CONTACT_EMAIL}</a></p>
             <p className="mt-2">&copy; {new Date().getFullYear()} MetaTopTier. All rights reserved.</p>
          </div>
          
          {/* Explicit CTA for Buyer as requested */}
          <div className="mt-12 pt-8 border-t border-gray-900">
            <a href={BUY_LINK} className="text-neon-cyan hover:text-white transition-colors text-sm font-semibold tracking-wider uppercase border-b border-neon-cyan hover:border-white pb-1">
              Buy MetaTopTier.com Now
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;