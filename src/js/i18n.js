let currentTranslations = {};
const translationCache = {};
const DEFAULT_LANG = "en";

async function loadTranslations(lang) {
  if (translationCache[lang]) {
    return translationCache[lang];
  }

  const response = await fetch(`/src/lang/${lang}.json`);
  if (!response.ok) {
    throw new Error(`Erro ao carregar o arquivo: ${lang}.json`);
  }

  const data = await response.json();
  translationCache[lang] = data;
  return data;
}

function applyTranslations(translations) {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    const value = key
      .split(".")
      .reduce((obj, k) => (obj ? obj[k] : null), translations);

    if (!value) return;

    if (element.tagName === "UL" || element.tagName === "P") {
      element.innerHTML = value;
    } else {
      element.textContent = value;
    }
  });
}

async function switchLanguage(lang) {
  try {
    if (lang === DEFAULT_LANG) {
      document.documentElement.lang = lang;
      localStorage.setItem("preferredLang", lang);
      return;
    }

    const translations = await loadTranslations(lang);
    currentTranslations = translations;
    applyTranslations(translations);

    if (typeof renderProjects === "function") {
      renderProjects();
    }

    document.documentElement.lang = lang;
    localStorage.setItem("preferredLang", lang);

    document
      .querySelectorAll(".lang-btn")
      .forEach((btn) => btn.classList.remove("active"));
    document.getElementById(`btn-${lang}`)?.classList.add("active");
  } catch (error) {
    console.error(error);
  }
}

window.addEventListener("load", () => {
  const savedLang = localStorage.getItem("preferredLang");

  if (savedLang && savedLang !== DEFAULT_LANG) {
    if ("requestIdleCallback" in window) {
      requestIdleCallback(() => switchLanguage(savedLang));
    } else {
      setTimeout(() => switchLanguage(savedLang), 0);
    }
  }
});
