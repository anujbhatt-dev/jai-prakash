import books from "../data/books.json";
import authorInfo from "../data/info.json";
import { AboutSection } from "./about-section";
import { AcademicResearchSection } from "./academic-research-section";
import { AwardsSection } from "./awards-section";
import { BookCatalogue } from "./book-catalogue";
import { ContactSection } from "./contact-section";
import { HeroSection } from "./hero-section";
import { LiteraryJourneySection } from "./literary-journey-section";
import { SiteHeader } from "./site-header";

export function AuthorArchive() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main-content">
        <HeroSection info={authorInfo} catalogueTotal={books.length} />
        <AboutSection info={authorInfo} catalogueTotal={books.length} />
        <BookCatalogue books={books} reportedTotal={authorInfo.publications.reportedTotal} />
        <LiteraryJourneySection info={authorInfo} />
        <AcademicResearchSection works={authorInfo.completedResearchAboutAuthor} />
        <AwardsSection awards={authorInfo.awardsAndRecognition} />
        <ContactSection publisher={authorInfo.publisher} />
      </main>
      <footer className="site-footer">
        <div className="footer-inner">
          <span>Maharshi Navendu</span>
          <span>Hindi literature · Dehradun, India</span>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>
    </>
  );
}
