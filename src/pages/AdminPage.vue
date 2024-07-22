<template>
  <form>
    <fieldset @submit.prevent="login">
      <legend>Admin Login</legend>
      <div class="grid">
        <label for="username">Username</label>
        <input
            type="text"
            name="username"
            id="username"
            v-model="username"
            required
        >
        <label for="password">Password</label>
        <input
            type="password"
            name="password"
            id="password"
            v-model="password"
            required
        >
      </div>
    </fieldset>

    <button type="submit">
      Login
    </button>

  </form>
</template>

<script>
import {login} from "@/services/PunoletstvoService";

export default {
    name: 'AdminPage',
    data() {
        return {
            username: "",
            password: ""
        }
    },
    methods: {
        async login() {
            const res = await login(this.username, this.password);

            if (res.status !== 200) {
                return console.log('failed login');
            }

            console.log('successful login');
        }
    }
}
</script>

<style scoped>
form > div {
    margin: 1rem 0;
    text-align: right;
}

fieldset {
    border: none;
    margin: 2rem 0;
    padding: 0;
}

.grid {
    display: grid;
    grid-template-columns: 1fr 300px;
    grid-gap: 0.5em 1em;
    align-items: center;
}

legend {
    font-family: inherit;
    font-weight: bold;
    font-size: 1.5em;
    margin-bottom: 0.5rem;
}

input {
    -moz-appearance: textfield;
    font-family: inherit;
    font-size: 1em;
    height: 1.25rem;
    line-height: 1.25rem;
    padding: 3px;
    text-indent: 1.25px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s, color 0.3s;
}

.dark input {
    color: var(--light-color);
    background-color: rgb(86, 79, 64);
}

button {
    width: 100%;
    font-size: 1em;
    height: 2.5em;
}

@media (max-width: 700px) {
    form {
        width: 100%;
    }

    .grid {
        grid-template-columns: 1fr;
    }

    input {
        margin: 0;
    }
}
</style>