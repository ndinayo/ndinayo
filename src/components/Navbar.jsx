import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return;
    const close = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [open]);
  return (
    <header className="header">
      <a className="skip-link" href="#about">
        Skip to content
      </a>
      <nav className="wrap nav" aria-label="Main navigation">
        <a
          className="wordmark"
          href="#home"
          aria-label="Ndinayo Eric home"
          onClick={() => setOpen(false)}
        >
          ne<span>.</span>
        </a>
        <div className={`nav-links ${open ? "is-open" : ""}`} id="navigation">
          {[
            ["About", "about"],
            ["Work", "work"],
            ["Stack", "stack"],
            ["Journey", "journey"],
          ].map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <a
            className="nav-github"
            href="https://github.com/ndinayo"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub /> GitHub <FiArrowUpRight />
          </a>
        </div>
        <a
          className="nav-contact"
          href="#contact"
          onClick={() => setOpen(false)}
        >
          Let’s talk <FiArrowUpRight />
        </a>
        <button
          className="menu-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </nav>
    </header>
  );
}
