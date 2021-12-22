<template>
  <button
    class="btn btn-secondary"
    @click="logout"
  >
    <LogoutIcon />
  </button>
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
