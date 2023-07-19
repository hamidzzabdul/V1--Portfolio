import MainNavigation from "../Header/MainNavigation";
import Hero from "../Header/Hero";
import About from "../About me/About";
import Experience from "../Experience/Experience";
import Projects from "../projects/Projects";
import Connect from "../connect/Connect";
import Footer from "../footer/Footer";
import SideMenu from "../UI/SideMenu";

const Home = () => {
  return (
    <>
      <SideMenu />
      <MainNavigation />
      <main>
        <Hero />
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
