<template lang="">
  <div class="page" id="build-form" v-if="this.is_logged?.status == true">
    <sidebar />
    <button
      class="btn btn-primary"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasExample"
      aria-controls="offcanvasExample"
    >
      <i class="fa-solid fa-bars"></i>
    </button>

    <router-link to="/build" class="btn-close"></router-link>
    <form @submit.prevent="createSite()">
      <div class="first-row">
        <div class="site-info" v-if="this.show.site_details">
          <h6>Site details <span class="req_text"><span class="blue_star">*</span> represents required fields</span></h6>
          <div class="inp1">
            <label for="exampleFormControlInput1" class="form-label"
              >Website name<span class="blue_star">*</span></label
            >
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder=""
              required
              v-model="payload.site_name"
            />
          </div>
          <label for="exampleDataList" class="form-label">Website type<span class="blue_star">*</span></label>
          <input
            class="form-control inp2"
            list="datalistOptions"
            id="exampleDataList"
            placeholder="Type to search..."
            required
            v-model="payload.site_type"
          />
          <datalist id="datalistOptions">
            <option value="E-commerce"></option>
            <option value="Blog"></option>
            <option value="Drop shipping"></option>
            <option value="Membership"></option>
            <option value="Business"></option>
          </datalist>
          <button
            class="btn-next"
            @click.prevent="
              showLogo();
              hideDetails();
            "
          >
            Next
          </button>
        </div>
        <div class="logo" v-if="this.show.site_logo">
          <h6>Logo</h6>
          <div class="mb-3">
            <label for="formFile" class="form-label">Website logo</label>
            <input class="form-control" type="file" id="formFile" />
          </div>
          <button
            class="btn-next"
            @click.prevent="
              showExtra();
              hideLogo();
            "
          >
            Next
          </button>
        </div>
      </div>
      <div class="second-row">
        <div class="extra-info" v-if="this.show.extra_info">
          <div>
            <label for="exampleFormControlTextarea1" class="form-label"
              >Website description<span class="blue_star">*</span></label
            >
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="2"
              v-model="payload.site_description"
            ></textarea>
          </div>
          <div>
            <label for="exampleFormControlTextarea1" class="form-label"
              >Additional information(optional)</label
            >
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>

          <button
            class="btn-next"
            @click.prevent="
              showColors();
              hideExtra();
            "
          >
            Next
          </button>
        </div>
        <div class="colors" v-if="this.show.colors">
          <label for="exampleColorInput" class="form-label"
            >Primary color(text)</label
          >
          <input
            type="color"
            class="form-control form-control-color"
            id="exampleColorInput color1"
            value="#000000"
            title="Choose your color"
          />
          <label for="exampleColorInput" class="form-label"
            >Secondary color(background)</label
          >
          <input
            type="color"
            class="form-control form-control-color"
            id="exampleColorInput color2"
            value="#ffffff"
            title="Choose your color"
          />
          <label for="exampleColorInput" class="form-label"
            >Tertiary color</label
          >
          <input
            type="color"
            class="form-control form-control-color"
            id="exampleColorInput color3"
            value="#808080"
            title="Choose your color"
          />
          <button class="btn-start" @click.prevent="createSite(this.payload)">
            Start build
          </button>
        </div>
      </div>
    </form>
  </div>
  <div class="page" id="go_login" v-else>
    <div class="login_content">
      <h6>You are required to sign in before you can create a site</h6>
      <button class="btn_go" @click.prevent="go_Login()">Go to Sign in</button>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import sidebar from "@/components/Sidebar.vue";
export default {
  components: {
    sidebar,
  },
  data() {
    return {
      show: {
        site_details: true,
        site_logo: false,
        extra_info: false,
        colors: false,
      },
      payload: {
        site_name: "",
        site_description: "",
        client_id: JSON.parse(sessionStorage.getItem("loggedClient"))
          ?.client_id,
        site_type: "",
      },
    };
  },
  computed: {
    is_logged() {
      return JSON.parse(sessionStorage.getItem("is_logged"));
    },
  },
  methods: {
    ...mapActions(["createSite"]),
    showLogo() {
      this.show.site_logo = true;
    },
    hideDetails() {
      if (window.innerWidth < 540) {
        this.show.site_details = false;
      }
    },
    hideLogo() {
      if (window.innerWidth < 540) {
        this.show.site_logo = false;
      }
    },
    hideExtra() {
      if (window.innerWidth < 540) {
        this.show.extra_info = false;
      }
    },
    hideColors() {
      if (window.innerWidth < 540) {
        this.show.colors = false;
      }
    },
    showExtra() {
      this.show.extra_info = true;
    },
    showColors() {
      this.show.colors = true;
    },
    createSite() {
      this.$store.dispatch("createSite", this.payload);
    },
    go_Login() {
      this.$router.push({ name: "signin" });
    },
  },
};
</script>
<style scoped>
template {
  display: flex;
}
@keyframes slide {
  0% {
    transform: translateY();
  }
  100% {
    transform: translateY(-100vh);
  }
}

#build-form,
#design {
  justify-content: center;
  align-items: center;
  z-index: +6;
}

form {
  width: 100vw;
  height: 100vh;
  padding: 1rem 1rem 1rem 1rem;
  display: flex;
  flex-direction: column;
  color: white;
  text-align: left;
  position: relative;
}

form h6 {
  font-size: xx-large;
}

form label {
  margin-top: 1.5rem;
}

form button {
  font-size: 2.5rem;
  border: none;
  background: none;
  border: 0.15rem solid white;
  border-radius: 0.5rem;
  margin-top: 1rem;
  color: white;
  padding: 0 1rem;
}

.cancel {
  text-decoration: none;
  position: absolute;
  top: 1rem;
  right: 1rem;
  color: white;
}

.btn-next,
.btn-start {
  width: fit-content;
  height: fit-content;
  font-size: medium;
  margin-left: auto;
}

.first-row,
.second-row {
  width: 100vw;
  height: 50vh;
  display: flex;
  padding: 1rem;
  padding-right: 3rem;
  gap: 2rem;
}

.site-info,
.extra-info,
.logo,
.colors {
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 1rem;
  padding: 0 1rem;
  position: relative;
}

.site-info input {
  width: 100%;
}

.site-info {
  width: 30%;
}
.logo {
  width: 70%;
}
.extra-info {
  width: 70%;
}

.colors {
  width: 30%;
}

.btn-next,
.btn-start {
  position: absolute;
  bottom: 1rem;
  right: 1rem;
}

#go_login {
  display: grid;
  place-items: center;
}
.login_content h6 {
  color: white;
  font-size: xx-large;
}
.btn-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: +7;
  color: white;
}

.btn,
.btn:active {
  position: absolute;
  top: 1rem;
  left: 0.5rem;
  background: none;
  border: none;
  scale: 1.5;
  z-index: 8;
}
.req_text {
    font-size: large;
  }

  .blue_star {
    color: aqua;
  }

@media screen and (max-width: 480px) {
  .first-row {
    flex-direction: column;
  }
  .second-row {
    flex-direction: column;
  }
  .site-info > h6,
  .logo > h6,
  .extra-info > h6,
  .colors > h6 {
    display: none;
  }
  .site-info,
  .logo,
  .extra-info,
  .colors {
    width: 100%;
    font-size: small;
    height: fit-content;
    padding-bottom: 3rem;
  }
  form input {
    font-size: small;
  }
  .site-info input,
  label {
    margin: 0;
  }
  .form-label {
    margin-top: 1rem;
  }

  .btn-next {
    font-size: small;
    bottom: 0.2rem;
    right: 0.2rem;
  }
  
}
</style>
