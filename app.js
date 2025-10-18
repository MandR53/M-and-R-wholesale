// Footer year
document.getElementById('y').textContent = new Date().getFullYear();

// We keep the loader in case you add listings later.
// With an empty listings.json, nothing is shown (by design).
(async () => {
  try {
    await fetch('listings.json?_=' + Date.now()).then(r => r.json());
    // No rendering on purpose—site avoids public advertising.
  } catch(e) {
    // Ignore if file not found; nothing to display anyway.
  }
})();