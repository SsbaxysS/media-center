import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { News } from './components/News';
import { Team } from './components/Team';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="min-h-screen bg-white">
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
