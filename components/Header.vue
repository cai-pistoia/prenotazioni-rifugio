<template>
  <nav class="navbar navbar-light bg-light">
    <div class="container-fluid">
      <img
        class="logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Cai_Club_Alpino_Italiano_Stemma.png/949px-Cai_Club_Alpino_Italiano_Stemma.png"
        alt="Logo Cai"
      />
      <a class="navbar-brand" href="#">Prenotazioni bivacco</a>
      <button
        v-if="$store.state.isLoggedIn"
        class="btn btn-secondary"
        @click="logout"
      >
        <LogoutIcon />
      </button>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$cookies.remove('token')
      this.$store.commit('setLoggedIn', false)
      this.$router.push('/')
    },
  },
}
</script>


<style lang="scss">
.logo {
  max-width: 3rem;
}
</style>
