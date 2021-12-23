<template>
  <div>
    <div v-for="slot in slots" :key="slot.day">
      data: {{slot.day}}, posti: {{slot.seats}}, disponibili:{{slot.available}}
    </div>
  </div>
</template>


<script>
export default {
  props:{
    slots: String,
  }
}
</script>
