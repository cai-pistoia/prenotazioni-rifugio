<template>
  <div class="card">
    <div class="card-body">
      <form>
        <h3>Iscriviti</h3>
        <div class="mb-3">
          <label for="email" class="form-label">Indirizzo Email</label>
          <input
            type="email"
            class="form-control"
            id="email"
            aria-describedby="emailHelp"
            v-model="email"
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
            v-model="name"
            required
          />
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input
            type="password"
            class="form-control"
            id="password"
            v-model="password"
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
export default {
  data() {
    return {
      email: null,
      name: null,
      password: null,
    }
  },
}
</script>
