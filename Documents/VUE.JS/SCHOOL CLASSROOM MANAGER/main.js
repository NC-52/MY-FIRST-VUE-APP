axios.defaults.baseURL = 'http://localhost:5000'

import Vue from "vue";
import App from "./App";
import router from "./router";
import axios from 'axios'

new Vue({
    el: "#app",
    router,
    components: { App },
    template: "<App/>"
  });