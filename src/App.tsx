import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Experience } from './components/sections/Experience';
import { Certifications } from './components/sections/Certifications';
import { Contact } from './components/sections/Contact';
import { DataProvider } from './context/DataContext';
import { usePortfolioData } from './hooks/usePortfolioData';

function AppContent() {
  const { loading } = usePortfolioData();

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      <Navbar />
      {loading && (
        <div className="fixed inset-0 z-999 flex items-center justify-center bg-slate-900/80 backdrop-blur-sm">
          <div className="flex flex-col items-center gap-3">
            <div className="w-10 h-10 rounded-full border-4 border-sky-500 border-t-transparent animate-spin" />
            <p className="text-slate-400 text-sm">Loading portfolio data…</p>
          </div>
        </div>
      )}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <DataProvider>
      <AppContent />
    </DataProvider>
  );
}

export default App;
