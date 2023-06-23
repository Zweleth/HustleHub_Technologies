import { createStore } from "vuex";
import axios from "axios";
import emailjs from "@emailjs/browser";
const URL = "https://hustlehub.onrender.com/";

export default createStore({
  state: {
    sites: null,
    site: null,
    clients: null,
    client: null,
    loggedClient: JSON.parse(sessionStorage.getItem("loggedClient")),
    is_logged: JSON.parse(sessionStorage.getItem("is_logged")),
    message: null,
    statuses: null,
    status: null,
    OTP: null,
    statusEmail : [
      {
        subject : "Development status update(Designing)",
        message : "Our team is currently in the process of designing your website, and we are excited to present you with a range of ideas. Once we share the concepts, you will have the opportunity to select the one that resonates with you the most, and we will proceed accordingly."
      },
      {
        subject : "Development status update(Design complete)",
        message : "Our team has completed the design phase and we are ready to showcase the ideas to you. Before we proceed with development, we kindly request your feedback and approval. If you are not entirely satisfied with the current design, we would be more than happy to schedule a re-visit, allowing our team to make further improvements based on your input."
      },
      {
        subject : "Development status update(Re-designing)",
        message : "We are currently in the process of making some updates to the design. We understand the importance of aligning it with your vision and preferences. This stage will be iterative, with the opportunity to provide feedback and request revisions. Our aim is to continue refining the design until it fully meets your expectations and you are completely satisfied with the final result."
      },
      {
        subject : "Development status update(Development)",
        message : "Our team has commenced the development phase of your website, using the approved design as the foundation. We are working diligently to bring your vision to life, and you can expect a fully finished site in a short timeframe. Our experts are dedicated to delivering a high-quality result that aligns with your expectations, and we are excited to unveil the final product to you soon."
      },
      {
        subject : "Development status update(Development complete)",
        message : "We are delighted to inform you that your website is now complete and ready for your review. We encourage you to thoroughly test it and provide any feedback regarding necessary fixes or adjustments. If there are areas that require further attention, please request a re-visit, and our team will promptly address them. On the other hand, if you find the website to be perfect and meet your expectations, we can proceed with starting the trial phase."
      },
      {
        subject : "Development status update(Re-development)",
        message : "We are actively working on implementing the necessary fixes and updates to ensure that the website aligns perfectly with your preferences. Our team is dedicated to fine-tuning every aspect until the site is to your utmost satisfaction. Your feedback and input are invaluable to us during this process, and we will continue refining the site until it meets your exact liking and requirements."
      },
      {
        subject : "Development status update(Live - 30 day trial)",
        message : "We are excited to announce that your website has been successfully completed and is now live. As part of our commitment to ensuring your satisfaction, we offer you a 30-day trial period to experience the site in action and evaluate its impact on your business. This trial period provides you with an opportunity to fully assess its performance and benefits before making a purchase commitment. Once the 30-day trial period ends, to keep the site live and accessible, we kindly request that you proceed with purchasing the website."
      },
      {
        subject : "Development status update(Paused - awaiting payment)",
        message : "To ensure the continuity of our services and manage storage resources efficiently, we kindly request that you make the payment for your website. Until the payment is received, the site will remain temporarily closed. We understand that circumstances may change, so if you no longer wish to proceed, please let us know as soon as possible. However, in the absence of payment or communication regarding your intention, we may be required to proceed with permanently shutting down the site. Your prompt attention to this matter is greatly appreciated."
      },
      {
        subject : "Development status update(Live)",
        message : "Congratulations! Your website is now live and fully functional. We sincerely appreciate the opportunity to work with you throughout this process, and we are confident that your new website will serve as a valuable asset to your business. Thank you for entrusting us with your project, and we look forward to witnessing the positive impact it will have on your online presence and success."
      }

    ],
    
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
    },
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
    },
    setOTP(state, OTP) {
      state.OTP = OTP;
    },
  },
  actions: {
    async signIn(context, payload) {
      let res = await axios.post(`${URL}login`, payload);

      let { result, msg, err } = await res.data;

      if (result) {
        let value = {
          status: true,
        };
        sessionStorage.setItem("loggedClient", JSON.stringify(result));
        // console.log('statement reached 1');
        context.commit(
          "setLoggedClient",
          JSON.parse(sessionStorage.getItem("loggedClient"))
        );
        context.commit("setMessage", msg);

        sessionStorage.setItem("is_logged", JSON.stringify(value));
        context.commit(
          "setIs_Logged",
          JSON.parse(sessionStorage.getItem("is_logged"))
        );
        // console.log(result.first_name);
      } else {
        context.commit("setMessage", err);
        console.log(err);
      }
    },
    async signOut(context, payload) {
      let value = {
        status: false,
      };
      sessionStorage.setItem("is_logged", JSON.stringify(value));
      context.commit(
        "setIs_Logged",
        JSON.parse(sessionStorage.getItem("is_logged"))
      );
      sessionStorage.setItem("loggedClient", null);
    },
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
        alert(msg)
      } else {
        context.commit("setMessage", err);
        alert(msg)
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

    async fetchClientsSites(context, id) {
      try {
        let res = await fetch(`${URL}sites/${id}`);
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

    async fetchSite(context, id) {
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
    async statusUpdateMin(context, id) {
      let res = await axios.put(`${URL}status-updatemin/${id}`);
      let { msg, err } = await res.data;
      if (msg) {
        context.commit("setMessage", msg);
        context.dispatch("fetchSites");
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
        context.dispatch("fetchSites");
        console.log(msg);
        console.log(id)
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
        genOTP = Math.floor(Math.random() * 99999 + 10000);
      }
      context.commit("setOTP", genOTP);
      var params = {
        first_name: payload.first_name,
        email_add: payload.email_add,
        message: `This is your OTP ${genOTP} valid for only 5mins from now, please verify your account`,
      };
      const siD = "service_qm84rjv";
      const tID = "template_g1bcgup";
      const pKey = "9CG72XgSLO1Y_FoRs";
      console.log(params);
      emailjs.send(siD, tID, params, pKey);
      // .then((response) => {
      //    console.log('SUCCESS!', response.status, response.text);
      // }, (err) => {
      //    console.log('FAILED...', err);
      // });
    },

    async sendStatusEmailSkip(context, payload) {
      
      var params = {
        first_name: payload[0]?.first_name,
        email_add: payload[0]?.email_add,
        site_name: payload[0]?.site_name,
        subject: this.state.statusEmail[payload[0]?.status_id].subject,
        message: this.state.statusEmail[payload[0]?.status_id].message
      };
      const siD = "service_qm84rjv";
      const tID = "template_1be2mat";
      const pKey = "9CG72XgSLO1Y_FoRs";
      emailjs.send(siD, tID, params, pKey);
      // .then((response) => {
      //    console.log('SUCCESS!', response.status, response.text);
      // }, (err) => {
      //    console.log('FAILED...', err);
      // });
    },

    async sendStatusEmail(context, payload) {
      
      var params = {
        first_name: payload.first_name,
        email_add: payload.email_add,
        site_name: payload.site_name,
        subject: this.state.statusEmail[payload.status_id-1].subject,
        message: this.state.statusEmail[payload.status_id-1].message
      };
      const siD = "service_qm84rjv";
      const tID = "template_1be2mat";
      const pKey = "9CG72XgSLO1Y_FoRs";
      emailjs.send(siD, tID, params, pKey);
      // .then((response) => {
      //    console.log('SUCCESS!', response.status, response.text);
      // }, (err) => {
      //    console.log('FAILED...', err);
      // });
    },

    async sendStatusEmailRev(context, payload) {
      
      var params = {
        first_name: payload.first_name,
        email_add: payload.email_add,
        site_name: payload.site_name,
        subject: this.state.statusEmail[payload.status_id-3].subject,
        message: this.state.statusEmail[payload.status_id-3].message
      };
      const siD = "service_qm84rjv";
      const tID = "template_1be2mat";
      const pKey = "9CG72XgSLO1Y_FoRs";
      emailjs.send(siD, tID, params, pKey);
      // .then((response) => {
      //    console.log('SUCCESS!', response.status, response.text);
      // }, (err) => {
      //    console.log('FAILED...', err);
      // });
    },
  },
});
