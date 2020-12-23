<template>
<p></p>
</template>

<script>
import axios from "axios";
var Token = localStorage.getItem('Access_token')
export default {
name: "Logout",
  mounted() {
    if (this.TOKEN != null) {
      axios({
        method: 'post',
        url: this.API_URL+'api/auth/logout',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '+Token
        }
      }).then(response => {
        // console.log(response)
        // this.Bearer_token = '';
        if (response.status == 200){
          localStorage.removeItem('Access_token')
          this.$router.push("/login")
          window.location.reload()
        }
      }).catch(error => {
        // location.reload();
        console.log(error)
      });
    }
  }
}
</script>

<style scoped>

</style>