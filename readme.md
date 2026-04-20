# ADHD Focus Reader

A Chrome extension that improves reading focus by bolding the beginning of words, designed to support ADHD-friendly reading.

---

## 🧠 Background

Many people, especially those with ADHD, find it difficult to maintain focus when reading long paragraphs of text.

This project explores a simple but effective idea:

> Highlighting the beginning of words to guide the eye and reduce cognitive load.

---

## ✨ Features

- Automatically processes text on page load
- Bolds the first part of each word for easier scanning
- Works on most websites
- Toggle on/off via extension popup
- Persists state across pages

---

## 🖼️ Demo

### Before
![before](./images/before.png)

### After
![after](./images/after.png)

---

## ⚙️ How it works

- Detects main content areas (`article`, `main`, etc.)
- Extracts text elements (`p`, `li`, `h1`, `h2`, `h3`)
- Splits words using regex
- Applies dynamic bolding rules based on word length

---

## 🚀 Installation

1. Download or clone this repository.
2. Open Chrome and go to: `chrome://extensions/`
3. Enable **Developer Mode** (top right corner).
4. Click **"Load unpacked"**.
5. Select the project folder (`adhd-focus-reader`).
6. The extension **"Focus Reader"** will appear in your extensions list.

---

## ▶️ How to Use

1. Click the extensions icon in Chrome (top right corner).
2. Find **Focus Reader** and click it.
3. Click **"Turn On"**:
   - The page will automatically refresh
   - Text will be transformed with bolded word prefixes
4. Click **"Turn Off"**:
   - The page will refresh again
   - The original text will be restored

---

## 💡 Notes

- Once enabled, the extension remains active across pages until turned off.
- Works best on text-heavy pages such as articles.
- Some dynamic websites may require a manual refresh.

---

## 🔮 Future Improvements

- Adjustable bolding strength
- AI-based keyword highlighting
- Paragraph summarization
- Better support for dynamic content

---

## 👤 Author

Yuxuan Li
