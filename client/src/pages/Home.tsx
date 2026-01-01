import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Journey from "@/components/Journey";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Journey />
        <Contact />
      </main>
      
      <footer className="py-6 text-center text-sm text-muted-foreground border-t border-border">
        <div className="container mx-auto px-6">
          <p>© {new Date().getFullYear()} Alex. Built with React & Tailwind.</p>
        </div>
      </footer>
    </div>
  );
}
