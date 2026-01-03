"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Moon, Music, Image as ImageIcon, Sparkles, Smartphone, ArrowRight, Wind, Layers } from 'lucide-react';

export default function LandingPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-purple-500 selection:text-white font-sans overflow-x-hidden">
      {/* Background Gradients */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-900/30 rounded-full blur-[128px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-teal-900/20 rounded-full blur-[128px]" />
      </div>

      {/* Navigation */}
      <nav className="relative z-50 px-6 py-6 flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
          <Moon className="w-6 h-6 text-purple-400 fill-purple-400" />
          <span>DreamForge</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#how-it-works" className="hover:text-white transition-colors">How it works</a>
          <a href="#tech" className="hover:text-white transition-colors">Technology</a>
        </div>
        <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-full text-sm font-medium transition-all">
          Join Beta
        </button>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 px-6 pt-20 pb-32 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="space-y-8"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-300 text-xs font-medium">
              <Sparkles className="w-3 h-3" />
              <span>Now available on TestFlight</span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
              Engineer Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-teal-400">
                Dreams
              </span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-lg text-slate-400 max-w-lg leading-relaxed">
              Influence your subconscious with AI-powered storytelling, cinematic visualization, and immersive audio. Fall asleep to a world of your own creation.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
              <button className="flex items-center gap-2 bg-white text-slate-950 px-6 py-3.5 rounded-xl font-bold hover:bg-slate-200 transition-colors">
                <Smartphone className="w-5 h-5" />
                Download App
              </button>
              <button className="flex items-center gap-2 bg-slate-800 text-white px-6 py-3.5 rounded-xl font-medium hover:bg-slate-700 transition-colors border border-slate-700">
                View on GitHub
              </button>
            </motion.div>

            <motion.div variants={fadeInUp} className="pt-8 flex items-center gap-4 text-sm text-slate-500">
              <div className="flex -space-x-2">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full bg-slate-800 border-2 border-slate-950 flex items-center justify-center text-xs">
                    {/* Placeholder avatars */}
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-slate-700 to-slate-800" />
                  </div>
                ))}
              </div>
              <p>Trusted by 500+ early dreamers</p>
            </motion.div>
          </motion.div>

          {/* Hero Visual Mockup */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:h-[600px] flex items-center justify-center"
          >
            <div className="relative w-[300px] h-[600px] bg-slate-900 rounded-[3rem] border-8 border-slate-800 shadow-2xl shadow-purple-900/20 overflow-hidden">
              {/* Fake App UI */}
              <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-950">
                {/* App Header */}
                <div className="p-6 pt-12 flex justify-between items-center">
                  <span className="font-bold text-white">Good Night</span>
                  <div className="w-8 h-8 rounded-full bg-slate-800" />
                </div>
                {/* App Content */}
                <div className="p-6 space-y-4">
                  <div className="w-full aspect-square rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white/20">
                    <ImageIcon className="w-12 h-12" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-6 w-3/4 bg-slate-800 rounded-lg" />
                    <div className="h-4 w-1/2 bg-slate-800 rounded-lg" />
                  </div>
                  {/* Playback Controls */}
                  <div className="mt-8 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/5 flex items-center justify-between">
                    <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center">
                      <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-black border-b-[6px] border-b-transparent ml-1" />
                    </div>
                    <div className="h-1 flex-1 mx-4 bg-slate-700 rounded-full overflow-hidden">
                      <div className="h-full w-1/3 bg-purple-500" />
                    </div>
                    <span className="text-xs text-slate-400">04:20</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Bento Grid Features */}
      <section id="features" className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Designed for <br />Deep Sleep</h2>
            <p className="text-slate-400 max-w-xl text-lg">Our technology stack combines the latest in Generative AI to create a completely unique experience every night.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[600px]">
            {/* Feature 1 - Large */}
            <div className="md:col-span-2 md:row-span-2 rounded-3xl p-8 bg-slate-900/50 border border-slate-800 backdrop-blur-sm hover:border-purple-500/30 transition-all group overflow-hidden relative">
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-purple-500/20 flex items-center justify-center mb-6 text-purple-400 group-hover:scale-110 transition-transform duration-500">
                  <ImageIcon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Cinematic Visuals</h3>
                <p className="text-slate-400">Powered by Flux Schnell, we generate 1:1 aspect ratio dreamscapes that match your prompt perfectly. No stock photos.</p>
              </div>
              <div className="absolute right-0 bottom-0 w-1/2 h-full bg-gradient-to-l from-purple-900/20 to-transparent" />
              {/* Abstract Visual representation */}
              <div className="absolute right-[-20px] bottom-[-20px] w-64 h-64 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl opacity-20 rotate-12 group-hover:rotate-6 transition-transform duration-700" />
            </div>

            {/* Feature 2 */}
            <div className="rounded-3xl p-8 bg-slate-900/50 border border-slate-800 backdrop-blur-sm hover:border-teal-500/30 transition-all group">
               <div className="w-12 h-12 rounded-2xl bg-teal-500/20 flex items-center justify-center mb-6 text-teal-400 group-hover:scale-110 transition-transform duration-500">
                  <Wind className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">AI Narratives</h3>
                <p className="text-sm text-slate-400">Groq & Llama 3 craft second-person stories designed to prime your subconscious.</p>
            </div>

            {/* Feature 3 */}
            <div className="rounded-3xl p-8 bg-slate-900/50 border border-slate-800 backdrop-blur-sm hover:border-pink-500/30 transition-all group">
               <div className="w-12 h-12 rounded-2xl bg-pink-500/20 flex items-center justify-center mb-6 text-pink-400 group-hover:scale-110 transition-transform duration-500">
                  <Music className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">ElevenLabs Audio</h3>
                <p className="text-sm text-slate-400">High-fidelity voice synthesis that reads your dream script in a soothing tone.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Ticker */}
      <section className="py-12 border-y border-white/5 bg-black/20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm font-medium text-slate-500 mb-8 uppercase tracking-widest">Powered By</p>
          <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Simple text placeholders for logos - replace with SVGs later */}
            <span className="text-xl font-bold font-mono">GROQ</span>
            <span className="text-xl font-bold font-mono">REPLICATE</span>
            <span className="text-xl font-bold font-mono">ELEVENLABS</span>
            <span className="text-xl font-bold font-mono">SUPABASE</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-900 bg-slate-950">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 font-bold text-lg">
            <Moon className="w-5 h-5 text-purple-400" />
            <span>DreamForge</span>
          </div>
          <div className="flex gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Twitter</a>
          </div>
          <p className="text-xs text-slate-600">© 2024 DreamForge Inc.</p>
        </div>
      </footer>
    </div>
  );
}