import { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import LoadingScreen from './components/ui/LoadingScreen';
import CursorEffect from './components/ui/CursorEffect';
import ScrollProgress from './components/ui/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Certifications from './components/Certifications';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <LoadingScreen onComplete={() => setLoaded(true)} />

      {loaded && (
        <div className="min-h-screen bg-[#050816]">
          <CursorEffect />
          <ScrollProgress />
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Timeline />
            <Certifications />
            <Services />
            <Testimonials />
            <Contact />
          </main>
          <Footer />
          <Toaster
            position="bottom-right"
            toastOptions={{
              style: {
                background: '#111827',
                color: '#F9FAFB',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '12px',
                fontSize: '14px',
              },
            }}
          />
        </div>
      )}
    </>
  );
}
