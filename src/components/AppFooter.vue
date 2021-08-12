<template>
  <v-footer padless elevation="20" fixed>
    <v-card tile width="100%" height="100%" dark>
      <v-card-text class="pa-1 text-center">
        <v-btn
          v-for="icon in icons"
          :key="icon.name"
          class="mx-1"
          icon
          @click="goToLink(icon.name)"
        >
          <v-icon dark size="24px">
            {{ icon.icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="pa-2 text-center text-caption">
        Copyright &copy; Shin's Portfolio All Rights Reserved.
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "AppFooter",
  data() {
    return {
      icons: [
        {
          name: "home",
          icon: "mdi-home",
        },
        {
          name: "github",
          icon: "mdi-github",
        },
      ],
    };
  },
  methods: {
    goToLink(name) {
      if (name === "github") {
        let url = "https://github.com/mrmtsnic";
        window.open(url, "noreferrer");
      } else {
        if (this.$route.name !== "Home") {
          this.$router.push("/");
        }
      }
    },
    getCreateUrl(url) {
      if (url === this.icons[1].url) {
        location.href = "https://github.com/mrmtsnic";
      } else {
        location.href = `${url}`;
      }
    },
  },
};
</script>

<style></style>
