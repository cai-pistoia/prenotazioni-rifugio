<template>
  <main>
    <div class="container">
      <div class="row">
        <div class="col">
          le tue Prenotazioni
          {{ message }}
        </div>
      </div>
    </div>
  </main>
</template>


<script>

export default {
  middleware:['auth'],
  computed: {
    message() {
      return process.env.TEST_VARIABLE
    },
  },
}
</script>
