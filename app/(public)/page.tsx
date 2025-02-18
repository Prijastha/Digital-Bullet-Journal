import Hero from "./components/Hero";
import Feature from "./components/Feature";
// import Gallery from '@/components/Gallery';

import FAQ from "./components/FAQ";

export default function Home() {
  return (
    <div>
      <main>
        <Hero />
        <Feature />
        <FAQ />
        {/* <Gallery /> */}
      </main>
    </div>
  );
}
