import { tabs } from "webextension-polyfill";

(async function () {
  const activeTabs = await tabs.query({ active: true });
  console.log(activeTabs);
})();
