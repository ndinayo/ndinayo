import { createElement, useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import {
  FiArrowUpRight,
  FiBook,
  FiCode,
  FiDatabase,
  FiGlobe,
  FiLayers,
} from "react-icons/fi";
import Reveal from "./Reveal";
import "./GithubProfile.css";

const USERNAME = "ndinayo";

const PINNED = [
  {
    name: "Dream-Home-Real-Estate-Dashboard",
    language: "PHP",
    icon: FiDatabase,
  },
  { name: "MachineLearning", language: "Python", icon: FiCode },
  { name: "sealed-in-the-valley", language: "JavaScript", icon: FiGlobe },
  { name: "vatcho_projector", language: "Dart", icon: FiLayers },
];

export default function GithubProfile() {
  const [stats, setStats] = useState(null);
  const [chartFailed, setChartFailed] = useState(false);

  useEffect(() => {
    let active = true;
    fetch(`https://api.github.com/users/${USERNAME}`)
      .then((response) => (response.ok ? response.json() : null))
      .then((data) => {
        if (active && data) setStats(data);
      })
      .catch(() => {});
    return () => {
      active = false;
    };
  }, []);

  return (
    <section className="section wrap github-after-hero gh-section" id="github">
      <Reveal>
        <p className="eyebrow">01 / OUT IN THE OPEN</p>
        <h2>
          The code tells
          <br />
          <span>the rest of the story.</span>
        </h2>
      </Reveal>

      <Reveal className="gh-layout">
        <div className="gh-identity">
          <a
            className="gh-avatar"
            href={`https://github.com/${USERNAME}`}
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={`https://github.com/${USERNAME}.png`}
              alt="Ndinayo Eric on GitHub"
              width="240"
              height="240"
              loading="lazy"
            />
          </a>
          <h3>Ndinayo Eric</h3>
          <p className="gh-handle">{USERNAME}</p>
          {stats && (
            <p className="gh-stats mono">
              <span>
                <strong>{stats.followers}</strong> followers
              </span>
              <i />
              <span>
                <strong>{stats.following}</strong> following
              </span>
              <i />
              <span>
                <strong>{stats.public_repos}</strong> repos
              </span>
            </p>
          )}
          <a
            className="button primary gh-follow"
            href={`https://github.com/${USERNAME}`}
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub /> Follow on GitHub <FiArrowUpRight />
          </a>
        </div>

        <div className="gh-main">
          <div className="gh-readme">
            <span className="gh-readme-head mono">
              <FiBook /> {USERNAME} / README.md
            </span>
            <p>
              Full-Stack Developer I Building web apps, automation tools, and
              data solutions. Creator of Vatcho.
            </p>
          </div>

          <div className="gh-pinned-head">
            <span className="mono">PINNED</span>
            <a
              href={`https://github.com/${USERNAME}?tab=repositories`}
              target="_blank"
              rel="noreferrer"
              className="text-link"
            >
              All repositories <FiArrowUpRight />
            </a>
          </div>

          <div className="repo-grid">
            {PINNED.map(({ name, language, icon }) => (
              <a
                key={name}
                className="repo"
                href={`https://github.com/${USERNAME}/${name}`}
                target="_blank"
                rel="noreferrer"
              >
                {createElement(icon)}
                <h4>{name}</h4>
                <span className="mono">
                  <i className={`language-dot ${language.toLowerCase()}`} />
                  {language}
                </span>
                <FiArrowUpRight className="repo-arrow" />
              </a>
            ))}
          </div>

          {!chartFailed && (
            <div className="gh-chart">
              <span className="mono">CONTRIBUTIONS IN THE LAST YEAR</span>
              <img
                src={`https://ghchart.rshah.org/c5f467/${USERNAME}`}
                alt={`GitHub contribution graph for ${USERNAME}`}
                loading="lazy"
                onError={() => setChartFailed(true)}
              />
            </div>
          )}

          <p className="github-note mono">
            SMALL COMMITS. CONTINUOUS LEARNING. REAL PROGRESS.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
