import { registerApp } from "./components/app.js";
import { registerRouteComponent } from "./components/route.js";
import { registerDemo } from "./components/demo.js";


const app = () => {
  registerRouteComponent();
  registerDemo();
    registerApp();

    const template = document.querySelector('template#root');
    if (template) document.body.appendChild(template.content, true);
}

document.addEventListener('DOMContentLoaded', app);

