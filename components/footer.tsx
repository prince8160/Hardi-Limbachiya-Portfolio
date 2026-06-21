'use client';

import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-border/50 py-12 mt-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="font-display font-bold text-2xl tracking-tighter">
          HL<span className="text-primary">.</span>
        </div>
        <div className="text-sm text-foreground/50 font-medium">
          © {new Date().getFullYear()} Hardik Limbachiya. All rights reserved.
        </div>
        <div className="flex gap-6">
          <Link href="#" className="text-sm text-foreground/50 hover:text-primary transition-colors">Privacy Policy</Link>
          <Link href="#" className="text-sm text-foreground/50 hover:text-primary transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
