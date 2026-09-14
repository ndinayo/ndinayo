import Reveal from "./Reveal";
import { FiArrowUpRight } from "react-icons/fi";
export default function Experience() {
  return (
    <section className="section journey-section" id="journey">
      <div className="wrap journey-grid">
        <Reveal>
          <p className="eyebrow">05 / ALWAYS BECOMING</p>
          <h2>
            A foundation.
            <br />A little courage.
            <br />
            <span>A lot of building.</span>
          </h2>
          <p className="journey-intro">
            Learning doesn’t stop at the classroom.
            <br />
            Every project adds another chapter.
          </p>
          <div className="journey-symbol" aria-hidden="true">
            ✳
          </div>
        </Reveal>
        <div className="timeline">
          <Reveal className="timeline-item">
            <span className="timeline-dot" />
            <p className="eyebrow">EDUCATION / UNIVERSITY</p>
            <h3>University of Rwanda</h3>
            <h4>Information Technology</h4>
            <p>
              Developing a foundation in computing, software development, and
              information systems.
            </p>
          </Reveal>
          <Reveal className="timeline-item">
            <span className="timeline-dot" />
            <p className="eyebrow">EDUCATION / PRACTICAL LEARNING</p>
            <h3>The GYM</h3>
            <h4>Software development</h4>
            <p>
              Studied alongside fellow developers, including Patrick Mbabazi,
              building practical skills through shared learning.
            </p>
          </Reveal>
          <Reveal className="timeline-item">
            <span className="timeline-dot" />
            <p className="eyebrow">BUILDING / INDEPENDENT WORK</p>
            <h3>From learning to launching</h3>
            <h4>Full stack developer & creator</h4>
            <p>
              Creating Vatcho and developing the Zala Safaris website. Putting
              ideas into practice with real products and useful web experiences.
            </p>
            <a className="text-link" href="#work">
              Explore the work <FiArrowUpRight />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
