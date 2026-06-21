'use client';

import { motion } from 'motion/react';
import { Zap, Compass, Clapperboard } from 'lucide-react';

const categories = [
  { 
    title: 'Cinematic Vlogs', 
    description: 'Immersive storytelling featuring high-quality visuals and engaging narratives that transport the viewer.',
    icon: Clapperboard,
    color: 'text-primary',
    bg: 'bg-primary/10'
  },
  { 
    title: 'Tech & Gear', 
    description: 'Deep dives into the latest cameras, lenses, and creative tools that power the modern content creator.',
    icon: Zap,
    color: 'text-yellow-500',
    bg: 'bg-yellow-500/10'
  },
  { 
    title: 'Adventures', 
    description: 'Exploring new locations, documenting unique experiences, and pushing the boundaries of creativity on the go.',
    icon: Compass,
    color: 'text-emerald-500',
    bg: 'bg-emerald-500/10'
  }
];

export function ContentHighlights() {
  return (
    <section id="content" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Content Highlights</h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            A diverse range of topics designed to entertain, educate, and inspire creativity.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-2xl p-8 hover:-translate-y-2 transition-transform duration-300"
            >
              <div className={`w-14 h-14 rounded-2xl ${category.bg} flex items-center justify-center mb-6`}>
                 <category.icon className={`w-7 h-7 ${category.color}`} />
              </div>
              <h3 className="font-bold text-2xl mb-3">{category.title}</h3>
              <p className="text-foreground/70 leading-relaxed">
                {category.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
