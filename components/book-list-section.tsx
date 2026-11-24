"use client";

import { useState } from "react";
import books from "../data/books.json";

const englishTitleOverrides: Record<number, string> = {
  1: "Kaamna",
  2: "Ekant Veena",
  3: "Ghani Dhoop Ke Din",
  4: "Kavitayen 1991",
  5: "Ganga Wale Des Ka Dukhant",
  8: "Chhoti Si Prithvi",
  9: "Sansad To Savarn Hai",
  19: "Ishwar Qaid Mein Hai",
  20: "Paridhi Ke Paar",
  25: "Prem Ke Olympic Mein Padak",
  26: "Prem Ke Swarg Mein Pravesh",
  27: "Geetayani",
  30: "Geet Marichika",
  37: "Sau Crore Ki Kavita",
  39: "Geet Budha",
  41: "Garibi Mein Notebandi",
  46: "Isi Sadi Mein",
  47: "Manuvadion Ke Ant Ki Aahat",
  50: "Bahujan Bachayenge Samvidhan",
  51: "Sadiyon Ki Talabandi Mein Dalit",
  53: "Dalit Kavitayen 2020",
  54: "Prem Ka Bachat Khata",
  55: "Band Darwaza Hoti Hain Ladkiyan",
  56: "Man Ka Diya Jala Kar Batao",
  57: "Balatkar Kar Mari Gayi Ladkiyan",
  67: "Varn Vyavastha Ke Chakravyuh Mein Shudra",
  69: "Sadiyon Ke Sataye Log",
  71: "Balpan Bachati Hai",
  75: "Chunauti Se Yathasthiti Tak",
  76: "Geet Gaye Ja",
  79: "In Dinon",
  86: "Main Prabhudatt Hoon",
  88: "Prabhu Prakash",
  89: "Ishwar Hoon Main",
  92: "Mool Nivasi Hindu Darshan",
  93: "Antarrashtriya Avtar",
  95: "Dravid Ved",
  96: "Navendu Dharm",
  101: "Antarrashtriya Bahujan Dharm",
  103: "Anhad Panth",
  105: "Bharat Mein Prabuddh",
  106: "Bharat Mein Jaiprakash Navendu Avtar",
  111: "Dohan",
  118: "Purush Mein Andhera",
  125: "Band Honthon Mein Bhara Zahar",
  128: "Mere Man Ki Bible-1",
  129: "Mere Man Ki Bible-2",
  130: "Mere Man Ki Bible-3",
  131: "Mere Man Ki Bible-4",
  132: "Mere Man Ki Bible-5",
};

const normalizeTitle = (title: string) => title.normalize("NFC").toLocaleLowerCase().replace(/[^\p{L}\p{M}\p{N}]/gu, "");
const catalogueEnglishTitles = new Map(books.map((book) => [normalizeTitle(book.title), book.engTitle]));

const bookCategories = [
  {
    title: "कविता संग्रह",
    start: 1,
    books: [
      "कामना (1980)", "एकान्त वीणा (1981)", "घनी धूप के दिन (1986)", "कविताएँ 1991 (1991)",
      "गंगा वाले देश का दुखान्त (2001)", "खामोशी बुन रही है खतरा (2001)", "भारत अब भी उपनिवेश है (2002)", "छोटी सी पृथ्वी (2002)",
      "संसद तो सवर्ण है (2003)", "उपेक्षा के हरे हस्ताक्षर (2006)", "सितारों का ज्योतिर्मय ताज (2008)", "चाँद उग चुका है (2011)",
      "दलित जाग गए हैं (2011)", "दलित मशाल (2012)", "दलित भारती (2012)", "दलित पताका (2013)",
      "हर चीज़ से प्रेम (2015)", "कविता में घर (2015)", "ईश्वर कैद में है (2015)", "परिधि के पार (2015)",
      "आँखों की आँखों से बातें (2016)", "चेहरे पर चाँदनी (2016)", "सपनों के जंगल में बसंत (2016)", "बारिश में भीगते हम तुम (2016)",
      "प्रेम के ओलंपिक में पदक (2016)", "प्रेम के स्वर्ग में प्रवेश (2016)", "गीतायनी (2016)", "ओ प्रिया तुम (2016)",
      "गीत पुकार (2016)", "गीत मरीचिका (2016)", "बूँद-बूँद ज़िंदगी (2017)", "आसमान देख रहा है (2017)",
      "पेड़ (2017)", "प्रेम भरी पलकें (2017)", "प्रेम की छाँव (2017)", "ऐसा प्रेम कहीं न होगा (2017)",
      "सौ करोड़ की कविता (2017)", "Hundred Crores Poem (2017)", "गीत बूढ़ा (2018)", "गीत कबीरा (2018)",
      "गरीबी में नोटबन्दी (2019)", "किसान मर रहे हैं (2020)", "गुलामी के पाँच हजार साल (2020)", "न्याय के लिए लड़ो (2020)",
      "मनुवाद पर नकेल (2021)", "इसी सदी में (2021)", "मनुवादियों के अंत की आहट (2021)", "विज्ञान से बड़ा आत्मज्ञान (2021)",
      "बाँहों में ब्रह्मांड (2021)", "बहुजन बचायेंगे संविधान (2021)", "सदियों की तालाबन्दी में दलित (2021)", "देश डुबो दिया रे! (2021)",
      "दलित कविताएँ 2020 (2021)", "प्रेम का बचत खाता (2022)", "बन्द दरवाजा होती हैं लड़कियाँ (2022)", "मन का दीया जला कर बताओ (2022)",
      "बलात्कार कर मारी गई लड़कियाँ (2023)", "सुबह हो नहीं पा रही है (2023)", "जनतंत्र का जन उदास है (2023)", "दिल्ली का दलित (2023)",
      "मुझे हमेशा जगे रहना है (2023)", "क्योंकि दुनिया प्रेमिका है मेरी (2023)", "यह मानव ज्योति पुंज (2023)", "फाँसी पर लोकतंत्र (2023)",
      "जाति मुक्त भारत (2023)", "महर्षि नवेंदु की प्रतिनिधि कविताएँ (2023)", "वर्ण व्यवस्था के चक्रव्यूह में शूद्र (2024)", "स्वतंत्रता से समानता तक (2025)",
      "सदियों के सताये लोग (2025)", "पितानामा (2025)", "बालपन बचाती है (2025)", "क्योंकि मैं मूलनिवासी चमार हूँ (2025)",
      "भेदभाव की भूलभुलैया में भारत क्यों? (2025)", "शैतान मनु (2025)", "चुनौती से यथास्थिति तक (2025)", "गीत गाए जा (2025)",
      "ये सूनी खंजर वर्णव्यवस्था का (2026)", "सूर्योदय विश्व समानता का (2026)",
    ],
  },
  {
    title: "वैचारिक एवं आध्यात्मिक",
    start: 79,
    books: [
      "इन दिनों (1990)", "प्रभुदय (2009)", "भारत में ब्राह्मणवाद, राष्ट्रवाद और दलित (2012)", "भारत में दमन (2012)",
      "विश्व में शांति (2012)", "भारत दलित क्रांति (2013)", "भारत में भ्रष्टाचार (2013)", "मैं प्रभुदत्त हूँ (2014)",
      "लोक धर्म (2015)", "प्रभुप्रकाश (2016)", "ईश्वर हूँ मैं (2017)", "प्रभु सत्य धर्म (2017)",
      "क्षत्रिय, वैश्य, शूद्र एक हों (2020)", "मूल निवासी हिन्दू दर्शन (2020)", "अंतरराष्ट्रीय अवतार (2021)", "भेदभाव रहित धरती (2022)",
      "द्रविड़ वेद (2022)", "नवेंदु धर्म (2023)", "राजनीति से धर्म को दूर रखो (2023)", "समान दुनिया समान भारत (2024)",
      "अंतरराष्ट्रीय पंथ (2024)", "भारत के मूल निवासी (2024)", "अंतरराष्ट्रीय बहुजन धर्म (2024)", "महर्षि नवेंदु ग्रन्थ शतक (2024)",
      "अनहद पंथ (2026)", "भारत में प्रभुदय (2026)", "भारत में प्रबुद्ध (2026)", "भारत में जयप्रकाश नवेंदु अवतार (2026)",
      "भारत में दुर्दशाकाल (2026)", "JaiPrakash Navendu Incarnation in India (अनुवाद)", "दुनिया के राष्ट्राध्यक्षों! भू गणराज्य बनाओ (2026)", "JaiPrakash Navendu An Angel in India (अनुवाद)",
    ],
  },
  { title: "उपन्यास", start: 111, books: ["दोहान (1984)", "स्वतंत्र जीवन का अधिकार (2025)"] },
  {
    title: "कहानी संग्रह",
    start: 113,
    books: ["ब्राह्मण की बेटी (2011)", "अपनी-अपनी जाति (2011)", "रिपब्लिक डे और अन्य कहानियाँ (2023)", "संघर्ष पथ पर और अन्य कहानियाँ (2025)"],
  },
  { title: "नाटक", start: 117, books: ["नई रामायण (2009)", "पुरुष में अंधेरा (2009)"] },
  {
    title: "आत्मकथा",
    start: 119,
    books: [
      "इंसान से ईश्वर तक (2006)", "GOD from Man (अनुवाद)", "मेरे मन की बाइबिल (2007)", "रुकी हुई रोशनी (2011)",
      "मेरा बचपन मेरा संघर्ष (2012)", "कुछ काँटे कुछ फूल (2012)", "बंद होठों में भरा जहर (2014)", "मूक मानव (2017)",
      "नवेंदु : एक दलित अवतार (2023)", "मेरे मन की बाइबिल-1 (2025)", "मेरे मन की बाइबिल-2 (2025)", "मेरे मन की बाइबिल-3 (2025)",
      "मेरे मन की बाइबिल-4 (2025)", "मेरे मन की बाइबिल-5 (2025)", "मुझे विश्व समानता चाहिए (2026)",
    ],
  },
];

export function BookListSection() {
  const [showEnglish, setShowEnglish] = useState(false);

  return (
    <section className="section book-list-section" id="book-list" aria-labelledby="book-list-title" lang={showEnglish ? "en" : "hi"}>
      <div className="section-inner">
        <header className="book-list-heading">
          <p className="eyebrow"><span>{showEnglish ? "BOOK LIST · 133" : "पुस्तक सूची · १३३"}</span> {showEnglish ? "Complete works" : "रचना संसार"}</p>
          <h2 id="book-list-title">{showEnglish ? <>Published works by Dr. Jai Prakash Navendu <em>Avtar</em></> : <>डॉ. जयप्रकाश नवेंदु अवतार का <em>रचना संसार</em></>}</h2>
          <div className="book-list-intro-row">
            <p>{showEnglish ? "Poetry collections, philosophical and spiritual works, novels, story collections, plays, and autobiography." : "कविता संग्रह, वैचारिक एवं आध्यात्मिक पुस्तकें, उपन्यास, कहानी संग्रह, नाटक और आत्मकथा।"}</p>
            <button
              className="book-list-translation-toggle"
              type="button"
              aria-expanded={showEnglish}
              aria-controls="book-list-categories"
              onClick={() => setShowEnglish((visible) => !visible)}
            >
              {showEnglish ? "हिंदी में पढ़ें" : "See translation · English"}
            </button>
          </div>
        </header>

        <div id="book-list-categories" className="book-list-categories" aria-live="polite">
          {bookCategories.map((category) => (
            <section className={`book-list-category${showEnglish ? " is-english" : ""}`} key={category.title} aria-labelledby={`book-list-${category.start}`}>
              <h3 id={`book-list-${category.start}`}>{showEnglish ? ({
                "कविता संग्रह": "Poetry Collections",
                "वैचारिक एवं आध्यात्मिक": "Philosophy and Spirituality",
                "उपन्यास": "Novels",
                "कहानी संग्रह": "Story Collections",
                "नाटक": "Plays",
                "आत्मकथा": "Autobiography",
              } as Record<string, string>)[category.title] : category.title}</h3>
              <ol start={category.start}>
                {category.books.map((book, index) => {
                  const number = category.start + index;
                  const year = book.match(/\s\((\d{4})\)$/)?.[1];
                  const isTranslated = book.endsWith("(अनुवाद)");
                  const title = book.replace(/\s\(\d{4}\)$/, "").replace(/\s\(अनुवाद\)$/, "");
                  const englishTitle = englishTitleOverrides[number] ?? catalogueEnglishTitles.get(normalizeTitle(title)) ?? title;
                  return <li key={book}>{showEnglish ? `${englishTitle}${year ? ` (${year})` : isTranslated ? " (translated)" : ""}` : book}</li>;
                })}
              </ol>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
