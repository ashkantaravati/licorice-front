import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import LButton from "./components/LButton.vue";
import LTextBox from "./components/LTextBox.vue";
import LHeading from "./components/LHeading.vue";
import { router } from "./router";

createApp(App)
  .component("LButton", LButton)
  .component("LTextBox", LTextBox)
  .component("LHeading",LHeading)
  .use(router)
  .mount("#app");
