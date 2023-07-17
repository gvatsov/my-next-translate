const locales = require("./locales");

module.exports = {
  defaultLocale: "default",
  locales: ["default", ...locales],
  localeDetection: false,
  pages: {
    "*": ["default", "header", "footer"],
  },
  loadLocaleFrom: (lang, ns) => import(`./public/locales/${lang}/${ns}.json`).then(m => m.default),
};
