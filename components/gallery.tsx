'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

const images = [
  { id: 1, src: "/images/HarshP1.jpeg", alt: "Creator Portrait", span: "row-span-2" },
  { id: 2, src: "/images/HarshP2.jpeg", alt: "Behind the Scenes", span: "row-span-1" },
  { id: 3, src: "/images/channels4_profile.jpg", alt: "Channel Avatar", span: "row-span-1" },
  { id: 4, src: "/images/HarshP4.jpeg", alt: "Travel Vlog", span: "row-span-1" },
  { id: 5, src: "/images/HarshP5.jpeg", alt: "Studio Setup", span: "row-span-1" },
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-12 flex items-end justify-between"
        >
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Life in Frames</h2>
            <p className="text-foreground/70 text-lg max-w-xl">A glimpse into the chaos, the beauty, and the behind-the-scenes moments that don&apos;t always make the final cut.</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[250px] gap-4">
          {images.map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={() => setSelectedImage(img.src)}
              className={`relative rounded-2xl overflow-hidden group cursor-pointer ${img.span}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-medium tracking-wide">View Full</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-sm flex items-center justify-center p-4 cursor-zoom-out"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 p-2 rounded-full glass hover:bg-white/20 transition-colors z-50 text-white"
            >
              <X className="w-6 h-6" />
            </button>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative w-full max-w-5xl aspect-video md:aspect-[4/3] lg:aspect-auto h-[80vh] rounded-xl overflow-hidden"
            >
              <Image
                src={selectedImage}
                alt="Fullscreen preview"
                fill
                className="object-contain"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
