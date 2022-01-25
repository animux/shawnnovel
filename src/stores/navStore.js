import { makeAutoObservable, runInAction } from "mobx";
import { RootStore } from "./rootStore";
export default class NavStore {
  rootStore;
  constructor(rootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }

  logginIn = true;
  booking = false;
  featured = true;
  searchUnit = false;
  dropdown = false;
  burger = false;

  setUnitSearch = () => {
    try {
      runInAction(() => {
        this.searchUnit = true;
        this.featured = false;
      });
    } catch (error) {
      throw error;
    }
  };
  setFeatured = () => {
    this.searchUnit = false;
    this.featured = true;
  };

  ormalLogin = () => {
    this.logginIn = true;
    this.booking = false;
  };

  bookingLogin = () => {
    this.booking = true;
    this.logginIn = false;
  };

  loginDone = () => {
    this.logginIn = false;
    this.booking = false;
  };
  setDropdown = (flag) => {
    this.dropdown = flag;
  };
  setBurger = () => {
    this.burger = !this.burger;
  };
}
