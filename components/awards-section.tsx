import { Award, MapPin } from "lucide-react";
import type authorInfo from "../data/info.json";
import { MotionReveal } from "./motion-reveal";

type Awards = typeof authorInfo.awardsAndRecognition;

export function AwardsSection({ awards }: { awards: Awards }) {
  return (
    <section className="section awards-section" id="awards" aria-labelledby="awards-title">
      <div className="section-inner awards-layout">
        <MotionReveal className="awards-intro">
          <p className="eyebrow"><span>05</span> Recognition</p>
          <h2 id="awards-title">Honours along <em>the way.</em></h2>
          <p>
            Awards and public recognition recorded in the biographical pages provided for this archive.
          </p>
          <div className="award-count"><Award size={18} strokeWidth={1.5} aria-hidden="true" /><span>{awards.length} recognitions documented</span></div>
        </MotionReveal>

        <div className="awards-list">
          {awards.map((award, index) => (
            <MotionReveal className="award-row" key={award.name} delay={Math.min(index * 0.04, 0.16)}>
              <span className="award-year">{"year" in award ? award.year : "date" in award ? award.date : "Recognition"}</span>
              <div className="award-copy">
                <h3>{award.name}</h3>
                <p>
                  {"awardingOrganization" in award ? award.awardingOrganization : award.organizers}
                  {" · "}{award.location}
                </p>
                {"details" in award && <small>{award.details}</small>}
                {"basis" in award && <small>{award.basis}</small>}
              </div>
              <MapPin className="award-pin" size={16} strokeWidth={1.4} aria-hidden="true" />
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
