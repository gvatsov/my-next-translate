import { TGetItem } from "./TGetItem";

class Service {
  private readonly KEY_LANGUAGE = "i18nextLng";
  private readonly KEY_USERNAME = "user";
  private readonly KEY_SID = "sid";
  private readonly KEY_CID = "cid";

  storeLanguage(language: string) {
    localStorage.setItem(this.KEY_LANGUAGE, language);
  }
  getLanguage(): TGetItem {
    return localStorage.getItem(this.KEY_LANGUAGE);
  }

  storeUsername(username: string) {
    localStorage.setItem(this.KEY_USERNAME, username);
  }
  getUsername(): TGetItem {
    return localStorage.getItem(this.KEY_USERNAME);
  }
  deleteUsername() {
    localStorage.removeItem(this.KEY_USERNAME);
  }

  storeSID(sessionID: string) {
    localStorage.setItem(this.KEY_SID, sessionID);
  }
  getSID(): TGetItem {
    return localStorage.getItem(this.KEY_SID);
  }
  deleteSID() {
    localStorage.removeItem(this.KEY_SID);
  }

  storeCID(cid: string) {
    localStorage.setItem(this.KEY_CID, cid);
  }
  getCID(): TGetItem {
    return localStorage.getItem(this.KEY_CID);
  }
  deleteCID() {
    localStorage.removeItem(this.KEY_CID);
  }
}

const LocalStorageService = new Service();
export default LocalStorageService;
