// ===== Wholesalers — main.js =====

// Footer Year Auto-Update
document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
});

// Auto-highlight current page in nav
const path = window.location.pathname.split("/").pop() || "index.html";
document.querySelectorAll("nav .nav-link").forEach(link => {
  if (!link.hasAttribute("aria-current") && link.getAttribute("href") === path) {
    link.setAttribute("aria-current", "page");
  }
});

// Smooth scroll for in-page links
document.addEventListener("click", e => {
  const a = e.target.closest('a[href^="#"]');
  if (!a) return;
  const id = a.getAttribute("href").slice(1);
  const el = document.getElementById(id);
  if (!el) return;
  e.preventDefault();
  el.scrollIntoView({ behavior: "smooth", block: "start" });
});

// Contact form handler (on contact.html)
const form = document.getElementById("contact-form");
if (form) {
  const ok = document.getElementById("alert-ok");
  const err = document.getElementById("alert-err");
  form.addEventListener("submit", e => {
    e.preventDefault();

    const name = form.querySelector("#name").value.trim();
    const email = form.querySelector("#email").value.trim();
    const role = form.querySelector("#role").value.trim();
    const subject = form.querySelector("#subject").value.trim();
    const message = form.querySelector("#message").value.trim();
    const gdpr = form.querySelector("#gdpr").checked;

    if (!name || !email || !role || !subject || !message || !gdpr) {
      if (ok) ok.style.display = "none";
      if (err) err.style.display = "block";
      return;
    }

    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nRole: ${role}\n\nMessage:\n${message}`
    );
    const subj = encodeURIComponent(subject);
    const mailto = `mailto:hello@example.com?subject=${subj}&body=${body}`;

    if (ok) ok.style.display = "block";
    if (err) err.style.display = "none";

    window.location.href = mailto;
  });
}