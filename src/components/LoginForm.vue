<template>
  <div id="login_form" class="col-md-6">
  <form @submit.prevent="getFormValues">
    <div class="form-group">
      <label for="email">Email address</label>
      <input type="email" class="form-control" name="email" id="email" aria-describedby="emailHelp" placeholder="Enter email">
      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div class="form-group">
      <label for="password">Password</label>
      <input type="password" class="form-control" name="password" id="password" placeholder="Password">
    </div>
    <button type="submit" class="btn btn-primary btn-submit">Submit</button><br>
  </form>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "LoginForm",
  data: function () {
    return {
      email: '',
      password: '',
    }
  },
  // mounted: function (){
  //   if (Token != undefined || Token !=null){
  //     console.log(Token)
  //     this.$router.push('/list')
  //   }
  // },

  methods: {
      getFormValues: function (submitEvent) {
        this.email = submitEvent.target.elements.email.value
        this.password = submitEvent.target.elements.password.value
        axios({
          method: 'post',
          url: this.API_URL+'api/auth/login',
          data: {
            email: this.email,
            password: this.password
          }
        }).then(  (response )=> {
          // console.log(response)
          //     this.globalReadOnlyProperty = response.data.access_token
            // this.globalReadOnlyProperty = this.Bearer_token
            localStorage.setItem('Access_token',response.data.access_token)
            // console.log(this.Bearer_token)
this.loggedIn = true;
            // this.$router.push('/navbar')
              this.$router.push('/list')
        }
        )
            // .then(this.$router.push('/list'))
      }
    },
    // created: function (){
    //
    //
    // }
}
</script>

<style scoped>
#login_form{
  top: 50%;
  left: 25%;
  /*text-align: center;*/
}
.btn-submit{
  top: 50%;
  left: 25%;
  /*text-align: center;*/
}
</style>