<template>
  <div id="login-app">

    <div class="login-page">
      
      <transition name="fade">
        <div v-if="!registerActive" class="wallpaper-login"></div>
      </transition>
      <div class="wallpaper-register"></div>
  
      <div class="container">
        <div class="row">
            <div class="col-lg-5 col-md-6 col-sm-8 mx-auto login-warp">

              <div class="login-top">
                <img src="../assets/logo.png">
                <h1>{{ title }}</h1>
              </div>
              <div v-if="!registerActive" class="card login" v-bind:class="{ error: emptyFields }">
                <form class="form-group" action="">
                    <div class="email-group-box group-box">
                      <label>Email</label>
                      <input v-model="emailLogin" type="email" class="form-control" placeholder="you@example.com" required>
                    </div>
                    <div class="email-password-box group-box">
                      <label>Password</label>
                      <input v-model="passwordLogin" type="password" class="form-control" placeholder="Password" required>
                    </div>
                    <div class="remember">
                      <div class="left">
                        <input type="checkbox"> Keep me logged in
                      </div>
                      <div class="right">
                        <a href="#">Forgot password?</a>
                      </div>
                    </div>
                    <input type="submit" value="Sign in" class="btn btn-primary" @click="doLogin">
                </form>
              </div>

            </div>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
export default {
   data() {
    return {
      title:"Sign in to Task Manager",
      registerActive: false,
      emailLogin: "",
      passwordLogin: "",
      emptyFields: false
    }
  },
  methods: {
    doLogin(e) {
      e.preventDefault();
      if (this.emailLogin === "" || this.passwordLogin === "") {
          this.emptyFields = true;
      } else {
       this.$router.push({ name: 'Dashboard' })
      }
    }
  }
}
</script>