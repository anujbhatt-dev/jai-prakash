import books from "../data/books.json";
import authorInfo from "../data/info.json";
import { AboutSection } from "./about-section";
import { AcademicResearchSection } from "./academic-research-section";
import { AwardsSection } from "./awards-section";
import { BookCatalogue } from "./book-catalogue";
import { BookListSection } from "./book-list-section";
import { ContactSection } from "./contact-section";
import { FaqSection } from "./faq-section";
import { HeroSection } from "./hero-section";
import { LiteraryJourneySection } from "./literary-journey-section";
import { LiteraryResearchDetailsSection } from "./literary-research-details-section";
import { MoreInfoSection } from "./more-info-section";
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
        <MoreInfoSection />
        <BookCatalogue books={books} reportedTotal={authorInfo.publications.reportedTotal} />
        <BookListSection />
        <LiteraryJourneySection info={authorInfo} />
        <AcademicResearchSection works={authorInfo.completedResearchAboutAuthor} />
        <LiteraryResearchDetailsSection />
        <AwardsSection awards={authorInfo.awardsAndRecognition} />
        <FaqSection />
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
