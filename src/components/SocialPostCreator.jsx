
import React from "react";

function SocialPostCreator({ lang }) {
  const messages = {
    en: {
      title: "Create Social Media Post",
      caption: "Caption",
      hook: "Hook",
      cta: "Call to Action",
      hashtags: "Hashtags",
      emojis: "Add Emojis",
      generate: "Generate",
    },
    el: {
      title: "Δημιουργία Δημοσίευσης για Social Media",
      caption: "Κείμενο",
      hook: "Hook",
      cta: "Παρότρυνση (CTA)",
      hashtags: "Hashtags",
      emojis: "Προσθήκη Emojis",
      generate: "Δημιούργησε",
    },
  };

  const t = messages[lang];

  return (
    <div>
      <h2>{t.title}</h2>
      <form>
        <label>
          <input type="checkbox" />
          {t.caption}
        </label>
        <label>
          <input type="checkbox" />
          {t.hook}
        </label>
        <label>
          <input type="checkbox" />
          {t.cta}
        </label>
        <label>
          <input type="checkbox" />
          {t.hashtags}
        </label>
        <label>
          <input type="checkbox" />
          {t.emojis}
        </label>
        <button type="button">{t.generate}</button>
      </form>
    </div>
  );
}

export default SocialPostCreator;
