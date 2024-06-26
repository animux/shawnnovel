import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";

export default class CommonStore {
  rootStore;
  constructor(rootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }
  services = {
    CBT: [],
    CC: [],
    CRE: [],
    CT: [],
    DR: [],
    EL: [],
  };
  services2 = [];
  service = null;
  news = null;
  peopleList = {
    Seniors: [],
    Associates: [],
    OffCouncel: [],
  };
  newsList = null;
  clients = [];
  loadingServices = false;
  loadingService = false;
  loadingNewsList = false;
  loadingNews = false;
  loadingClients = false;
  loadingContact = false;
  loadingPeople = false;

  shuffle(array) {
    var currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  getServices = () => {
    try {
      runInAction(async () => {
        this.loadingServices = true;
        const servicesTemp = await agent.Services.list();
        this.services2 = servicesTemp;
        this.shuffle(this.services2);
        const services = {
          CBT: [],
          CC: [],
          CRE: [],
          CT: [],
          DR: [],
          EL: [],
        };
        servicesTemp.forEach((element) => {
          switch (element.type) {
            case "CBT":
              services.CBT.push({ id: element.id, heading: element.heading });
              break;
            case "CC":
              services.CC.push({ id: element.id, heading: element.heading });
              break;
            case "CRE":
              services.CRE.push({ id: element.id, heading: element.heading });
              break;
            case "CT":
              services.CT.push({ id: element.id, heading: element.heading });
              break;
            case "DR":
              services.DR.push({ id: element.id, heading: element.heading });
              break;
            case "EL":
              services.EL.push({ id: element.id, heading: element.heading });
              break;
            default:
              services.CBT.push({ id: element.id, heading: element.heading });
              break;
          }
        });
        services.CBT.sort((a, b) =>
          a.heading > b.heading ? 1 : b.heading > a.heading ? -1 : 0
        );
        services.CC.sort((a, b) =>
          a.heading > b.heading ? 1 : b.heading > a.heading ? -1 : 0
        );
        services.CRE.sort((a, b) =>
          a.heading > b.heading ? 1 : b.heading > a.heading ? -1 : 0
        );
        services.CT.sort((a, b) =>
          a.heading > b.heading ? 1 : b.heading > a.heading ? -1 : 0
        );
        services.DR.sort((a, b) =>
          a.heading > b.heading ? 1 : b.heading > a.heading ? -1 : 0
        );
        services.EL.sort((a, b) =>
          a.heading > b.heading ? 1 : b.heading > a.heading ? -1 : 0
        );
        this.services = services;
        this.loadingServices = false;
      });
    } catch (error) {
      throw error;
    }
  };

  getService = (id) => {
    try {
      runInAction(async () => {
        this.loadingService = true;
        console.log("loading");
        const service = await agent.Services.service(id);
        switch (service.type) {
          case "CBT":
            service.type = "Cross Border Transactions";
            break;
          case "CC":
            service.type = "Corporate & Compliance";
            break;
          case "CRE":
            service.type = "Construction & Real Estate";
            break;
          case "CT":
            service.type = "Commercial Transactions";
            break;
          case "DR":
            service.type = "Dispute Resolution";
            break;
          case "EL":
            service.type = "Employment & Labor";
            break;
          default:
            service.type = "Cross Border Transactions";
            break;
        }
        service.content = this.credentialsToArray(service.content);
        this.service = service;
        console.log(service);
        this.loadingService = false;
      });
    } catch (error) {
      throw error;
    }
  };

  getNewsList = (page) => {
    try {
      runInAction(async () => {
        this.loadingNewsList = true;
        const newsList = await agent.News.list(page);
        this.newsList = newsList;
        console.log(newsList);
        this.loadingNewsList = false;
      });
    } catch (error) {
      throw error;
    }
  };

  getNews = (id) => {
    try {
      runInAction(async () => {
        this.loadingNews = true;
        const news = await agent.News.news(id);
        news.content = this.credentialsToArray(news.content);
        this.news = news;
        console.log(news);
        this.loadingNews = false;
      });
    } catch (error) {
      throw error;
    }
  };

  getClients = () => {
    try {
      runInAction(async () => {
        this.loadingClients = true;
        console.log(this.loadingClients);
        const clients = await agent.Clients.list();
        clients.sort((a, b) =>
          a.name > b.name ? 1 : b.name > a.name ? -1 : 0
        );
        this.clients = clients;
        this.loadingClients = false;
      });
    } catch (error) {
      throw error;
    }
  };

  submitContact = async (body) => {
    try {
      runInAction(async () => {
        this.loadingContact = true;
        await agent.Contact.contact(body);
        this.loadingContact = false;
      });
    } catch (error) {
      throw error;
    }
  };

  credentialsToArray(creds) {
    const array = creds.split(",,");
    return array;
  }

  getPeople = () => {
    try {
      runInAction(async () => {
        this.loadingPeople = true;
        const peopleTemp = await agent.People.list();
        const peopleList = {
          Seniors: [],
          Associates: [],
          OffCouncel: [],
        };
        peopleTemp.forEach((element) => {
          switch (element.type) {
            case "Seniors":
              peopleList.Seniors.push({
                name: element.name,
                picture: element.picture,
                credentials: this.credentialsToArray(element.credentials),
                description: element.description,
              });
              break;
            case "Associates":
              peopleList.Associates.push({
                id: element.id,
                name: element.name,
                picture: element.picture,
                credentials: this.credentialsToArray(element.credentials),
                description: element.description,
              });
              peopleList.Associates.sort((a, b) => a.id - b.id);
              break;
            case "Councel":
              peopleList.OffCouncel.push({
                name: element.name,
                picture: element.picture,
                credentials: this.credentialsToArray(element.credentials),
                description: element.description,
              });
              break;
            default:
              peopleList.Associates.push({
                name: element.name,
                picture: element.picture,
                credentials: this.credentialsToArray(element.credentials),
                description: element.description,
              });
              break;
          }
        });
        this.peopleList = peopleList;
        this.loadingPeople = false;
      });
    } catch (error) {
      throw error;
    }
  };
}
