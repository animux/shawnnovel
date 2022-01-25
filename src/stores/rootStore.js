import { createContext } from "react";
import CommonStore from "./commonStore";
import NavStore from "./navStore";

export class RootStore {
  commonStore;
  navStore;
  
  constructor() {
    this.commonStore = new CommonStore(this);
    this.navStore = new NavStore(this);
  }
}

export const RootStoreContext = createContext(new RootStore());