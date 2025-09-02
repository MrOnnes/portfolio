import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { motionPlugin } from "@oku-ui/motion";

createApp(App).mount("#app");
App.use(motionPlugin);
// const App = createApp({});
// App.use(motionPlugin);
// App.mount("#app");
