import Cookies from "universal-cookie";

class CookieService {
  static storeCookie(cookieName: string, cookieContent: string, expirationDays?: number): void {
    const currentCookie = this.retrieveCookie(cookieName);

    if (currentCookie === cookieContent) return;

    const cookies = new Cookies();
    if (expirationDays) {
      const cookieExpirationDate = new Date(new Date().setDate(new Date().getDate() + expirationDays));
      cookies.set(cookieName, cookieContent, {
        expires: cookieExpirationDate,
        path: "/",
      });
    } else {
      cookies.set(cookieName, cookieContent, {
        path: "/",
      });
    }
  }

  static retrieveCookie(cookieName: string, cookiesHeader?: string): string | undefined {
    const cookies = new Cookies(cookiesHeader);
    const currentCookie: string | undefined = cookies.get(cookieName);

    return currentCookie;
  }

  static deleteCookie(cookieName: string): void {
    const cookies = new Cookies();
    cookies.remove(cookieName, { path: "/" });
  }
}

export default CookieService;
