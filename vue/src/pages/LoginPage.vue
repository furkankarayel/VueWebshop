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

export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      error: "",
    };
  },
  methods: {
    async handleSubmit(e) {
      e.preventDefault();
      try {
        const response = await axios.post("/api/login", {
          email: this.email,
          password: this.password,
        });
        console.log(response);
      } catch (error) {
        this.error = error.response.data.message;
      }
    },
  },
};
</script>
