'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { Youtube } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight tracking-tight">
            Hi, I&apos;m <span className="text-primary">Hardik Limbachiya</span>
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/70 max-w-lg leading-relaxed">
            I craft compelling stories and share my passion for creativity, documenting my journey and connecting with a global audience through engaging content.
          </p>
          
          <div className="flex flex-wrap items-center gap-4 mt-4">
            <a
              href="https://www.youtube.com/@hardiklimbachiya5950"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold transition-transform hover:scale-105 shadow-lg shadow-primary/25"
            >
              <Youtube className="w-5 h-5" />
              Visit YouTube Channel
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="relative mx-auto lg:ml-auto w-full max-w-[500px] aspect-[4/5]"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-3xl -rotate-3 transition-transform hover:rotate-0 duration-500" />
          <div className="relative w-full h-full rounded-3xl overflow-hidden border border-border glass shadow-2xl z-10">
            <Image
              src="/images/HarshP5.jpeg"
              alt="Hardik Limbachiya Portrait"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
