<template lang="">
  <div class="checkOTP" v-if="showOTP">
    <h6>Enter 5-digit OTP</h6>
    <form action="">
      <input type="text" placeholder="00000" maxlength="5" v-model="inputOTP" />
    </form>
    <p>{{ this.errOTP }}</p>
    <button @click.prevent="back()" class="btn-close"></button>
    <button @click.prevent="checkOTP()" class="btn-verify">Verify</button>
  </div>
  <div class="loading" v-if="this.loading === true">
    <div class="spinner"></div>
  </div>
  <div class="page" id="signup">
    <div class="signup-text">
      <h6>Sign up</h6>
      <p>
        You don't have an account with us? You're missing out go ahead sign-up
        right now and take the first step in taking your local business to the
        next level
      </p>
    </div>
    <div class="signup-form">
      <form class="signup_form" @submit.prevent="sendOTP()">
        <div class="form-floating">
          <input
            type="text"
            class="form-control"
            id="floatingText"
            placeholder="name@example.com"
            required
            v-model="payload.first_name"
          />
          <label for="floatingInput">Firstname</label>
        </div>
        <div class="form-floating">
          <input
            type="text"
            class="form-control"
            id="floatingText"
            placeholder="name@example.com"
            required
            v-model="payload.last_name"
          />
          <label for="floatingInput">Lastname</label>
        </div>
        <div class="form-floating">
          <input
            type="text"
            class="form-control"
            id="floatingInput"
            placeholder="0712345678"
            required
            v-model="payload.cellphone"
          />
          <label for="floatingInput">Cellphone number</label>
        </div>
        <div class="form-floating">
          <input
            type="email"
            class="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            required
            v-model="payload.email_add"
          />
          <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating">
          <input
            type="password"
            class="form-control"
            id="floatingPassword"
            placeholder="Password"
            required
            v-model="payload.client_pass"
          />
          <label for="floatingPassword">Password</label>
        </div>
        <div class="buttons">
          <p>
            Already an account?
            <router-link to="/signin">Sign in</router-link>
          </p>
          <button type="submit" class="btnSign-in">Sign up</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      payload: {
        first_name: "",
        last_name: "",
        cellphone: "",
        email_add: "",
        client_pass: "",
      },
      OTP: 0,
      inputOTP: null,
      showOTP: false,
      errOTP: null,
      loading: false,
    };
  },
  computed: {
    message() {
      return this.$store.state.message;
    },
  },
  created() {
    // this.fetchUsers();
  },
  methods: {
    ...mapActions(["fetchClients"]),

    sendOTP() {
      this.$store.dispatch("sendOTP", this.payload);
      this.showOTP = true;
    },
    back() {
      this.showOTP = false
    },
    checkOTP() {
      if (this.inputOTP == this.$store.state.OTP) {
        this.showOTP = false;
        this.loading = true;
        this.signUp();
      } else {
        this.errOTP = "Incorrect OTP, try again";
      }
    },
    login() {},
    async signUp() {
      await this.$store.dispatch("signUp", this.payload);
        this.loading = false;
        this.$router.push({ name: "signin" });
    },
  },
};
</script>
<style scoped>
.signup-text {
  display: flex;
  flex-direction: column;
  width: 45vw;
  margin: 0 4rem;
  color: white;
}
.signup-text h6 {
  font-size: x-large;
}

.signup-form {
  display: grid;
  place-items: center;
  width: 50vw;
  border-left: 0.15rem solid white;
  height: 75vh;
}

.signup_form {
  width: 25rem;
  height: 30rem;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: white;
  justify-content: center;
}

.form-floating {
  margin: 0 1rem;
}

.form-floating input:focus label,
.form-floating input:active label {
  background-color: none;
  box-shadow: none;
  color: aqua;
}

.form-floating input:hover,
.form-floating input:focus {
  outline: none;
  background: none;
  border-color: aqua;
  -webkit-box-shadow: none;
  box-shadow: none;
}

.form-floating input {
  background: none;
  border: none;
  outline: none;
  border-radius: 0;
  border-bottom: 0.1rem solid white;
  color: white;
}

form button {
  margin-top: 2rem;
  color: white;
  padding: 0.3rem 1rem;
  background: none;
  border: none;
  border: 0.1rem solid white;
  border-radius: 0.5rem;
}

.checkOTP {
  width: 100vw;
  height: 100vh;
  z-index: 6;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  color: white;
}
.checkOTP input {
  background: none;
  font-size: 10rem;
  width: 31rem;
  border: none;
  color: white;
}

.checkOTP h6 {
  font-size: 2rem;
}

.checkOTP p {
  font-size: 1rem;
}
.btn-verify {
  background: none;
  border: 0.15rem solid white;
  color: white;
  padding: 0.5rem 1rem;
  font-size: larger;
  border-radius: 0.4rem;
}

.btn-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
}
.loading {
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: grid;
  place-items: center;
  position: absolute;
  z-index: 6;
}
.spinner {
  width: 56px;
  height: 56px;
  display: grid;
  border: 4px solid #0000;
  border-radius: 50%;
  border-right-color: gray;
  animation: spinner-a4dj62 1s infinite linear;
}

.spinner::before,
.spinner::after {
  content: "";
  grid-area: 1/1;
  margin: 2px;
  border: inherit;
  border-radius: 50%;
  animation: spinner-a4dj62 2s infinite;
}

.spinner::after {
  margin: 8px;
  animation-duration: 3s;
}

@keyframes spinner-a4dj62 {
  100% {
    transform: rotate(1turn);
  }
}
</style>
