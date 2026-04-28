import { Header, Footer } from './components/Layout';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Criteria } from './components/Criteria';
import { Resources } from './components/Resources';
import { VideoSection } from './components/VideoSection';
import { Community } from './components/Community';
import { Contact } from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-200">
      <Header />
      
      <main>
        <Hero />
        <About />
        <Criteria />
        <Resources />
        <VideoSection />
        <Community />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}