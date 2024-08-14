import Browser from "webextension-polyfill";

(async function () {
  const tabs = await Browser.tabs.query({ active: true });
  console.log(tabs);
})();
