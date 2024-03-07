import Browser from "webextension-polyfill";

(async function Main() {
  const test = await Browser.tabs.query({ active: true });
  console.log(test[0]);
})();
