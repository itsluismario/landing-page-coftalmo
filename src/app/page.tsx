import Image from "next/image";
import Team from "./components/Team";
import Title from "./components/Title";
import SeenUs from "./components/SeenUs";
import HowWeDoIt from "./components/HowWeDoIt";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Title />
      <HowWeDoIt />
      <Team />
      <SeenUs />
      <Footer/>
    </main>
  );
}
