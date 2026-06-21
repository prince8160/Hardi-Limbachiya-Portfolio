'use client';

import { motion } from 'motion/react';
import { Camera, Film, Globe } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">My Creative Journey</h2>
          <p className="text-foreground/70 text-lg">
            Content creation is more than just making videos; it&apos;s about visual storytelling, exploring new perspectives, and sharing authentic experiences. Every frame is a canvas for creativity.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-card rounded-2xl p-8 flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
              <Camera className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3">Cinematography</h3>
            <p className="text-foreground/70">Pushing the boundaries of visual storytelling with cutting-edge gear and techniques.</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-card rounded-2xl p-8 flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 rounded-full bg-purple-500/10 flex items-center justify-center mb-6">
              <Globe className="w-8 h-8 text-purple-500" />
            </div>
            <h3 className="text-xl font-bold mb-3">Travel</h3>
            <p className="text-foreground/70">Documenting incredible cultures, hidden gems, and epic landscapes across 40+ countries.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="glass-card rounded-2xl p-8 flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center mb-6">
              <Film className="w-8 h-8 text-red-500" />
            </div>
            <h3 className="text-xl font-bold mb-3">Producing</h3>
            <p className="text-foreground/70">Building a team to create high-concept documentaries and entertaining short films.</p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
