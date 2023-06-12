import { createStore } from 'vuex'
import axios from "axios";
import emailjs from '@emailjs/browser';
const URL = "https://hustlehub.onrender.com/";

export default createStore({
  state: {
    sites: null,
    site: null,
    clients: null,
    client: null,
    loggedClient: null,
    is_logged: JSON.parse(sessionStorage.getItem("is_logged")),
    message: null,
    statuses: null,
    status: null,
    OTP: null
  },
  getters: {
    sites(state) {
      return state.sites;
    },
    site(state) {
      return state.site;
    },
    clients(state) {
      return state.clients;
    },
    client(state) {
      return state.client;
    },
    is_logged(state) {
      return state.is_logged;
    },
    statuses(state) {
      return state.statuses;
    },
    status(state) {
      return state.status;
    },
    OTP(state) {
      return state.OTP;
    }
  },
  mutations: {
    setSites(state, sites) {
      state.sites = sites;
    },
    setSite(state, site) {
      state.site = site;
    },
    setClients(state, clients) {
      state.clients = clients;
    },
    setClient(state, client) {
      state.client = client;
    },
    setLoggedClient(state, loggedClient) {
      state.loggedClient = loggedClient;
    },
    setIs_Logged(state, is_logged) {
      state.is_logged = is_logged;
    },
    setMessage(state, message) {
      state.message = message;
    },
    setStatuses(state, statuses) {
      state.statuses = statuses;
    },
    setStatus(state, status) {
      state.status = status;
    }
    ,
    setOTP(state, OTP) {
      state.OTP = OTP;
    }
  },
  actions: {
    async signIn(context, payload) {
      let res = await axios.post(`${URL}login`, payload);

      let { result, msg, err } = await res.data;

      if (result) {
        let value = {
          status: true
        }
        sessionStorage.setItem("loggedClient", JSON.stringify(result))
        // console.log('statement reached 1');
        context.commit("setLoggedClient", JSON.parse(sessionStorage.getItem("loggedClient")));
        context.commit("setMessage", msg);
        
        sessionStorage.setItem("is_logged", JSON.stringify(value))
        context.commit("setIs_Logged", JSON.parse(sessionStorage.getItem("is_logged")));
        // console.log(result.first_name);
      } else {
        context.commit("setMessage", err);
        console.log(err);
      }
    },
    async signOut(context, payload) {
      let value = {
        status: false
      }
      sessionStorage.setItem("is_logged", JSON.stringify(value))
      context.commit("setIs_Logged", JSON.parse(sessionStorage.getItem("is_logged")));
      sessionStorage.setItem("loggedClient", null)
      

    }
    ,
    async signUp(context, payload) {
      let res = await axios.post(`${URL}register`, payload);
      let { result, msg, err } = await res.data;
      if (result) {
        context.commit("setClient", result);
        context.commit("setMessage", msg);
      } else {
        context.commit("setMessage", err);
      }
    },
    

    async updateClient(context, payload) {
      let res = await axios.put(`${URL}client/${payload.client_id}`, payload);
      let { msg, err } = await res.data;
      msg
        ? context.commit("setMessage", msg)
        : context.commit("setMessage", err);
      context.dispatch("fetchClients");
    },
    
    async deleteClient(context, id) {
      let res = await axios.delete(`${URL}client/${id}`);
      let { msg, err } = await res.data;
      if (msg) {
        context.dispatch("fetchUsers");
        context.commit("setMessage", msg);
      } else {
        context.commit("setMessage", err);
      }
    },
    

    async fetchClient(context, id) {
      try {
        let res = await fetch(`${URL}client/${id}`);
        let data = await res.json();
        console.log(data);
        context.commit(
          "setClient",
          data.results.length !== 0 ? data.results : null
        );
      } catch (e) {
        console.log(e);
      }
    },

    async fetchClients(context) {
      try {
        let res = await fetch(URL + "clients");
        let data = await res.json();
        console.log(data);
        context.commit(
          "setClients",
          data.results.length !== 0 ? data.results : null
        );
      } catch (e) {
        console.log(e);
      }
    },
    async createSite(context, payload) {
      let res = await axios.post(`${URL}sites/${payload.client_id}`, payload);
      let { result, msg, err } = await res.data;
      if (result) {
        context.commit("setSite", result);
        context.commit("setMessage", msg);
      } else {
        context.commit("setMessage", err);
      }
    },

    async fetchSites(context) {
      try {
        let res = await fetch(URL + "sites");
        let data = await res.json();
        console.log(data);
        context.commit(
          "setSites",
          data.results.length !== 0 ? data.results : null
        );
      } catch (e) {
        console.log(e);
      }
    },

    async deleteSite(context, id) {
      let res = await axios.delete(`${URL}site/${id}`);
      let { msg, err } = await res.data;
      if (msg) {
        context.dispatch("fetchSites");
        context.commit("setMessage", msg);
      } else {
        context.commit("setMessage", err);
      }
    },

    async updateSite(context, id, payload) {
      let res = await axios.put(`${URL}site/${id}`, payload);
      let { msg, err } = await res.data;
      msg
        ? context.commit("setMessage", msg)
        : context.commit("setMessage", err);
    },

    async fetchPerfume(context, id) {
      try {
        let res = await fetch(`${URL}site/${id}`);
        let data = await res.json();
        console.log(data);
        context.commit(
          "setSite",
          data.results.length !== 0 ? data.results : null
        );
      } catch (e) {
        console.log(e);
      }
    },

    async fetchStatuses(context, id) {
      try {
        let res = await fetch(`${URL}statuses`);
        let data = await res.json();
        console.log(data);
        context.commit(
          "setStatuses",
          data.results.length !== 0 ? data.results : null
        );
      } catch (e) {
        console.log(e);
      }
    },

    async fetchStatus(context, id) {
      try {
        let res = await fetch(`${URL}status/${id}`);
        let data = await res.json();
        console.log(data);
        context.commit(
          "setStatus",
          data.results.length !== 0 ? data.results : null
        );
      } catch (e) {
        console.log(e);
      }
    },

    async createStatus(context, payload) {
      let res = await axios.post(`${URL}status`, payload);
      let { result, msg, err } = await res.data;
      if (result) {
        context.dispatch("fetchStatuses", this.state.loggedUser.user_id);
        context.commit("setMessage", msg);
        console.log(result);
      } else {
        context.commit("setMessage", err);
      }
    },

    async deleteStatus(context, id) {
      let res = await axios.delete(`${URL}status/${id}`);
      let { msg, err } = await res.data;
      if (msg) {
        context.dispatch("fetchStatuses");
        context.commit("setMessage", msg);
      } else {
        context.commit("setMessage", err);
      }
    },

    async statusUpdate(context, id) {
      let res = await axios.put(`${URL}status-update/${id}`);
      let { msg, err } = await res.data;
      if (msg) {
        context.commit("setMessage", msg);
        context.dispatch("fetchSites", this.state.loggedClient.client_id);
        console.log(msg);
      } else {
        context.commit("setMessage", err);
      }
    },
    

    async statusUpdateSkip(context, id) {
      let res = await axios.put(`${URL}status-update2/${id}`);
      let { msg, err } = await res.data;
      if (msg) {
        context.commit("setMessage", msg);
        context.dispatch("fetchSites", this.state.loggedClient.client_id);
        console.log(msg);
      } else {
        context.commit("setMessage", err);
      }
    },

    async statusUpdate1(context, id) {
      let res = await axios.put(`${URL}status-update/${id}`);
      let { msg, err } = await res.data;
      if (msg) {
        context.commit("setMessage", msg);
        console.log(msg);
      } else {
        context.commit("setMessage", err);
      }
    },

    async statusUpdate2(context, id) {
      let res = await axios.put(`${URL}status-update2/${id}`);
      let { msg, err } = await res.data;
      if (msg) {
        context.commit("setMessage", msg);
        console.log(msg);
      } else {
        context.commit("setMessage", err);
      }
    },
    async sendOTP(context, payload) {
      let genOTP = 100000;
      while (genOTP > 99999) {
        genOTP = Math.floor((Math.random() * 99999) + 10000);
      }
      context.commit("setOTP", genOTP)
      var params = {
        first_name: payload.first_name,
        email_add: payload.email_add,
        message: `This is your OTP ${genOTP} valid for only 5mins from now, please verify your account`
      };
      const siD = "service_qm84rjv";
      const tID = "template_g1bcgup";
      const pKey = "9CG72XgSLO1Y_FoRs"
      console.log(params)
      emailjs.send(siD,tID, params, pKey)
      // .then((response) => {
      //    console.log('SUCCESS!', response.status, response.text);
      // }, (err) => {
      //    console.log('FAILED...', err);
      // });
    }







  }
}
  
)

