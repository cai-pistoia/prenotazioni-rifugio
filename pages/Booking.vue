<template>
  <main>
    <div class="container">
      <div class="row">
        <div class="col">
          <Availability :slots="slots" />
        </div>
      </div>
    </div>
  </main>
</template>


<script>
export default {
  middleware: ['auth'],
  data() {
    return {
      slots: null,
    }
  },
  created() {
    this.$axios
      .get('/availability')
      .then((data) => {
        this.slots = data.data
      })
      .catch((error) => {
        console.log(error)
        alert('errore di sistema')
      })
  },
}
</script>
