import { ArrowUpRight, MapPin } from "lucide-react";
import type authorInfo from "../data/info.json";
import { MotionReveal } from "./motion-reveal";

type AuthorInfo = typeof authorInfo;

export function AboutSection({
  info,
  catalogueTotal,
}: {
  info: AuthorInfo;
  catalogueTotal: number;
}) {
  const { person, publications } = info;

  return (
    <section className="section about-section" id="about" aria-labelledby="about-title">
      <div className="section-inner about-grid">
        <MotionReveal className="section-intro">
          <p className="eyebrow"><span>01</span> The author</p>
          <h2 id="about-title">A voice shaped by <em>language and life.</em></h2>
          <a className="section-link" href="#journey">
            The literary journey <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </MotionReveal>

        <MotionReveal className="about-copy" delay={0.08}>
          <p className="lead-copy">{person.biography}</p>
          <div className="about-facts">
            <div className="about-fact">
              <span className="fact-label">Born</span>
              <strong>8 September 1955</strong>
              <span>{person.birthPlace.village}, {person.birthPlace.district}, {person.birthPlace.state}</span>
            </div>
            <div className="about-fact">
              <span className="fact-label">Based in</span>
              <strong><MapPin size={15} aria-hidden="true" /> Dehradun</strong>
              <span>Uttarakhand, India</span>
            </div>
          </div>
          <p className="name-note">
            Names used for this archive include {person.publishedNames.slice(0, 3).join(", ")}.
          </p>
          <p className="reported-note">
            The supplied biography reports {publications.reportedTotal} published books, with no date given
            for that total. This archive currently includes {catalogueTotal} cover images.
          </p>
        </MotionReveal>
      </div>
    </section>
  );
}
