import { useRef } from "react";
import {
  motion as Motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { FiArrowRight, FiArrowUpRight, FiArrowDown } from "react-icons/fi";
import portrait from "../assets/2.png";
import "./Hero.css";

export default function Hero() {
  const ref = useRef(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, -65]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [0, 9]);
  const rotateY = useTransform(scrollYProgress, [0, 1], [0, -7]);
  return (
    <section className="intro wrap" id="home" ref={ref}>
      <div className="intro-grid">
        <div className="intro-copy">
          <p className="intro-kicker mono">
            <i className="status-dot" /> INDEPENDENT DEVELOPER &nbsp;/&nbsp;
            KIGALI, RWANDA
          </p>
          <p className="intro-name">
            Hi, I&apos;m <span>Ndinayo Eric</span>
          </p>
          <h1 className="intro-headline">
            Good software feels effortless
            <span className="intro-period">.</span>
          </h1>
          <p className="intro-description">
            I build websites, applications, and tools that make everyday work
            simpler. Studying Information Technology at the University of
            Rwanda, and creating{" "}
            <a href="https://vatcho.com" target="_blank" rel="noreferrer">
              Vatcho <FiArrowUpRight />
            </a>
            .
          </p>
          <div className="button-row">
            <a className="button primary" href="#work">
              See my work <FiArrowRight />
            </a>
            <a className="button ghost" href="#contact">
              Get in touch
            </a>
          </div>
        </div>

        <div className="intro-image-stage">
          <Motion.div
            className="intro-image-card"
            style={reduced ? {} : { rotateX, rotateY }}
          >
            <span className="intro-badge">AVAILABLE FOR WORK</span>
            <div className="intro-image-lines" aria-hidden="true" />
            <Motion.img
              src={portrait}
              alt="Ndinayo Eric, full stack developer in Kigali"
              width="518"
              height="481"
              fetchPriority="high"
              style={reduced ? {} : { y: portraitY }}
            />
            <div className="intro-offer">
              <span className="mono">WHAT I DO</span>
              <p>
                Web Apps I Full-Stack I APIs I Automation I Data I WordPress
              </p>
            </div>
          </Motion.div>
          <a
            className="intro-project"
            href="https://vatcho.com"
            target="_blank"
            rel="noreferrer"
          >
            <div>
              <span className="mono">CURRENTLY BUILDING</span>
              <strong>
                vatcho<span>.</span>
              </strong>
            </div>
            <span className="intro-project-arrow">
              <FiArrowUpRight />
            </span>
          </a>
        </div>
      </div>
      <div className="intro-bottom mono">
        <a href="#about">
          <FiArrowDown /> THERE&apos;S MORE BELOW
        </a>
        <span>
          WEB DEVELOPMENT &nbsp; / &nbsp; AUTOMATION &nbsp; / &nbsp; DATA
        </span>
      </div>
    </section>
  );
}
