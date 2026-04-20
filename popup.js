const button = document.getElementById("toggleButton");

chrome.storage.local.get(["enabled"], (result) => {
  const isEnabled = result.enabled || false;
  button.textContent = isEnabled ? "Turn Off" : "Turn On";
});

button.addEventListener("click", () => {
  chrome.storage.local.get(["enabled"], (result) => {
    const isEnabled = result.enabled || false;
    const newState = !isEnabled;

    chrome.storage.local.set({ enabled: newState }, () => {
      button.textContent = newState ? "Turn Off" : "Turn On";

      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, {
          action: newState ? "enable" : "disable"
        });
      });
    });
  });
});