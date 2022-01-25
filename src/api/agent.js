import axios from "axios";
import { toast } from "react-toastify";


axios.interceptors.response.use(undefined, (error) => {
    if (error.message === "Network Error" && !error.response) {
      toast.error("Network error -- make sure API server is running");
      console.log(error);
    }
    console.log(error);
    const { status, data } = error;
  
    if (error.status === 401) {
        toast.error("Data is unauthorized");
    }
    if (status === 500) {
      toast.error("Server Error");
    }
    throw error.response;
  });

axios.defaults.baseURL = "https://server.shawnnovel.com/api";

const responseBody = (response) => response.data;

const request = {
    get: (url, params) => axios.get(url, params).then(responseBody),
    post: (url, body) => axios.post(url, body).then(responseBody),
};

const Services = {
    list : () => request.get("/services"),
    service : (id) => request.get(`/service/${id}`)
}
const News = {
    list : (page) => request.get('/newsList', { params: { page: page } }),
    news : (id) => request.get(`/news/${id}`)
}
const Clients = {
    list : () => request.get("/clients"),
}
const Contact = {
    contact : (body) => request.post("/user/register", body)
}
const People = {
    list : () => request.get("/people")
}

const agent = { Services, News, Clients, Contact, People};

export default agent;
