import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@gs/app-main",
  app: () => System.import("@gs/app-main"),
  activeWhen: ["/"]
});

start({
  urlRerouteOnly: true,
});
