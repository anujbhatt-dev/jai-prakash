"use client";

import { useState } from "react";

const researchDetails = {
  hi: [
  '“हिन्दी दलित साहित्य को जयप्रकाश नवेंदु महर्षि की देन” विषय पर डॉ. कल्याण कुमार झा के निर्देशन में कुमारी गायत्री सिंह द्वारा बाबासाहेब भीमराव अम्बेडकर विश्वविद्यालय मुजफ्फरपुर बिहार में पीएच.डी. सम्पन्न।',
  '“जयप्रकाश नवेंदु महर्षि के काव्येतर साहित्य में दलित चेतना” विषय पर डॉ. सुनील कुमार के निर्देशन में गीता कुमारी द्वारा मगध विश्वविद्यालय बोधगया बिहार में पीएच.डी. सम्पन्न।',
  '“जयप्रकाश नवेंदु महर्षि का काव्य संसार : एक नव्य अनुशीलन” विषय पर डॉ. उमाशंकर सिंह के निर्देशन में सोनी रानी द्वारा मगध विश्वविद्यालय बोधगया बिहार में पीएच.डी. सम्पन्न।',
  "उपन्यास 'दोहान' पर डॉ. श्रेयोराजसिंह बेचैन के निर्देशन में कुमारी रूबी द्वारा दिल्ली विश्वविद्यालय दिल्ली में एम.फिल. सम्पन्न।",
  '“महर्षि नवेंदु के काव्य में प्रेम तत्व” विषय पर डॉ. कल्याण कुमार झा के निर्देशन में अजय कुमार द्वारा बाबासाहेब भीमराव अम्बेडकर विश्वविद्यालय मुजफ्फरपुर बिहार में पीएच.डी. सम्पन्न।',
  ],
  en: [
    '“The Contribution of Jaiprakash Navendu Maharshi to Hindi Dalit Literature” — Under the supervision of Dr. Kalyan Kumar Jha, Kumari Gayatri Singh completed her Ph.D. at Babasaheb Bhimrao Ambedkar University, Muzaffarpur, Bihar.',
    '“Dalit Consciousness in the Non-Poetic Literature of Jaiprakash Navendu Maharshi” — Under the supervision of Dr. Sunil Kumar, Geeta Kumari completed her Ph.D. at Magadh University, Bodh Gaya, Bihar.',
    '“The Poetic World of Jaiprakash Navendu Maharshi: A New Study” — Under the supervision of Dr. Umashankar Singh, Soni Rani completed her Ph.D. at Magadh University, Bodh Gaya, Bihar.',
    '“A Study of the Novel Dohan” — Under the supervision of Dr. Shyoraj Singh Bechain, Kumari Ruby completed her M.Phil. at the University of Delhi, Delhi.',
    '“The Element of Love in Maharshi Navendu’s Poetry” — Under the supervision of Dr. Kalyan Kumar Jha, Ajay Kumar completed his Ph.D. at Babasaheb Bhimrao Ambedkar University, Muzaffarpur, Bihar.',
  ],
};

export function LiteraryResearchDetailsSection() {
  const [showTranslation, setShowTranslation] = useState(false);
  const language = showTranslation ? "en" : "hi";

  return (
    <section className="section literary-research-details" id="research-details" aria-labelledby="research-details-title" lang={language}>
      <div className="section-inner">
        <header className="literary-research-heading">
          <p className="eyebrow"><span>{showTranslation ? "RESEARCH · 05" : "शोध · ०५"}</span> {showTranslation ? "Literary studies" : "साहित्यिक अध्ययन"}</p>
          <h2 id="research-details-title">{showTranslation ? <>Research on Maharshi Navendu’s <em>literature</em></> : <>महर्षि नवेंदु के साहित्य पर <em>शोधकार्य</em></>}</h2>
          <div className="literary-research-language">
            <button
              className="literary-translation-toggle"
              type="button"
              aria-expanded={showTranslation}
              aria-controls="literary-research-copy"
              onClick={() => setShowTranslation((visible) => !visible)}
            >
              {showTranslation ? "हिंदी में पढ़ें" : "See translation · English"}
            </button>
          </div>
        </header>

        <div id="literary-research-copy" className={showTranslation ? "literary-research-copy is-english" : "literary-research-copy"} aria-live="polite">
          <div className="literary-research-intro">
            {showTranslation ? (
              <>
                <p>Maharshi J. P. Navendu is an established self-respect-oriented poet and writer in Hindi Dalit literature. His published works to date—including poetry collections and books on poetry, stories, novels, drama, religion, philosophy and politics—have reached a total of one hundred and thirty.</p>
                <p>Several research projects on Maharshi Navendu’s literature have also been completed. Their details are as follows:</p>
              </>
            ) : (
              <>
                <p>महर्षि जे.पी. नवेंदु हिन्दी दलित साहित्य के एक प्रतिष्ठित स्वाभिमानवादी कवि साहित्यकार हैं। उनके द्वारा रचित अबतक कविता संग्रह समेत कविता-कहानी उपन्यास-नाटक-धर्म-दर्शन-राजनीति की प्रकाशित पुस्तकों की संख्या एक सौ तीस तक पहुँच चुकी है।</p>
                <p>महर्षि नवेंदु के साहित्य पर कई जगह शोधकार्य भी सम्पन्न हो चुके हैं जिनका ब्यौरा निम्नवत है—</p>
              </>
            )}
          </div>

          <ol className="literary-research-list">
            {researchDetails[language].map((detail, index) => (
              <li key={detail}>
                <span className="literary-research-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <p>{detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
