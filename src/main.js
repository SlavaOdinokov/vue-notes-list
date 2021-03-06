import Vue from "vue";
import Vuelidate from "vuelidate";
import VueMeta from "vue-meta";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Notifications from "@/utils/notifications";
import Loader from "@/components/Loader";
import "materialize-css/dist/js/materialize.min";

import Firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

Vue.config.productionTip = false;

Vue.use(Vuelidate);
Vue.use(VueMeta);
Vue.use(Notifications);
Vue.component("Loader", Loader);

Firebase.initializeApp({
  apiKey: "AIzaSyB8f1G3JgY2aTmdChb_yxTw5AVDUXlWvW0",
  authDomain: "vue-notes-list.firebaseapp.com",
  projectId: "vue-notes-list",
  storageBucket: "vue-notes-list.appspot.com",
  messagingSenderId: "919977222805",
  appId: "1:919977222805:web:2aaccf236c768bf8b6f19c",
  measurementId: "G-8F16RH68EQ"
});

let app;

Firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  }
});
