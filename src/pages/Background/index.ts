(async function Main() {
  const test = await chrome.tabs.query({ active: true });
  console.log(test[0]);
})();
