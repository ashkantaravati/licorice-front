import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import LButton from "./components/LButton.vue";
import LTextBox from "./components/LTextBox.vue";
import LHeading from "./components/LHeading.vue";
import LTextarea from "./components/LTextarea.vue";
import { router } from "./router";
import Notifications from '@kyvg/vue3-notification'

createApp(App)
  .component("LButton", LButton)
  .component("LTextBox", LTextBox)
  .component("LHeading",LHeading)
  .component("LTextarea",LTextarea)
  .use(router)
  .use(Notifications)
  .mount("#app");

  