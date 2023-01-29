<template>
  <div>
    <div
      class="q-gutter-md q-pa-lg"
      style="
        max-width: 500px;
        margin: auto;
        display: flex;
        align-items: center;
        justify-content: center;
      "
    >
      <form v-on:submit="handleSubmit" class="q-gutter-y-md">
        <q-input outlined v-model="email" label="Email" type="email" />
        <q-input outlined v-model="password" label="Password" type="password" />
        <q-btn type="submit" label="Login" color="primary" class="q-mt-lg" />
        <div v-if="error" class="error">{{ error }}</div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { useQuasar } from "quasar";
import { useSessionStore } from "../stores/session-store";

export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      error: "",
    };
  },
  setup() {
    const $q = useQuasar();
    const store = useSessionStore();

    store.$subscribe((mutation, state) => {
      console.log(mutation); // Info über den Inhalt und der Art der Mutation

      localStorage.setItem("session", JSON.stringify(state)); //Persistente Daten
    });
    return {
      addSession: store.addSession,
      showNotify() {
        $q.notify({
          message: "Login successful!",
          color: "green",
        });
      },
    };
  },
  methods: {
    async handleSubmit() {
      try {
        const response = await axios.post("http://localhost:8081/login", {
          email: this.email,
          password: this.password,
        });
        if (response.status === 200) {
          this.addSession(response.data);
          this.showNotify();
          this.$router.push({ path: "/" });
        }
      } catch (error) {
        this.error = error.response.data.message;
      }
    },
  },
};
</script>
