import { GraduationCap } from "lucide-react";
import type authorInfo from "../data/info.json";
import { MotionReveal } from "./motion-reveal";

type ResearchWorks = typeof authorInfo.completedResearchAboutAuthor;

export function AcademicResearchSection({ works }: { works: ResearchWorks }) {
  return (
    <section className="section research-section" id="research" aria-labelledby="research-title">
      <div className="section-inner">
        <MotionReveal className="research-heading">
          <div>
            <p className="eyebrow"><span>04</span> Scholarship</p>
            <h2 id="research-title">A body of work, <em>studied.</em></h2>
          </div>
          <p className="section-deck">
            Research projects about Maharshi Navendu’s writing, as listed in the supplied biography.
          </p>
        </MotionReveal>

        <div className="research-grid">
          {works.map((work, index) => (
            <MotionReveal className="research-card" key={work.title} delay={Math.min(index * 0.04, 0.16)}>
              <div className="research-card-top">
                <span className="research-index">0{index + 1}</span>
                <GraduationCap size={18} strokeWidth={1.4} aria-hidden="true" />
              </div>
              <span className="degree-label">{work.degree}</span>
              <h3>{work.title}</h3>
              <div className="research-meta">
                <span>{work.researcher} · {work.supervisor}</span>
                <span>{work.institution}</span>
                <span>{work.location}</span>
              </div>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
