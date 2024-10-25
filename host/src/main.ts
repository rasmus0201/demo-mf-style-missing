import { createApp } from 'vue'
import App from './App.vue'
import {
  init,
  loadRemote
} from "@module-federation/enhanced/runtime";

async function initApp() {
  init({
    name: "host",
    remotes: [
      {
        name: "remote",
        entry: "http://localhost:8080/remoteEntry.js",
        type: "module",
      },
    ],
  });

  await loadRemote("remote/WebComponent");

  createApp(App).mount("#app");
}

initApp();
