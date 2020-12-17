<template>
  <v-app>
    <v-main><router-view></router-view></v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({}),
  mounted() {
    this.$store.dispatch("get_text");
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Libre+Baskerville&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Lato&display=swap");
.font1 {
  font-family: "Libre Baskerville", serif;
}
.font2 {
  font-family: "Lato", sans-serif;
}
#nav {
  a {
    font-weight: bold;
    font-size: 14px;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
