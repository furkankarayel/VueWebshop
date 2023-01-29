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
      <div v-if="success === 0">
        <form v-on:submit="handleSubmit" class="q-gutter-y-md">
          <q-input outlined v-model="name" label="Name" type="text" />
          <q-input outlined v-model="email" label="Email" type="email" />
          <q-input
            outlined
            v-model="password"
            label="Password"
            type="password"
          />
          <q-btn
            type="submit"
            label="Register"
            color="primary"
            class="q-mt-lg"
          />
          <div v-if="error" class="error">{{ error }}</div>
        </form>
      </div>
      <div v-else-if="success === 201">
        <h6 style="color: green">You have been registered successfully!</h6>
        <q-btn label="Go to Home" color="primary" class="q-mt-lg" to="/" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { useQuasar } from "quasar";
export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      success: 0,
      error: "",
    };
  },
  setup() {
    const $q = useQuasar();

    return {
      showNotify() {
        $q.notify({
          message: "Registration successful!",
          color: "green",
        });
      },
    };
  },
  watch: {
    // whenever question changes, this function will run
    success(newStatus, oldStatus) {
      if (newStatus === 201) {
        this.showNotify();
        this.$router.push({ path: "/" });
      }
    },
  },

  methods: {
    async handleSubmit(e) {
      e.preventDefault();
      try {
        const response = await axios.post("http://localhost:8081/customer", {
          name: this.name,
          email: this.email,
          password: this.password,
          role_id: 2, //customer role
        });
        this.success = response.status;
      } catch (error) {
        this.error = error.response.data.message;
      }
    },
  },
};
</script>
