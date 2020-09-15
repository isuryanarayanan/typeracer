<template>
  <v-app>
    <v-app-bar app flat dense id="nav">
      <div class="font2">
        typeracer
      </div>
      <v-spacer></v-spacer>
      <div class="font2 px-1">
        <router-link :to="{ name: 'Home' }">
          Home
        </router-link>
      </div>
      <div class="font2 px-1">
        <router-link :to="{ name: 'GetStarted' }">
          Get Started
        </router-link>
      </div>
    </v-app-bar>

    <v-main><router-view></router-view></v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({}),
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
