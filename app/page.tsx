import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Feature from "@/components/Feature";
// import Gallery from '@/components/Gallery';
import Footer from "@/components/Footer";
import FAQ from "./components/FAQ";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <Feature />
        <FAQ />
        {/* <Gallery /> */}
      </main>
      <Footer />
    </div>
  );
}
