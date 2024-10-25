import { createApp } from 'vue'
import "./style.css";
import App from "./App.vue";

class DemoMfApp extends HTMLElement {
  private app: ReturnType<typeof createApp> | undefined = undefined;

  connectedCallback() {
    if (this.app) {
      return;
    }

    this.app = createApp(App)
    this.app.mount(this);
  }

  disconnectedCallback() {
    if (this.app) {
      this.app = void this.app.unmount();
    }
  }
}

// In my case we have defined a custom element wrapper for the Vue app, and exposes it as a web component.
// Though should be the same (somewhat) if we exposed App.vue instead.
// This allows us to have the remote use various different libraries with createApp(App).use(...) etc. and for the host it "just works"
customElements.define("demo-mf-app", DemoMfApp);
