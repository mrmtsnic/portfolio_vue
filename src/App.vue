<template>
  <v-app>
    <app-header></app-header>

    <v-main class="my-0 mx-auto">
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

.v-main__wrap {
  width: 800px;
}
</style>
