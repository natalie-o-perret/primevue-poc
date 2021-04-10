import { createApp } from "vue";
import "primeflex/primeflex.scss";
import 'primevue/resources/themes/mdc-light-deeppurple/theme.css';
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import ToastService from "primevue/toastservice";
import PrimeVue from 'primevue/config';
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/scss/app.scss";

createApp(App).use(PrimeVue, {ripple: true}).use(store).use(router).mount("#app");
