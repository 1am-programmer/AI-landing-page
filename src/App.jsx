import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefit from "./components/Benefit";
import Collaboration from "./components/Collaboration";
// import Button from "./components/Button";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Services from "./components/Services";
export default function App() {
  return (
    <>
      <div className="pt-[4.75rem] overflow-hidden lg:pt-[5.25rem]">
        <Header />
        <Hero />
        <Benefit />
        <Collaboration />
        <Services />
        <Pricing />
      </div>
      <ButtonGradient />
    </>
  );
}
