import Faq from "@/components/Faq";
import Locations from "@/components/Locations";
import Hero from "@/components/Hero";
import Catering from "@/components/Catering";
function Home() {
  return (
    <div>
      <Hero />
      <Catering/>
      <Faq />
      <Locations />
    </div>
  );
}

export default Home;
