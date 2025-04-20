"use client";

import { useState } from "react";

const languages = [
  { code: "en", label: "English" },
  { code: "es", label: "Spanish" },
  { code: "fr", label: "French" },
  { code: "zh", label: "Chinese" },
  { code: "tl", label: "Tagalog" },
  { code: "vi", label: "Vietnamese" },
  { code: "ar", label: "Arabic" },
  { code: "ko", label: "Korean" },
  { code: "de", label: "German" },
  { code: "ru", label: "Russian" },
  { code: "ht", label: "Haitian Creole" },
];

export default function LanguageSelector() {
  const [selected, setSelected] = useState("en");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelected(e.target.value);
    // TODO: Implement language change logic (e.g., update context or route)
  };

  return (
    <select
      aria-label="Select language"
      value={selected}
      onChange={handleChange}
      className="rounded border border-gray-300 p-2 text-gray-700"
    >
      {languages.map((lang) => (
        <option key={lang.code} value={lang.code}>
          {lang.label}
        </option>
      ))}
    </select>
  );
}
