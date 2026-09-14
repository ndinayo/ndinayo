import { createElement } from "react";
import { FiCode, FiDatabase, FiLayout, FiTerminal } from "react-icons/fi";
import Reveal from "./Reveal";
const groups = [
  {
    title: "Frontend",
    icon: FiLayout,
    description: "Interfaces that feel as good as they look.",
    tools: [
      "React",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend & data",
    icon: FiDatabase,
    description: "The logic that keeps everything moving.",
    tools: [
      "C#",
      ".NET",
      "Node.js",
      "Python",
      "Django",
      "PHP",
      "MySQL",
      "REST APIs",
    ],
  },
  {
    title: "Web & workflow",
    icon: FiTerminal,
    description: "From a first commit to a live website.",
    tools: ["Git", "GitHub", "WordPress", "Elementor", "Vite"],
  },
  {
    title: "Exploring",
    icon: FiCode,
    description: "Always making room for the next idea.",
    tools: ["Dart", "Machine learning", "Automation", "Data solutions"],
  },
];
export default function Technologies() {
  return (
    <section className="section wrap" id="stack">
      <Reveal>
        <div className="section-heading">
          <div>
            <p className="eyebrow">04 / THE TOOLKIT</p>
            <h2>
              Good ideas.
              <br />
              <span>The right tools.</span>
            </h2>
          </div>
          <p>
            From the interface to the database,
            <br />
            here’s what I build with.
          </p>
        </div>
      </Reveal>
      <div className="stack-grid">
        {groups.map(({ title, icon, description, tools }, i) => (
          <Reveal className="stack-card" key={title}>
            <div className="stack-top">
              {createElement(icon)}
              <span className="mono">0{i + 1}</span>
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="tags">
              {tools.map((tool) => (
                <span key={tool}>{tool}</span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
