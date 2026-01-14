import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LuMenu, LuX, LuQuote, LuMapPin, LuClock, LuArrowRight } from 'react-icons/lu';
import { Reveal } from '../components/motion/Reveal';

const Index = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f4f1ea] font-sans overflow-x-hidden selection:bg-orange-900 selection:text-white scroll-smooth">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,900;1,400&family=Space+Grotesk:wght@300;400;500;700&display=swap');
        
        :root {
            --bg-dark: #0a0a0a;
            --text-light: #f4f1ea;
            --accent-gold: #d4a373;
        }
        
        body {
            font-family: 'Space Grotesk', sans-serif;
        }
        
        h1, h2, h3, h4, h5, .font-serif {
            font-family: 'Playfair Display', serif;
        }
        
        .text-outline {
            -webkit-text-stroke: 1px rgba(244, 241, 234, 0.3);
            color: transparent;
        }
        
        .glass-panel {
            background: rgba(255, 255, 255, 0.03);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.05);
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
            width: 8px;
        }
        ::-webkit-scrollbar-track {
            background: #0a0a0a;
        }
        ::-webkit-scrollbar-thumb {
            background: #333;
            border-radius: 4px;
        }
      `}</style>

      {/* Navigation */}
      <nav className="fixed w-full z-50 mix-blend-difference px-6 py-6 flex justify-between items-center">
        <div className="text-2xl font-bold tracking-tighter uppercase">Lumen.</div>
        <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest font-bold">
          <a href="#process" className="hover:text-gray-400 transition-colors">Process</a>
          <a href="#menu" className="hover:text-gray-400 transition-colors">Menu</a>
          <a href="#visit" className="hover:text-gray-400 transition-colors">Visit</a>
        </div>
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <LuX className="w-6 h-6" /> : <LuMenu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black flex flex-col items-center justify-center space-y-8 text-2xl uppercase font-bold tracking-widest md:hidden">
          <a href="#process" onClick={() => setIsMobileMenuOpen(false)}>Process</a>
          <a href="#menu" onClick={() => setIsMobileMenuOpen(false)}>Menu</a>
          <a href="#visit" onClick={() => setIsMobileMenuOpen(false)}>Visit</a>
        </div>
      )}

      {/* 1. Hero Section */}
      <header className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
            alt="Dark moody coffee aesthetics" 
            className="w-full h-full object-cover opacity-60 scale-110 motion-safe:animate-[pulse_10s_ease-in-out_infinite_alternate]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-[#0a0a0a]"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <Reveal>
            <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-gray-400 mb-6">
              San Francisco • Mission District
            </p>
          </Reveal>
          
          <Reveal delay={0.1}>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-[0.9] tracking-tighter mb-8">
              <span className="block">ALCHEMY</span>
              <span className="block italic font-light text-gray-300">IN EVERY</span>
              <span className="block">CUP</span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center mt-12">
              <a href="#visit" className="group relative px-8 py-4 bg-white text-black font-bold uppercase tracking-wider text-sm overflow-hidden">
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">Visit The Lab</span>
                <div className="absolute inset-0 bg-orange-700 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out"></div>
              </a>
              <a href="#menu" className="text-sm uppercase tracking-widest border-b border-transparent hover:border-white transition-all pb-1">
                View Seasonal Menu
              </a>
            </div>
          </Reveal>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
          <span className="text-[10px] uppercase tracking-widest">Scroll</span>
          <div className="w-[1px] h-12 bg-white"></div>
        </div>
      </header>

      {/* 2. Value Proposition */}
      <section className="py-24 md:py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <Reveal>
              <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                Not just coffee.<br/>
                <span className="italic font-light text-gray-400">A awakening.</span>
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed max-w-md mb-8">
                We reject the ordinary. Located in the heart of the Mission, Lumen is a sanctuary for those who understand that coffee is more than caffeine—it is a ritual of precision, patience, and flavor.
              </p>
              <ul className="space-y-4 font-mono text-sm tracking-wide text-gray-300">
                <li className="flex items-center gap-4">
                  <span className="w-2 h-2 bg-orange-600 rounded-full"></span> Single Origin Sourcing
                </li>
                <li className="flex items-center gap-4">
                  <span className="w-2 h-2 bg-orange-600 rounded-full"></span> Precision Roast Profiles
                </li>
                <li className="flex items-center gap-4">
                  <span className="w-2 h-2 bg-orange-600 rounded-full"></span> Award-Winning Baristas
                </li>
              </ul>
            </Reveal>
            
            <Reveal delay={0.2} className="relative">
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1442512595367-42736f3e5087?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                  alt="Minimalist coffee shop detail" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-orange-900 p-6 text-white max-w-xs hidden md:block">
                <p className="font-serif italic text-xl">"The attention to detail is borderline obsessive. In the best way possible."</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3. How It Works (The Process) */}
      <section id="process" className="py-24 bg-[#111] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-20">
              <p className="text-xs uppercase tracking-[0.3em] text-orange-500 mb-4">The Methodology</p>
              <h2 className="text-5xl md:text-7xl text-outline font-black uppercase tracking-tight">Seed to Cup</h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <Reveal className="h-full">
              <div className="glass-panel p-8 group hover:bg-white/5 transition-all duration-500 h-full">
                <div className="text-4xl text-orange-500 mb-6 font-serif italic">01.</div>
                <h3 className="text-2xl font-bold mb-4 uppercase">Curate</h3>
                <p className="text-gray-400 leading-relaxed">We work directly with farmers in Ethiopia, Colombia, and Kenya. No middlemen. Just ethical trade and the highest quality beans.</p>
              </div>
            </Reveal>
            
            {/* Step 2 */}
            <Reveal delay={0.1} className="h-full">
              <div className="glass-panel p-8 group hover:bg-white/5 transition-all duration-500 h-full">
                <div className="text-4xl text-orange-500 mb-6 font-serif italic">02.</div>
                <h3 className="text-2xl font-bold mb-4 uppercase">Roast</h3>
                <p className="text-gray-400 leading-relaxed">Roasted in small batches in-house. We highlight the inherent floral, fruity, or nutty notes of each specific varietal.</p>
              </div>
            </Reveal>

            {/* Step 3 */}
            <Reveal delay={0.2} className="h-full">
              <div className="glass-panel p-8 group hover:bg-white/5 transition-all duration-500 h-full">
                <div className="text-4xl text-orange-500 mb-6 font-serif italic">03.</div>
                <h3 className="text-2xl font-bold mb-4 uppercase">Extract</h3>
                <p className="text-gray-400 leading-relaxed">Whether it's a V60 pour-over or a double shot of espresso, our variables are weighed and timed to the second.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 4. Key Features (Menu Highlights) */}
      <section id="menu" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="flex flex-col md:flex-row justify-between items-end mb-16">
              <h2 className="text-5xl md:text-6xl font-bold">Signature<br/>Serves</h2>
              <a href="#" className="hidden md:block text-sm uppercase tracking-widest border-b border-gray-600 pb-1 hover:text-orange-500 transition-colors">Full Menu PDF</a>
            </div>
          </Reveal>

          <div className="space-y-4">
            {/* Item 1 */}
            <Reveal>
              <div className="group relative border-t border-white/10 py-8 flex flex-col md:flex-row md:items-center justify-between cursor-pointer">
                <div className="md:w-1/2">
                  <h3 className="text-3xl font-serif italic text-gray-300 group-hover:text-white transition-colors group-hover:translate-x-4 duration-300">The Obsidian Cold Brew</h3>
                </div>
                <div className="md:w-1/3 mt-2 md:mt-0">
                  <p className="text-gray-500 text-sm">24-hour immersion • Nitrogen infused • Velvety finish</p>
                </div>
                <div className="mt-4 md:mt-0 font-mono text-orange-500">$6.50</div>
                {/* Hover Image Reveal */}
                <img 
                  src="https://images.unsplash.com/photo-1517701604599-bb29b565090c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                  className="absolute right-0 top-1/2 -translate-y-1/2 w-48 h-32 object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none hidden lg:block rounded-sm grayscale" 
                  alt="Cold brew"
                />
              </div>
            </Reveal>

            {/* Item 2 */}
            <Reveal>
              <div className="group relative border-t border-white/10 py-8 flex flex-col md:flex-row md:items-center justify-between cursor-pointer">
                <div className="md:w-1/2">
                  <h3 className="text-3xl font-serif italic text-gray-300 group-hover:text-white transition-colors group-hover:translate-x-4 duration-300">Cortado Gibraltar</h3>
                </div>
                <div className="md:w-1/3 mt-2 md:mt-0">
                  <p className="text-gray-500 text-sm">1:1 Espresso to milk ratio • Glass served • Smooth texture</p>
                </div>
                <div className="mt-4 md:mt-0 font-mono text-orange-500">$5.00</div>
                <img 
                  src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                  className="absolute right-0 top-1/2 -translate-y-1/2 w-48 h-32 object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none hidden lg:block rounded-sm grayscale" 
                  alt="Cortado"
                />
              </div>
            </Reveal>

            {/* Item 3 */}
            <Reveal>
              <div className="group relative border-t border-b border-white/10 py-8 flex flex-col md:flex-row md:items-center justify-between cursor-pointer">
                <div className="md:w-1/2">
                  <h3 className="text-3xl font-serif italic text-gray-300 group-hover:text-white transition-colors group-hover:translate-x-4 duration-300">Single Origin Pour Over</h3>
                </div>
                <div className="md:w-1/3 mt-2 md:mt-0">
                  <p className="text-gray-500 text-sm">Rotating Selection (Ethiopia/Peru) • Hand poured • Complex</p>
                </div>
                <div className="mt-4 md:mt-0 font-mono text-orange-500">MP</div>
                <img 
                  src="https://images.unsplash.com/photo-1544602868-9696b96b27e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                  className="absolute right-0 top-1/2 -translate-y-1/2 w-48 h-32 object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none hidden lg:block rounded-sm grayscale" 
                  alt="Pour over"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 5. Proof */}
      <section className="py-24 bg-white text-black text-center px-6">
        <Reveal>
          <div className="max-w-4xl mx-auto">
            <LuQuote className="w-12 h-12 mx-auto mb-8 text-orange-600" />
            <blockquote className="text-3xl md:text-5xl font-serif italic leading-tight mb-8">
              &ldquo;Lumen isn't just a coffee shop. It's a masterclass in minimalism and flavor. The best pour-over in the Bay Area, hands down.&rdquo;
            </blockquote>
            <cite className="text-sm font-bold uppercase tracking-widest text-gray-500">— Eater San Francisco</cite>
          </div>
        </Reveal>
      </section>

      {/* 6. Primary CTA / Location */}
      <section id="visit" className="relative bg-[#050505] text-white py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info */}
          <Reveal>
            <div>
              <h2 className="text-5xl font-bold mb-10">Find Your<br/>Ritual.</h2>
              
              <div className="space-y-8">
                <div>
                  <h4 className="text-orange-500 text-sm uppercase tracking-widest mb-2">Location</h4>
                  <p className="text-2xl font-serif">842 Valencia St.<br/>San Francisco, CA 94110</p>
                </div>
                
                <div>
                  <h4 className="text-orange-500 text-sm uppercase tracking-widest mb-2">Hours</h4>
                  <table className="text-lg text-gray-300 w-full max-w-xs">
                    <tbody>
                      <tr>
                        <td className="py-1">Mon - Fri</td>
                        <td className="text-right py-1">7am — 4pm</td>
                      </tr>
                      <tr>
                        <td className="py-1">Sat - Sun</td>
                        <td className="text-right py-1">8am — 5pm</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="pt-8">
                  <a href="#" className="inline-block px-10 py-5 bg-white text-black font-bold uppercase tracking-widest hover:bg-orange-600 hover:text-white transition-all duration-300">
                    Get Directions
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Map Image / Visual */}
          <Reveal delay={0.2}>
            <div className="relative h-[400px] lg:h-auto overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Interior Cafe Mood" 
                className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="bg-white/10 backdrop-blur-md p-6 border border-white/20">
                  <p className="text-center uppercase tracking-widest text-xs">View on Map</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 text-center md:text-left">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
          <div className="mb-4 md:mb-0">
            &copy; 2024 Lumen Coffee Lab. All rights reserved.
          </div>
          <div className="flex gap-6 uppercase tracking-wider">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">Spotify</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
