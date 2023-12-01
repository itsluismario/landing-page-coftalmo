import Team from "./components/Team";
import Title from "./components/Title";
import SeenUs from "./components/SeenUs";
import HowWeDoIt from "./components/HowWeDoIt";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import SeenUsInAction from "./components/SeenUsInAction";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Title />
      <HowWeDoIt />
      <Team />
      <SeenUsInAction/>
      <Services />
      <SeenUs />
      <Footer/>
    </main>
  );
}
