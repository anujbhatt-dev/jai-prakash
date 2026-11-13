import { ArrowDownRight, BookOpen, GraduationCap, PenLine } from "lucide-react";
import type authorInfo from "../data/info.json";
import { MotionReveal } from "./motion-reveal";

type AuthorInfo = typeof authorInfo;

export function LiteraryJourneySection({ info }: { info: AuthorInfo }) {
  const timeline = [
    ...info.education.map((item) => ({
      date: item.period ?? ("year" in item ? String(item.year) : "Undated"),
      title: item.level,
      place: [item.institution, "location" in item ? item.location : undefined].filter(Boolean).join(" · "),
      detail: "note" in item ? item.note : undefined,
      icon: GraduationCap,
    })),
    {
      date: "8 July 1980",
      title: "Joined Gandhi Inter College",
      place: "Dehradun, Uttarakhand · Teacher, C.T. Grade",
      detail: "Appointed as a teacher; later served as vice-principal.",
      icon: BookOpen,
    },
    {
      date: "2016",
      title: "Retired as Vice-Principal",
      place: "Gandhi Inter College, Dehradun",
      detail: "The source biography says he continued his writing and creative work in Dehradun.",
      icon: PenLine,
    },
  ];

  return (
    <section className="section journey-section" id="journey" aria-labelledby="journey-title">
      <div className="section-inner">
        <MotionReveal className="journey-heading">
          <div>
            <p className="eyebrow"><span>03</span> The literary journey</p>
            <h2 id="journey-title">Learning. Teaching. <em>Writing.</em></h2>
          </div>
          <p className="section-deck">
            From Bijnor to Dehradun, a path through study, service and sustained literary work.
          </p>
        </MotionReveal>

        <div className="timeline">
          {timeline.map((item, index) => {
            const Icon = item.icon;
            return (
              <MotionReveal className="timeline-item" key={`${item.title}-${index}`} delay={Math.min(index * 0.035, 0.18)}>
                <span className="timeline-index">{String(index + 1).padStart(2, "0")}</span>
                <span className="timeline-date">{item.date}</span>
                <div className="timeline-marker" aria-hidden="true"><Icon size={17} strokeWidth={1.5} /></div>
                <div className="timeline-copy">
                  <h3>{item.title}</h3>
                  <p className="timeline-place">{item.place}</p>
                  {item.detail && <p className="timeline-detail">{item.detail}</p>}
                </div>
              </MotionReveal>
            );
          })}
        </div>

        <div className="doctoral-note">
          <span className="doctoral-mark"><ArrowDownRight size={19} aria-hidden="true" /></span>
          <div>
            <p className="fact-label">Doctoral research</p>
            <h3>{info.doctoralResearch.topic}</h3>
            <p>
              Registered at {info.doctoralResearch.institution} in {info.doctoralResearch.enrollmentYear};
              {" "}the biography states that the degree was left incomplete in 1987.
            </p>
          </div>
          <span className="doctoral-status">Not completed</span>
        </div>
      </div>
    </section>
  );
}
