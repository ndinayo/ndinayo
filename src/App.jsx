import Hero from "./components/Hero";
import Reveal from "./components/Reveal";
import { motion as Motion, useScroll } from "framer-motion";
import Navbar from "./components/Navbar";
import GithubProfile from "./components/GithubProfile";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import portrait from "./assets/3.png";

function App() {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <Motion.div
        className="scroll-progress"
        style={{ scaleX: scrollYProgress }}
      />
      <Navbar />
      <main>
        <Hero />
        <GithubProfile />
        <div className="tech-strip mono" aria-label="Technologies I work with">
          {[
            "React",
            "TypeScript",
            "C#",
            ".NET",
            "Node.js",
            "Python",
            "Django",
            "JavaScript",
            "MySQL",
            "WordPress",
            "Dart",
          ].map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>
        <section className="section wrap" id="about">
          <Reveal>
            <p className="eyebrow">02 / THE PERSON BEHIND THE CODE</p>
            <h2>
              Curious by nature.
              <br />
              <span>Builder by choice.</span>
            </h2>
          </Reveal>
          <div className="about-grid">
            <Reveal className="portrait-card">
              <img
                src={portrait}
                alt="Ndinayo Eric"
                width="518"
                height="481"
                loading="lazy"
              />
              <div className="portrait-caption mono">
                <span>NDINAYO ERIC</span>
                <span>KIGALI, RW ↗</span>
              </div>
            </Reveal>
            <Reveal className="about-copy">
              <p className="large-copy">
                I like understanding how things work.
                <br />
                Then making them work better.
              </p>
              <p>
                I’m Eric, a full stack developer based in Kigali, Rwanda. I
                study Information Technology at the University of Rwanda and
                have also studied at The GYM, bringing classroom foundations
                into hands-on software development.
              </p>
              <p>
                From building Vatcho to creating the Zala Safaris website, I
                enjoy turning everyday problems into useful digital experiences.
                My work spans web applications, automation, and data.
              </p>
              <div className="about-facts">
                <div>
                  <span className="mono">CURRENT FOCUS</span>
                  <strong>Building Vatcho</strong>
                </div>
                <div>
                  <span className="mono">MY APPROACH</span>
                  <strong>Learn. Build. Improve.</strong>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
        <Projects />
        <Technologies />
        <Experience />

        <Contact />
      </main>
      <footer className="wrap footer">
        <a className="wordmark" href="#home">
          ne<span>.</span>
        </a>
        <span>© {new Date().getFullYear()} Ndinayo Eric</span>
        <span>Made with curiosity in Kigali.</span>
        <a href="#home" className="text-link">
          Back to top ↑
        </a>
      </footer>
    </>
  );
}
export default App;
