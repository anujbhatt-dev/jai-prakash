import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import type authorInfo from "../data/info.json";
import { MotionReveal } from "./motion-reveal";

type AuthorInfo = typeof authorInfo;

export function HeroSection({
  info,
  catalogueTotal,
}: {
  info: AuthorInfo;
  catalogueTotal: number;
}) {
  const { person, publications } = info;

  return (
    <section className="hero-section" id="home" aria-labelledby="hero-title">
      <div className="hero-inner">
        <MotionReveal className="hero-copy">
          <p className="eyebrow hero-kicker">A literary archive · Hindi Dalit literature</p>
          <h1 id="hero-title">
            Maharshi<br />
            <em>Navendu</em>
          </h1>
          <p className="hero-alias">Dr. Jai Prakash Navendu Maharshi Avtar</p>
          <p className="hero-description">
            Hindi Dalit poet, writer, thinker and litterateur. His work speaks
            against caste discrimination and imagines a more humane society.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#books">
              Explore the books <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <a className="text-link" href="#about">
              Discover his story <ArrowDown size={15} aria-hidden="true" />
            </a>
          </div>
          <div className="hero-stat-row" aria-label="Publication record">
            <div className="hero-stat">
              <span className="stat-number">{publications.reportedTotal}</span>
              <span className="stat-label">reported published books</span>
            </div>
            <span className="stat-rule" aria-hidden="true" />
            <div className="hero-stat">
              <span className="stat-number stat-number-small">{catalogueTotal}</span>
              <span className="stat-label">covers catalogued</span>
            </div>
          </div>
        </MotionReveal>

        <MotionReveal className="hero-visual" delay={0.12}>
          <div className="portrait-frame">
            <Image
              src="/author/maharshi-navendu.webp"
              alt="Portrait of Maharshi Navendu, reproduced from a supplied book cover"
              width={1240}
              height={1558}
              priority
              sizes="(max-width: 760px) 75vw, 37vw"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 42%" }}
            />
          </div>
          <span className="portrait-caption">Maharshi Navendu</span>
          <div className="hero-cover-card">
            <Image
              src="/book-covers/KM_206_00794_0001.webp"
              alt="Cover of Bhedbhav Rahit Dharti"
              width={52}
              height={76}
              sizes="52px"
              style={{ width: "52px", height: "76px", objectFit: "cover", objectPosition: "top" }}
            />
            <div>
              <span>From the archive</span>
              <strong lang="hi">भेदभाव रहित धरती</strong>
            </div>
          </div>
        </MotionReveal>
      </div>
      <div className="hero-bottomline">
        <span>{person.residence}</span><span>Born 1955</span>
      </div>
    </section>
  );
}
