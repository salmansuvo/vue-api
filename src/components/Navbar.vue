<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#"><img alt="Vue logo" id="img" src="../assets/logo.png"></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active" v-if="loggedIn">
          <a class="nav-link"><router-link to="/list"> Home </router-link><span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item" v-if="!loggedIn">
          <a class="nav-link"><router-link to="/login"> Login </router-link></a>
        </li>
        <li class="nav-item" v-if="loggedIn">
          <a class="nav-link "><router-link to="/logout"> Logout </router-link>  </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
var Token = localStorage.getItem('Access_token')
export default {
name: "Navbar",
  computed:{
   loggedIn(){
     return (Token == undefined || Token == null)?false:true
   }
  }
}
</script>

<style scoped>
    #navbarNav{
      float: right!important;
    }
</style>