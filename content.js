function boldWord(word) {
  let length = word.length;
  let boldLength;

  if (length <= 3) {
    boldLength = 0;
  } else if (length <= 5) {
    boldLength = 2;
  } else if (length <= 6) {
    boldLength = 3;
  } else {
    boldLength = 4;
  }

  let firstPart = word.slice(0, boldLength);
  let secondPart = word.slice(boldLength);
  return "<strong>" + firstPart + "</strong>" + secondPart;
}

function transformText(text) {
  return text.replace(/[a-zA-Z]+/g, boldWord);
}

function processElement(element) {
  let originalText = element.innerText;
  let newText = transformText(originalText);
  element.innerHTML = newText;
}

function processPage() {
  let root =
    document.querySelector("article") ||
    document.querySelector("main") ||
    document.body;

  let elements = root.querySelectorAll("p, li, h1, h2, h3");

  elements.forEach((element) => {
    processElement(element);
  });
}

function applyWhenReady() {
  setTimeout(() => {
    processPage();
  }, 800);
}

chrome.runtime.onMessage.addListener((message) => {
  if (message.action === "enable") {
    applyWhenReady();
  }

  if (message.action === "disable") {
    location.reload();
  }
});

chrome.storage.local.get(["enabled"], (result) => {
  if (result.enabled) {
    applyWhenReady();
  }
});

console.log("content loaded");
