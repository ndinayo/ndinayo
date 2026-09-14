import { useRef } from "react";
import {
  motion as Motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import Reveal from "./Reveal";
import vatcho from "../assets/vatcho.png";
import zala from "../assets/zala-safari-screenshot.png";
function Project({ number, name, description, tags, image, url, className }) {
  const ref = useRef(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });
  const rotateX = useTransform(scrollYProgress, [0, 1], [14, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.92, 1]);
  function tilt(event) {
    if (reduced || event.pointerType !== "mouse") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty(
      "--tilt-x",
      `${-(event.clientY - bounds.top - bounds.height / 2) / 65}deg`,
    );
    event.currentTarget.style.setProperty(
      "--tilt-y",
      `${(event.clientX - bounds.left - bounds.width / 2) / 65}deg`,
    );
  }
  function reset(event) {
    event.currentTarget.style.setProperty("--tilt-x", "0deg");
    event.currentTarget.style.setProperty("--tilt-y", "0deg");
  }
  return (
    <div className="project-perspective" ref={ref}>
      <Motion.article
        className={`project ${className}`}
        style={reduced ? {} : { rotateX, scale }}
      >
        <a
          className="project-visual"
          href={url}
          target="_blank"
          rel="noreferrer"
          onPointerMove={tilt}
          onPointerLeave={reset}
          aria-label={`Visit ${name}`}
        >
          <div className="project-browser">
            <div className="browser-bar">
              <span>● ● ●</span>
              <span>{url.replace("https://", "")}</span>
              <FiArrowUpRight />
            </div>
            <img src={image} alt={`${name} website preview`} loading="lazy" />
          </div>
          <span className="project-visit">
            Visit live site <FiArrowUpRight />
          </span>
        </a>
        <div className="project-info">
          <div>
            <p className="eyebrow">
              {number} /{" "}
              {name === "Vatcho"
                ? "PRODUCT & DEVELOPMENT"
                : "WEB DESIGN & DEVELOPMENT"}
            </p>
            <h3>
              <a href={url} target="_blank" rel="noreferrer">
                {name} <FiArrowUpRight />
              </a>
            </h3>
            <p>{description}</p>
          </div>
          <div className="tags">
            {tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
      </Motion.article>
    </div>
  );
}
export default function Projects() {
  return (
    <section className="section work-section" id="work">
      <div className="wrap">
        <Reveal>
          <div className="section-heading">
            <div>
              <p className="eyebrow">03 / SELECTED WORK</p>
              <h2>
                Less talk.
                <br />
                <span>More shipped.</span>
              </h2>
            </div>
            <p>
              A few things I’ve brought to life.
              <br />
              Built for people. Made to be used.
            </p>
          </div>
        </Reveal>
        <div className="projects-grid">
          <Project
            number="01"
            name="Vatcho"
            description="My own product: practical software and digital tools that help businesses simplify their everyday work."
            tags={["Creator", "Web applications", "Business tools"]}
            image={vatcho}
            url="https://vatcho.com"
            className="vatcho-project"
          />
          <Project
            number="02"
            name="Zala Safaris"
            description="An inviting home for East African adventures. A responsive safari website that helps travelers explore and plan their next trip."
            tags={["WordPress", "Elementor", "Custom CSS"]}
            image={zala}
            url="https://www.zalasafaris.com"
            className="zala-project"
          />
        </div>
        <a
          className="text-link work-more"
          href="https://github.com/ndinayo?tab=repositories"
          target="_blank"
          rel="noreferrer"
        >
          More experiments live on GitHub <FiArrowUpRight />
        </a>
      </div>
    </section>
  );
}
