import { createApp } from "vue";
import { createPinia } from "pinia";
import "./assets/tailwind.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";


import App from "./App.vue";
import router from "./router";
// library.add(far);
const app = createApp(App);

app.use(createPinia());
app.component("FontAwesome", FontAwesomeIcon);
app.use(router);

app.mount("#app");
