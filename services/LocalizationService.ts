import { GetServerSidePropsContext } from "next";
import CookieService from "./persist/CookieService";

export default class LocalizationService {
  static getLocaleFromContext(context: GetServerSidePropsContext) {
    const locale =
      CookieService.retrieveCookie(
        "client-locale",
        context.req.headers.cookie // get cookies from request
      ) || "en";

    console.log("locale", locale);

    return locale;
  }
}
