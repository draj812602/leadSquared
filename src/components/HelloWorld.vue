<template>
  <div class="container">
  <div class="form-group">
    <router-link to="/register">
    <button class="btn btn-primary btn-lg btn-block">Regiser / Singup</button>
    </router-link>
    <br>
    
    <router-link to="/user">
    <button class="btn btn-success btn-lg btn-block">Get users</button>
    </router-link>
  </div>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },

}

</script>

<style scoped>
.container{
  margin-top:50px
}
</style>
