import { useEffect } from "react";
import { Globe2 } from "lucide-react";

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: any;
  }
}

export default function GoogleTranslateWidget() {
  useEffect(() => {
    const scriptId = "google-translate-script";

    // Avoid injecting the script multiple times
    if (document.getElementById(scriptId)) {
      return;
    }

    // This function is called by the Google Translate script once it has loaded
    window.googleTranslateElementInit = () => {
      if (!window.google || !window.google.translate) return;

      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en", // base language of the site
          autoDisplay: false,  // do not auto‑popup
          // No includedLanguages means all available languages are enabled
        },
        "google_translate_element"
      );
    };

    const script = document.createElement("script");
    script.id = scriptId;
    script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="google-translate-nav inline-flex h-8 items-center rounded-full border border-primary/40 bg-white/80 px-2 text-[11px] shadow-sm backdrop-blur-sm">
      <Globe2 className="mr-1 h-3 w-3" />
      {/* Label removed to keep the control compact */}
      <div id="google_translate_element" className="flex items-center" />
    </div>
  );
}
