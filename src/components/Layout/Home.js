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

const Home = () => {
  const { matches: isMobile } = useStyleMediaQuery({
    mixOrMax: "max",
    widthOrHeight: "width",
    value: 767,
  });

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    const navbarHeight = 4 * 16;
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });

      // Adjust the scroll position to account for the fixed nav bar
      const scrolledY = window.scrollY;
      window.scroll(0, scrolledY - navbarHeight);
    }
  };

  return (
    <>
      <SideMenu />
      <MainNavigation onNavItemClick={scrollToSection} />
      <main className="main">
        {isMobile ? <HeroMobile /> : <Hero />}
        <About />
        <Experience />
        <Projects />
        <Connect />
        <Footer />
      </main>
    </>
  );
};
export default Home;
