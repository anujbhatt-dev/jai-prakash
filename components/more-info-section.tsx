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
                <p className="more-info-lead">The Sun belongs to everyone; its light makes no distinction.</p>
                <p>The passage reflects on Surya Dev as a symbol of universal equality. Like the sun, whose light and warmth reach everyone without distinction, the values of compassion, humanity and shared belonging transcend divisions of caste, class, religion and region.</p>
                <p>It reminds us that great figures and ideas are not confined to one community. They become a shared inheritance when their message brings people together and inspires a more humane society.</p>
                <p className="translation-note">A concise English rendering of the Hindi passage shown in the original pages.</p>
              </div>
            ) : (
              <div>
                <p className="more-info-lead">सूर्य का प्रकाश सबके लिए है—वह किसी से भेदभाव नहीं करता।</p>
                <p>यह अंश सूर्यदेव को विश्व-समभाव के प्रतीक के रूप में देखता है। सूर्य की रोशनी और ऊष्मा जिस तरह सब तक समान रूप से पहुँचती है, उसी तरह करुणा, मानवता और साझा अपनत्व के मूल्य जाति, वर्ग, धर्म और क्षेत्र की सीमाओं से ऊपर हैं।</p>
                <p>यह विचार याद दिलाता है कि महान व्यक्तित्व और विचार किसी एक समुदाय तक सीमित नहीं होते। जब उनका संदेश लोगों को जोड़ता है और अधिक मानवीय समाज की प्रेरणा देता है, तब वे सबकी साझा विरासत बन जाते हैं।</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
