import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { About } from '@/components/about';
import { Gallery } from '@/components/gallery';
import { YoutubeShowcase } from '@/components/youtube-showcase';
import { ContentHighlights } from '@/components/content-highlights';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <main className="flex flex-col flex-1">
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <YoutubeShowcase />
      <ContentHighlights />
      <Contact />
      <Footer />
    </main>
  );
}
