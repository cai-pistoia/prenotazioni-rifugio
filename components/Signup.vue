<template>
  <div class="card">
    <div class="card-body">
      <form @submit.prevent="signup">
        <h3>Iscriviti</h3>
        <div class="mb-3">
          <label for="mail" class="form-label">Indirizzo Email</label>
          <input
            type="email"
            class="form-control"
            id="mail"
            aria-describedby="emailHelp"
            name="mail"
            required
          />
          <div id="emailHelp" class="form-text">
            Non condivideremo il tuo indirizzo con nessuno
          </div>
        </div>
        <div class="mb-3">
          <label for="name" class="form-label">Nome e Cognome</label>
          <input
            type="text"
            class="form-control"
            id="name"
            name="name"
            required
          />
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input
            type="password"
            class="form-control"
            id="password"
            name="password"
            required
          />
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="check" required />
          <label class="form-check-label" for="check">Accetto la privacy</label>
        </div>
        <button type="submit" class="btn btn-primary">Iscriviti</button>
      </form>
    </div>
  </div>
</template>

<script>
import createFormData from '../utils/formData'
export default {
  methods: {
    signup(event) {
      const form = event.target
      const data = createFormData(form)
      this.$axios.post('/signup', data)
      .then((data)=>{
        this.$router.push('/wait')
      })
      .catch((error) =>{
        console.log(error)
        alert('errore di piattaforma')
      })
    },
  },
}
</script>
