<template>
  <div class="card">
    <div class="card-body">
      <form @submit.prevent="login">
        <h3>Login</h3>
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
          <label for="password" class="form-label">Password</label>
          <input
            type="password"
            class="form-control"
            id="password"
            name="password"
            required
          />
        </div>

        <button type="submit" class="btn btn-primary">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
import createFormData from '../utils/formData'
export default {
  methods: {
    login(event) {
      const form = event.target
      const data = createFormData(form)
      this.$axios
        .$post('/login', data)
        .then((data) => {
          this.$cookies.set('token', data.session.access_token, {
            path: '/',
            maxAge: 60 * 60 * 24 * 7,
            secure: true,
          })
          this.$store.commit("setLoggedIn", true);
          this.$router.push("/booking");
        })
        .catch((error) => {
          console.log(error)
          alert('credenziali errate')
        })
    },
  },
}
</script>
