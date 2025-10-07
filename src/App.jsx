import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />
      <main>
        <Hero />
        <Features />
      </main>
      <Footer />
    </div>
  );
}

export default App;
