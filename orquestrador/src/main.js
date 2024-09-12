import { registerApplication, start } from "single-spa";

// Registro do micro-frontend de login (Angular)
registerApplication({
  name: "login-angular",
  app: () => System.import("login-angular"),
  activeWhen: ["/login"],
});

// Inicializa o Single-SPA
start();
