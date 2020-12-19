<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-sheet>
          <div class="info-field">
            <v-icon>mdi-access-point</v-icon>
            The words are random
          </div>
          <p class="type-text" v-html="type_message.selected_message"></p>
          <v-btn
            small
            dark
            @click="$store.dispatch('get_text')"
            :disabled="type_state.flag"
            >Get another snippet</v-btn
          >
        </v-sheet>
      </v-col>

      <v-col cols="6">
        <v-sheet>
          <v-text-field
            class="input-field"
            :placeholder="type_state.message"
            :disabled="type_state.lock"
            ref="inpTxt"
            v-model="inpTxt"
          >
          </v-text-field>
          <div class="info-field" v-show="type_state.flag">
            <v-icon>mdi-access-point</v-icon>
            You can start typing
          </div>
          <v-btn :disabled="type_state.flag" color="success" @click="start()"
            >Start
            <v-icon v-show="type_state.timer">mdi-arrow-right</v-icon>

            <v-progress-circular
              v-show="!type_state.timer && !type_state.flag"
              indeterminate
              color="white"
              :size="20"
            ></v-progress-circular>
            <v-icon v-show="type_state.flag">mdi-pencil</v-icon>
          </v-btn>
        </v-sheet>
      </v-col>
      <v-col cols="6">
        <p>
          <v-sheet dark>{{ inpTxt }}</v-sheet>
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "Racer",
  data() {
    return {
      inpTxt: null,
    };
  },
  computed: {
    ...mapGetters({
      type_state: "get_type_state",
      type_message: "get_type_message",
    }),
  },

  methods: {
    start: function() {
      this.$store.dispatch("start");
      let ref = this.$refs;
      setTimeout(function() {
        ref.inpTxt.focus();
      }, 3010);
    },
  },
};
</script>
<style scoped lang="scss">
.info-field {
  font-size: 12px;
  color: #555;
}
.input-field {
  font-size: 24px;
}
.type-text {
  font-size: 32px;
}
</style>
