<template>
  <v-app>
    <app-header></app-header>

    <v-main>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/skills">Skills</router-link> |
      <router-link to="/works">Works</router-link> |
      <router-link to="/contact">Contact</router-link> |
      <router-view />
    </v-main>
    <app-footer></app-footer>
  </v-app>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
export default {
  name: "App",

  data: () => ({
    //
  }),
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>

<style lang="scss">
div {
  background-color: $main-color;
}
</style>
