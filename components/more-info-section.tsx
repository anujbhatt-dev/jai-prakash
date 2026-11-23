"use client";

import { useState } from "react";
import Image from "next/image";

export function MoreInfoSection() {
  const [showTranslation, setShowTranslation] = useState(false);

  return (
    <section className="section more-info-section" id="more-info" aria-labelledby="more-info-title">
      <div className="section-inner">
        <div className="more-info-heading">
          <div>
            <p className="eyebrow"><span>पठन · ०१</span> विचार और दृष्टि</p>
            <h2 id="more-info-title">सूर्योदय <em>विश्व समानता का</em></h2>
          </div>
          <button
            className="translation-toggle"
            type="button"
            aria-expanded={showTranslation}
            aria-controls="more-info-copy"
            onClick={() => setShowTranslation((visible) => !visible)}
          >
            {showTranslation ? "हिंदी में पढ़ें" : "See translation · English"}
            <span aria-hidden="true">{showTranslation ? "↗" : "↘"}</span>
          </button>
        </div>

        <div className="more-info-content">
          <div className="more-info-cover-wrap">
            <Image
              className="more-info-cover"
              src="/book-covers/new-019.webp"
              alt="सूर्योदय विश्व समानता का पुस्तक आवरण"
              width={809}
              height={1280}
              sizes="(max-width: 650px) 68vw, (max-width: 900px) 42vw, 280px"
            />
          </div>
          <div id="more-info-copy" className="more-info-copy" lang={showTranslation ? "en" : "hi"}>
            {showTranslation ? (
              <div className="translation-copy" aria-live="polite">
                <p className="more-info-lead">O Presidents of the nations of the world!</p>
                <p>From your centuries-old, present-day policies of racial discrimination, gender discrimination, caste discrimination, ethnic discrimination and regional discrimination, I abolish in the twenty-first century this world built on discrimination.</p>
                <p>From your centuries-old policies of oppression, exploitation, torture, atrocities, corruption and rape, I dismiss in the twenty-first century this world built on such policies.</p>
                <p>From the grief and sorrow that have continued for centuries, the tears of Dalits and the oppressed, and the opposition to women, I declare unconstitutional in the twenty-first century this world of today.</p>
                <p>From your centuries-old, injustice-based, inequality-based and inhumanity-based world, I declare this world unethical in the twenty-first century.</p>
                <p>And here I call upon the natural powers of the universe to crush, with their tremendous force, this tyrannical and oppressive world of cruelty, tyranny, satanism and discrimination! And here I call upon the lightning of the universe to burn to ashes, with its boundless fire, this anti-human world that oppresses Dalits and the deprived!</p>
                <p>And here I call upon the natural powers of the universe to destroy with their fury this cruel, savage, satanic and discriminatory world!</p>
                <p>Because, in this centuries-old sinful, inhuman and exploitative dark world, I wish to see the dawn of universal equality.</p>
                <p className="translation-note">English translation of the Hindi text on pages 11–12.</p>
              </div>
            ) : (
              <div>
                <p className="more-info-lead">अय, दुनिया के राष्ट्राध्यक्षों!</p>
                <p>तुम्हारी सदियों से आजतक की इस रंगभेदी, लिंगभेदी, जातिभेदी, नस्लभेदी, क्षेत्रीयताभेदी वर्तमान रची बनी खड़ी की हुई दुनिया को मैं इक्कीसवीं सदी में खारिज करता हूँ।</p>
                <p>तुम्हारी सदियों से आजतक की इस दमन, शोषण, उत्पीड़न, अत्याचार, भ्रष्टाचार, बलात्कार वाली वर्तमान रची बनी खड़ी की हुई दुनिया को मैं इक्कीसवीं सदी में बर्खास्त करता हूँ।</p>
                <p>तुम्हारी सदियों से आज तक की दुःख अवसाद घुटन आँसू रोदन से भरी दलित, वंचित विरोधी, महिला-विरोधी वर्तमान दुनिया को इक्कीसवीं सदी में मैं असंवैधानिक करार देता हूँ।</p>
                <p>तुम्हारी सदियों से आज तक की इस अन्यायाधारित, असमानताधारित, अमानवताधारित दुनिया को इक्कीसवीं सदी में मैं अनैतिक घोषित करता हूँ।</p>
                <p>और मैं अंतरिक्ष की हवाओं का यहाँ आह्वान करता हूँ कि ऐसी जुल्मकारी, तानाशाही दुनिया को अपने प्रचण्ड आवेग से रौंद डालो। और मैं अंतरिक्ष की बिजलियों का यहाँ आह्वान करता हूँ कि ऐसी दलित, वंचित मानवता विरोधी दुनिया को अपनी अग्निवर्षा से भस्म कर डालो!</p>
                <p>और मैं अंतरिक्ष की नैसर्गिक शक्तियों का यहाँ आह्वान करता हूँ कि ऐसी क्रूर, बर्बर, शैतानी, भेदभावजनक इस दुनिया को अपने प्रकोप से अस्तव्यस्त कर डालो!</p>
                <p>क्योंकि मैं सदियों की इस पापमयी, अमानवीय, शोषणकारी अँधेरी दुनिया में विश्वसमानता का सूर्योदय देखना चाहता हूँ।</p>
                <p className="translation-note">सूर्योदय विश्व समानता का · पृष्ठ ११–१२</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
