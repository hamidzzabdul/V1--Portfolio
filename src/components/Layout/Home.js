import MainNavigation from "../Header/MainNavigation";
import Hero from "../Header/Hero";
import About from "../About me/About";
import Experience from "../Experience/Experience";
import Projects from "../projects/Projects";
import Connect from "../connect/Connect";
import Footer from "../footer/Footer";
import SideMenu from "../UI/SideMenu";
import { useStyleMediaQuery } from "../../hooks/useStyleMediaQuery";
import HeroMobile from "../Header/HeroMobile";
import { Element } from "react-scroll";

const Home = () => {
  const { matches: isMobile } = useStyleMediaQuery({
    mixOrMax: "max",
    widthOrHeight: "width",
    value: 767,
  });

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ top: section.offsetTop, behavior: "smooth" });
    }
  };

  return (
    <>
      <SideMenu />
      <MainNavigation onNavItemClick={scrollToSection} />
      <main className="main">
        {isMobile ? <HeroMobile /> : <Hero />}
        <Element name="about" className="section">
          <About />
        </Element>
        <Experience />
        <Projects />
        <Connect />
        <Footer />
      </main>
    </>
  );
};
export default Home;
