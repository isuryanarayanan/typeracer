<template>
  <div class="home">
    <template>
      <v-sheet class="overflow-hidden">
        <v-app-bar
          absolute
          color="#000"
          dark
          shrink-on-scroll
          prominent
          src="https://picsum.photos/1920/1080?random"
          fade-img-on-scroll
          scroll-target="#scrolling-techniques-3"
        >
          <template v-slot:img="{ props }">
            <v-img
              v-bind="props"
              gradient="to top right, rgba(10,15,201,.7), rgba(25,32,72,.7)"
            ></v-img>
          </template>

          <v-app-bar-nav-icon @click="open"></v-app-bar-nav-icon>

          <v-toolbar-title class="display-2">Typeracer</v-toolbar-title>

          <v-spacer></v-spacer>

          <template v-slot:extension>
            <v-tabs v-model="tabs">
              <v-tab>Play</v-tab>
              <v-tab>Stats</v-tab>
              <v-tab>Practice</v-tab>
              <v-tabs-items v-model="tabs">
                <v-tab-item>
                  <Racer />
                </v-tab-item>
                <v-tab-item> </v-tab-item>
                <v-tab-item> </v-tab-item>
              </v-tabs-items>
            </v-tabs>
          </template>
        </v-app-bar>
      </v-sheet>
    </template>
  </div>
</template>

<script>
import Racer from "../components/Racer.vue";
export default {
  name: "Home",
  components: { Racer },
  data() {
    return {
      tabs: null,
    };
  },
};
</script>
