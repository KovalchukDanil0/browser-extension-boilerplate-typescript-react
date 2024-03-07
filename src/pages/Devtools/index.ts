import Browser from "webextension-polyfill";

Browser.devtools.panels.create(
  "Dev Tools from chrome-extension-boilerplate-react",
  "icon-34.png",
  "panel.html",
);
