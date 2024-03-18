import "./app.scss";
import Contact from "./components/contact/Contact";
import Profile from "./components/profile/Profile";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";
function App() {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Profile />
      </section>
      <section id="Services">
        <Parallax type="services" />
      </section>
      <section>
        <Services />
      </section>
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <Portfolio />
      <section id="Contact">
        <Contact />
      </section>
     
    </div>
  );
}

export default App;
