export default class ServerSideTranslations {
  private static async serverSideTranslations(locale: string, namespaces: string[]) {
    const translations: {
      [key: string]: { [key: string]: string };
    } = {};

    const promises = namespaces.map(async namespace => {
      // const url = `https://www.betfinal.com/locales/${locale}/${namespace}.json`;
      // const response = await fetch(url);
      // const messages = await response.json();

      const messages = (await import(`../public/locales/${locale}/${namespace}.json`)).default;

      translations[namespace] = messages;
    });

    await Promise.all(promises);

    return translations;
  }

  static defaultNamespaces(additionalNamespaces: string[] = []) {
    let defaultNamespaces = ["default", "header", "footer", "error"].concat(additionalNamespaces);

    return defaultNamespaces;
  }

  static async getForDefault(locale: string, additionalNamespaces: string[] = []) {
    const namespaces = this.defaultNamespaces(additionalNamespaces);
    return await this.serverSideTranslations(locale, namespaces);
  }

  static async getForStaticByLocale(locale: string) {
    const namespaces = this.defaultNamespaces(["static"]);
    return await this.serverSideTranslations(locale, namespaces);
  }
}
