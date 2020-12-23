<template>
  <div>
    <h3 class="text-center">Products list</h3>
    <button class="btn btn-success float-lg-right"><router-link to="/create" class="text-white"> Create Product </router-link></button>
    <table class="table">
      <thead class="thead-dark">
      <tr>
        <th scope="col">#</th>
        <th scope="col">Image</th>
        <th scope="col">Title</th>
        <th scope="col">Price</th>
        <th scope="col">Description</th>
        <th scope="col">Actions</th>
      </tr>
      </thead>
      <tbody>
      <tr  v-for="product in products" :key="product.id">
        <th scope="row">{{ product.id }}</th>
        <td><img :src="product.image_url" alt="SALMAN" height="55px" width="95px"></td>
        <td>{{ product.title }}</td>
        <td>{{ product.price }}</td>
        <td>{{ product.description }}</td>
        <td><span class="btn btn-warning" @click="edit(product.id)">edit</span><span class="btn btn-danger" @click="del(product.id)">delete</span></td>
      </tr>
      </tbody>
    </table>
  </div>

</template>

<script>
var Token = localStorage.getItem('Access_token')
import axios from 'axios';
export default {
  name: "ProductsList",

  data: function (){
    return {
      products : []
    }
  },
  mounted: function (){

    axios({
            method: 'post',
            url: this.API_URL+'api/products/list',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer '+Token//this.TOKEN
            }
            }).then(  (response )=> {
              // console.log(this)
              this.products = response.data
            }
    )
  },

  methods: {
    del: function (id){
      if (confirm('Are you sure you want to delete this product?')){
        axios.delete(this.API_URL+'api/products/'+id)
          .then(  (response ) => {
            if (response.status == 200) {
              const index = this.products.findIndex(product => product.id === id); // find the post index
              if (~index) // if the post exists in array
                this.products.splice(index, 1) //delete the post
            }else{
              this.$router.push('/login');
            }
          })
      }
    },
    edit: function (id){
      this.$router.push('/edit/'+id);
    }
  }
}
</script>

<style scoped>

</style>