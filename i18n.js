module.exports = {
  defaultLocale: "default",
  locales: ["default", "en", "pt", "ar", "ku", "tr", "fr", "de", "es", "vi"],
  localeDetection: false,
  pages: {
    "*": ["default", "header", "footer"],
  },
  loadLocaleFrom: (lang, ns) => import(`./public/locales/${lang}/${ns}.json`).then(m => m.default),
};
