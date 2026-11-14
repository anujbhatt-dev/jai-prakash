import { AuthorArchive } from "../components/author-archive";
import books from "../data/books.json";
import authorInfo from "../data/info.json";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.jaiprakashnavendu.com").replace(/\/$/, "");

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": siteUrl ? `${siteUrl}/#author` : "#author",
      name: "Dr. Jai Prakash Navendu Maharshi Avtar",
      alternateName: authorInfo.person.publishedNames,
      description: authorInfo.person.biography,
      birthDate: authorInfo.person.birthDate,
      birthPlace: {
        "@type": "Place",
        name: "Bakra Nangla, Bijnor, Uttar Pradesh, India",
      },
      homeLocation: {
        "@type": "Place",
        name: authorInfo.person.residence,
      },
      image: siteUrl ? `${siteUrl}/author/maharshi-navendu.webp` : "/author/maharshi-navendu.webp",
      jobTitle: ["Hindi poet", "Writer", "Thinker"],
      email: "jaiprakashnavendu@gmail.com",
      telephone: ["+919286046207", "+917895831489"],
      knowsAbout: ["Hindi literature", "Dalit literature", "Poetry", "Social justice"],
      award: authorInfo.awardsAndRecognition.map((award) => award.name),
      worksFor: {
        "@type": "Organization",
        name: authorInfo.publisher.name,
        address: authorInfo.publisher.location,
      },
      ...(siteUrl ? { url: siteUrl } : {}),
    },
    {
      "@type": "WebSite",
      name: "Maharshi Navendu Literary Archive",
      description:
        "Biography, Hindi book catalogue, literary journey, research and recognition of Dr. Jai Prakash Navendu Maharshi Avtar.",
      inLanguage: ["en", "hi"],
      ...(siteUrl ? { "@id": `${siteUrl}/#website`, url: siteUrl } : {}),
      about: { "@id": siteUrl ? `${siteUrl}/#author` : "#author" },
    },
    {
      "@type": "ItemList",
      name: "Hindi books by Dr. Jai Prakash Navendu Maharshi Avtar",
      numberOfItems: books.length,
      itemListElement: books.map((book, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Book",
          name: book.title,
          alternateName: book.engTitle,
          author: { "@id": siteUrl ? `${siteUrl}/#author` : "#author" },
          image: siteUrl ? `${siteUrl}/book-covers/${book.filename}` : `/book-covers/${book.filename}`,
        },
      })),
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />
      <AuthorArchive />
    </>
  );
}
