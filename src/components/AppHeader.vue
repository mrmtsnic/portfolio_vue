<template>
  <header>
    <v-app-bar app dark height="90" elevation="0">
      <!-- ハンバーガーメニュー -->
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <!-- メニュー -->
      <v-tabs dark right>
        <v-tabs-slider color="#3db680"></v-tabs-slider>
        <v-tab
          v-for="menuItem in menuItems"
          :key="menuItem.name"
          :to="menuItem.path"
        >
          {{ menuItem.name }}
        </v-tab>
      </v-tabs>
    </v-app-bar>
    <!-- ナビゲーション -->
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group v-model="group">
          <v-list-item to="/">
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>
          <v-list-item to="/about">
            <v-list-item-title>About</v-list-item-title>
          </v-list-item>
          <v-list-item to="/skills">
            <v-list-item-title>Skills</v-list-item-title>
          </v-list-item>
          <v-list-item to="/works">
            <v-list-item-title>Works</v-list-item-title>
          </v-list-item>
          <v-list-item to="/contact">
            <v-list-item-title>Contact</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
  data() {
    return {
      drawer: false,
      group: null,
      menuItems: [
        {
          name: "Home",
          path: "/",
        },
        {
          name: "About",
          path: "/about",
        },
        {
          name: "Skills",
          path: "/skills",
        },
        {
          name: "Works",
          path: "/works",
        },
        {
          name: "Contact",
          path: "/contact",
        },
      ],
    };
  },
  watch: {
    group() {
      this.drawer = false;
    },
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.v-toolbar__title {
  overflow: visible !important;
}

.v-app-bar__nav-icon {
  @include display_pc {
    display: none !important;
  }
}

.v-tabs {
  display: none !important;

  @include display_pc {
    display: block !important;
  }
}

// ナビゲーションメニュー選択したときの色
.v-list-item-group .v-list-item--active {
  color: $font-color !important;
}

// ナビゲーションメニュー選択されていない項目の色
.v-list-item:not(.v-list-item--active) > .v-list-item__title {
  color: rgba(255, 255, 255, 0.6) !important;
}

.v-tab--active {
  color: $font-color !important;
}
</style>
