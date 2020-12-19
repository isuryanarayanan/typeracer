import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    api_endpoint:
      "http://www.randomtext.me/api/gibberish/p-1/25-45?_=1608182114179",
    type_message: {
      count: -1,
      selected_message: null,
      pure_message: null,
      validated_input: false,
    },
    type_state: {
      lock: true,
      timer: true,
      flag: false,
      message: "Start typing when the flag drops",
    },
  },
  getters: {
    get_api_endpoint: (state) => {
      return state.api_endpoint;
    },
    get_type_state: (state) => {
      return state.type_state;
    },
    get_type_message: (state) => {
      return state.type_message;
    },
  },
  mutations: {
    toggle_type_state_lock: function(state) {
      state.type_state.lock = !state.type_state.lock;
    },
    toggle_type_state_flag: function(state) {
      state.type_state.flag = !state.type_state.flag;
    },
    toggle_type_state_timer: function(state) {
      state.type_state.timer = !state.type_state.timer;
    },
    set_type_state_message: function(state, arg) {
      state.type_state.message = arg;
    },
    set_type_message: function(state, arg) {
      state.type_message.selected_message = arg;
    },
    set_type_pure: function(state, arg) {
      state.type_message.pure_message = arg;
    },
    increment_count: function(state) {
      state.type_message.count++;
    },
    decrement_count: function(state) {
      state.type_message.count--;
    },
    set_validated_input: function(state, arg) {
      state.type_message.validated_input = arg;
    },
  },
  actions: {
    get_text: ({ getters, commit }) => {
      let xhr = new XMLHttpRequest();
      let promise = new Promise((resolve, reject) => {
        xhr.open("GET", getters.get_api_endpoint);
        xhr.onload = () => {
          resolve(xhr);
        };
        xhr.onerror = () => {
          reject(xhr);
        };
        xhr.send();
      });

      promise.then((e) => {
        commit("set_type_message", JSON.parse(e.response)["text_out"]);
      });
    },
    start: ({ commit, getters }) => {
      if (!getters.get_type_state.flag) {
        let select = getters.get_type_message;
        // snipping html elements from the text
        commit(
          "set_type_pure",
          select.selected_message.slice(3, select.selected_message.length - 5)
        );
        // initiate timer and flag
        commit("toggle_type_state_timer");

        setTimeout(function() {
          commit("toggle_type_state_lock");
          commit("toggle_type_state_flag");
        }, 3000);
      }
    },
    validate: ({ commit, getters }, arg) => {
      let validateText = arg;
      let pureText = getters.get_type_message.pure_message.split(" ");
      let count = getters.get_type_message.count;
      console.log(pureText[count] + "/" + validateText + "\\");
      if (pureText[count] == validateText) {
        commit("set_validated_input", true);
      } else {
        console.log("fucking noob.");
        commit("set_validated_input", false);
      }

      // return getters.get_type_message.validated_input;
    },
  },
  modules: {},
});
