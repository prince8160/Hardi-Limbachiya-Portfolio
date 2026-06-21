'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { Send, Mail, CheckCircle2, Loader2 } from 'lucide-react';

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
        {/* Gradients */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="glass-card rounded-3xl p-8 md:p-16 grid lg:grid-cols-2 gap-16 items-center">
            
          <motion.div
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Let&apos;s Create<br/>Something <span className="text-primary">Epic.</span></h2>
            <p className="text-foreground/70 text-lg mb-8">
              Open for brand partnerships, speaking engagements, and creative collaborations. Drop me a message and let&apos;s make it happen.
            </p>
            
            <div className="flex items-center gap-4 text-foreground/80 font-medium pb-8 border-b border-border/50">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                   <div className="text-sm text-foreground/50">Business Inquiries</div>
                   <a href="mailto:hello@hardiklimbachiya.com" className="hover:text-primary transition-colors">hello@hardiklimbachiya.com</a>
                </div>
            </div>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="relative"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground/80">First Name</label>
                        <input required type="text" className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary/50 transition-colors" placeholder="John" disabled={isSubmitting} />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground/80">Last Name</label>
                        <input required type="text" className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary/50 transition-colors" placeholder="Doe" disabled={isSubmitting} />
                    </div>
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground/80">Email</label>
                    <input required type="email" className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary/50 transition-colors" placeholder="john@example.com" disabled={isSubmitting} />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground/80">Message</label>
                    <textarea required rows={4} className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary/50 transition-colors resize-none" placeholder="Tell me about your project..." disabled={isSubmitting}></textarea>
                </div>
                <button type="submit" disabled={isSubmitting || isSubmitted} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-transform hover:scale-[1.02] disabled:opacity-70 disabled:hover:scale-100 disabled:cursor-not-allowed">
                    {isSubmitting ? (
                        <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Sending...
                        </>
                    ) : isSubmitted ? (
                        <>
                            <CheckCircle2 className="w-5 h-5" />
                            Message Sent!
                        </>
                    ) : (
                        <>
                            <Send className="w-5 h-5" />
                            Send Message
                        </>
                    )}
                </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
