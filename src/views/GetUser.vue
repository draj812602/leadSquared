<template>
<div class="container">

  <div v-if="users[0].id" class="form-group offset-lg-8 offset-md-8 offset-lg-xl col-md-4 col-lg-4 col-xl-4 search">
    <div >
    <h3>Search user by name  </h3>
<input type="text" class="form-control"
 v-model="search"
>
    </div>
  </div>
  <div class="container userData">
  <div v-for="user in filteredUser" :key="user.id" id="body">
    <div class="card">
      <div class="card-header">
        <a class="card-link" data-toggle="collapse" :href="'#'+user.first_name">
        {{user.first_name+ " " +user.last_name}}
        </a>
      </div>
      <div :id="user.first_name" class="collapse hide" data-parent="#body">
        <ul class="list-group">
  <li class="list-group-item">{{user.gender}}</li>
  <li class="list-group-item">{{user.dob}}</li>
  <li class="list-group-item">{{user.email}}</li>
  <li class="list-group-item">{{user.phone}}</li>
  <li class="list-group-item"><a :href="user.website"> {{user.website}}</a></li>
  <li class="list-group-item">{{user.address}}</li>
</ul>
      </div>
    </div>
  </div>
  </div>
</div>
</template>
<script>
import axios from 'axios'
import key from '../../src/Token.json'
export default {
  data(){
    return{
      search:'',
      users:[],
    }
  },
  created(){
    const token = key.Access_token
 axios.get('https://gorest.co.in/public-api/users?access-token='+token+'')
 .then((res)=>{
   if(res.data.result.name==="Unauthorized")
{
  alert(res.data.result.name)
}
else{
 console.log(res)
   this.users=res.data.result;
}
  
 })
 .catch(err=> console.log(err))


  },
  computed: {
    filteredUser:function()
    {
       var thisValue=this;
       
       return this.users.filter(function(user){return user.first_name.toLowerCase().indexOf(thisValue.search.toLowerCase())>=0;});
     
    }
  }
    
}
</script>

<style scoped>
.userData{
     display:block;
    height:500px;
    overflow:auto
}
</style>