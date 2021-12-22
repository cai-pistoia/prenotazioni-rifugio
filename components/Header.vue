<template>
  <nav class="navbar navbar-light bg-light">
    <div class="container-fluid">
      <img
        class="logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Cai_Club_Alpino_Italiano_Stemma.png/949px-Cai_Club_Alpino_Italiano_Stemma.png"
        alt="Logo Cai"
      />
      <a class="navbar-brand" href="#">Prenotazioni bivacco</a>
      <Logout v-if="$store.state.isLoggedIn"/>
    </div>
  </nav>
</template>



<style lang="scss">
.logo {
  max-width: 3rem;
}
</style>
