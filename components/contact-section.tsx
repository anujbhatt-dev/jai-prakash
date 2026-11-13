import { Mail, MapPin, Phone } from "lucide-react";
import type authorInfo from "../data/info.json";
import { MotionReveal } from "./motion-reveal";

type Publisher = typeof authorInfo.publisher;

export function ContactSection({ publisher }: { publisher: Publisher }) {
  return (
    <section className="section contact-section" id="contact" aria-labelledby="contact-title">
      <div className="section-inner contact-layout">
        <MotionReveal className="contact-copy">
          <p className="eyebrow"><span>06</span> Correspondence</p>
          <h2 id="contact-title">Contact <em>the author.</em></h2>
          <p>
            For correspondence about his writing, books and literary work, use the contact details below.
          </p>
        </MotionReveal>
        <MotionReveal className="publisher-card" delay={0.1}>
          <span className="fact-label">Author correspondence</span>
          <h3 className="contact-author-name">Dr. Jai Prakash Navendu Maharshi Avtar</h3>
          <p className="contact-author-role">Hindi Dalit Poet, Writer, Thinker, and Litterateur</p>
          <a className="contact-detail" href="mailto:jaiprakashnavendu@gmail.com">
            <Mail size={18} aria-hidden="true" />
            <span>jaiprakashnavendu@gmail.com</span>
          </a>
          <a className="contact-detail" href="tel:+919286046207">
            <Phone size={18} aria-hidden="true" />
            <span>+91 92860 46207</span>
          </a>
          <a className="contact-detail" href="tel:+917895831489">
            <Phone size={18} aria-hidden="true" />
            <span>+91 78958 31489</span>
          </a>
          <span className="publisher-location"><MapPin size={15} aria-hidden="true" />{publisher.name}, {publisher.location}</span>
        </MotionReveal>
      </div>
    </section>
  );
}
