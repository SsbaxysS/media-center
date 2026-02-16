import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { News } from './components/News';
import { Team } from './components/Team';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';

export function App() {
  return (
    <div className="min-h-screen bg-[#050507] text-zinc-100 selection:bg-violet-500/30">
      <CustomCursor />
      <Header />
      <main>
        <Hero />
        <Features />
        <News />
        <Team />
      </main>
      <Footer />
    </div>
  );
}
