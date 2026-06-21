'use client';

import { motion } from 'motion/react';
import { Youtube, Play } from 'lucide-react';
import Image from 'next/image';

export function YoutubeShowcase() {
  return (
    <section id="youtube" className="py-24 relative bg-muted/20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">YouTube channel</h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Explore insightful stories, educational content, and meaningful lessons designed to inspire, inform, and help you grow.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-2 md:p-4 shadow-2xl border border-border/50 relative overflow-hidden group"
          >
            {/* Ambient Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            <div className="relative aspect-video rounded-2xl overflow-hidden bg-black flex items-center justify-center cursor-pointer">
               <Image
                src="https://picsum.photos/seed/ytshowcase/1280/720"
                alt="Channel Preview"
                fill
                className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
              <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center z-10 shadow-lg shadow-red-500/30 group-hover:scale-110 transition-transform duration-300">
                <Play className="w-8 h-8 text-white ml-2" />
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between p-6 gap-6 inline-block w-full">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-muted border border-border overflow-hidden relative">
                  <Image
                    src="/images/channels4_profile.jpg"
                    alt="Channel Avatar"
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-display">Hardik Limbachiya</h3>
                  <p className="text-foreground/60 text-sm">Official Channel</p>
                </div>
              </div>

              <a
                href="https://www.youtube.com/@hardiklimbachiya5950"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 md:mt-2 px-8 py-4 rounded-full bg-[#f8f8fc] text-black font-bold hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg shadow-black/20 flex items-center gap-3 whitespace-nowrap"
              >
                <Youtube className="w-6 h-6 text-red-600" />
                Visit Channel
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
