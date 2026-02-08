let currentTranslations = {};

async function switchLanguage(lang) {
  try {
    const response = await fetch("/src/lang/" + lang + ".json");
    if (!response.ok)
      throw new Error(`Erro ao carregar o arquivo: ${lang}.json`);
    currentTranslations = await response.json();

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.getAttribute("data-i18n");
      const translation = key
        .split(".")
        .reduce((obj, i) => (obj ? obj[i] : null), currentTranslations);
      if (translation) {
        if (element.tagName === "UL" || element.tagName === "P") {
          element.innerHTML = translation;
        } else {
          element.textContent = translation;
        }
      }
    });

    if (typeof renderProjects === "function") {
      renderProjects();
    }

    localStorage.setItem("preferredLang", lang);
    document.documentElement.lang = lang;
    document
      .querySelectorAll(".lang-btn")
      .forEach((btn) => btn.classList.remove("active"));
    const activeBtn = document.getElementById(`btn-${lang}`);
    if (activeBtn) activeBtn.classList.add("active");
  } catch (error) {
    console.error("Erro na tradução:", error);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("preferredLang") || "en";
  switchLanguage(savedLang);
});
