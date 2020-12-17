<template>
  <v-container>
    <v-row>
      <v-col>
        <v-sheet>
          <p v-html="type_message.selected_message"></p>
        </v-sheet>
      </v-col>
      <v-col>
        <v-sheet>
          <v-text-field
            class="input-field"
            :placeholder="type_state.message"
            :disabled="type_state.lock"
          >
          </v-text-field>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "Racer",
  computed: {
    ...mapGetters({
      type_state: "get_type_state",
      type_message: "get_type_message",
    }),
  },
  methods: {},
};
</script>
<style scoped lang="scss">
.input-field {
  font-size: 24px;
}
</style>
