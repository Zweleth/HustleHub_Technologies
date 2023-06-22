<template lang="">
  <div class="loading" v-if="this.loading === true">
    <div class="spinner"></div>
  </div>
  <div class="page" id="signin">
    <div class="signin-text">
        <h6>Sign in!</h6>
        <p>Please sign in in order to get full access of our sites functionalities, if you don't have an account with us make sure you create one and don't miss out</p>
    </div>
    <div class="signin-form">
      <form @submit.prevent="signIn(); test();">
        <div class="user-icon">
          <i class="fa-solid fa-user"></i>
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
            Don't have an account?
            <router-link to="/signup">Signup</router-link>
          </p>
          <button type="submit" class="btnSign-in">Sign in</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      payload: {
        email_add: "",
        client_pass: ""
      },
      loading: false
    };
  },
  computed: {
    loggedClient(){
        return this.$store.state.loggedClient
    },
    logged() {
      return localStorage.getItem('logged')
    },
    is_logged() {
      return this.$store.state.is_logged
    }
  
  },
  methods: {
   async signIn() {
      await
        this.$store.dispatch('signIn', this.payload);
        if (this.loggedClient?.is_admin == 'false') {
          this.$router.push({ name: "mysites" });
        }else {
          this.$router.push({ name: "admin" });
        }
       
        
    },
    test() {
      this.loading = true;
    },
    login() {
      localStorage.setItem('logged', true)
    },
    logout() {
      localStorage.setItem('logged', false)
    }

  }
};
</script>
<style scoped>
.signin-text {
    display: flex;
    flex-direction: column;
    width: 45vw;
    margin: 0 4rem;
    color: white;
}
.signin-text h6{
    font-size: x-large;
}

.signin-form {
    display: grid;
    place-items: center;
    width: 50vw;
    border-left: 0.15rem solid white;
    height: 75vh;
}

form {
  width: 25rem;
  height: 30rem;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: white;
}

.user-icon {
  height: 10rem;
  display: grid;
  place-items: center;
}

.user-icon i {
  scale: 6;
}

.form-floating {
  margin: 0 1rem;
}

.form-floating input:focus label,
.form-floating input:active label {
    background-color: none;
    box-shadow: none;
    color: aqua
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

/* loader */
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
