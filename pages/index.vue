<template>
  <main>
    <div class="hero"></div>
    <div class="container mb-5 home-container">
      <div class="row justify-content-center">
        <div class="col-md-4 mt-5">
          <Login />
        </div>
        <div class="col-md-4 mt-5">
          <Signup />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import '../components/Login.vue'
import '../components/Signup.vue'
export default {
  components: ['Login', 'Signup'],
  created(){
    if(this.$cookies.get('token')){
      this.$router.push('/booking')
    }
  }
}
</script>


<style lang="scss">
.hero {
  background-image: url('https://www.vecchievie.it/sites/default/files/galleriapercorsi/rifugio-CAI-presso-lago-nero.jpg');
  height: 60vh;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center bottom;
}
.home-container {
  margin-top: -25vh;
}
</style>
