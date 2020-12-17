import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    api_endpoint:
      "http://www.randomtext.me/api/gibberish/p-1/25-45?_=1608182114179",

    type_message: {
      selected_message: null,
    },
    type_state: {
      lock: true,
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
    set_type_state_message: function(state, arg) {
      state.type_state.message = arg;
    },
    set_type_message: function(state, arg) {
      state.type_message.selected_message = arg;
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
  },
  modules: {},
});
