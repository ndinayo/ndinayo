import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FiArrowUpRight, FiCopy, FiCheck } from "react-icons/fi";
import Reveal from "./Reveal";
const email = "ndinayoeric1@gmail.com";
export default function Contact() {
  const [copyStatus, setCopyStatus] = useState("");
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopyStatus("Email copied");
    } catch {
      setCopyStatus("Please select and copy the email address above.");
    }
  }
  return (
    <section className="contact-section" id="contact">
      <div className="wrap">
        <Reveal>
          <div className="contact-top">
            <p className="eyebrow">06 / YOUR NEXT IDEA STARTS HERE</p>
            <span className="mono">
              <i className="status-dot" /> LET’S MAKE SOMETHING GOOD
            </span>
          </div>
          <div className="contact-heading">
            <h2>
              Have an idea?
              <br />
              <span>Let’s build it.</span>
            </h2>
            <a
              href={`mailto:${email}`}
              className="contact-arrow"
              aria-label="Email Ndinayo Eric"
            >
              <FiArrowUpRight />
            </a>
          </div>
          <div className="contact-bottom">
            <div>
              <p>For projects, collaborations, or just a hello.</p>
              <div className="email-row">
                <a className="email-link" href={`mailto:${email}`}>
                  {email}
                </a>
                <button
                  className="copy-button"
                  onClick={copyEmail}
                  aria-label="Copy email address"
                >
                  {copyStatus === "Email copied" ? <FiCheck /> : <FiCopy />}
                </button>
              </div>
              <span className="copy-status" role="status">
                {copyStatus}
              </span>
            </div>
            <a
              className="button secondary"
              href="https://github.com/ndinayo"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub /> Find me on GitHub <FiArrowUpRight />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
