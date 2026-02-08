let currentTranslations = {};
const translationCache = {};
const DEFAULT_LANG = "en";

async function loadTranslations(lang) {
  if (translationCache[lang]) return translationCache[lang];

  const response = await fetch(`/src/lang/${lang}.json`);
  if (!response.ok) throw new Error(`Erro: ${lang}.json`);

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

    if (value) {
      if (["UL", "P", "DIV"].includes(element.tagName)) {
        element.innerHTML = value;
      } else {
        element.textContent = value;
      }
    }
  });
}

async function switchLanguage(lang) {
  try {
    const translations = await loadTranslations(lang);
    currentTranslations = translations;
    applyTranslations(translations);

    document.documentElement.lang = lang;
    localStorage.setItem("preferredLang", lang);

    if (typeof renderProjects === "function") renderProjects();

    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.classList.toggle("active", btn.id === `btn-${lang}`);
    });
  } catch (error) {
    console.error(error);
  }
}

window.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("preferredLang") || DEFAULT_LANG;

  if (savedLang !== DEFAULT_LANG) {
    switchLanguage(savedLang);
  } else {
    document.getElementById(`btn-${DEFAULT_LANG}`)?.classList.add("active");
  }
});
