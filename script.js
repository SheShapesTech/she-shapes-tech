let currentLanguage = "en"

function setLanguage(lang) {
  currentLanguage = lang

  // Update language buttons
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.textContent === lang.toUpperCase())
  })

  // Update all translatable elements
  document.querySelectorAll("[data-de][data-en]").forEach((el) => {
    el.textContent = el.getAttribute(`data-${lang}`)
  })
}

function showPage(pageId) {
  // Hide all pages
  document.querySelectorAll(".page").forEach((page) => {
    page.classList.remove("active")
  })

  // Show selected page
  document.getElementById(`page-${pageId}`).classList.add("active")

  // Update nav links
  document.querySelectorAll(".nav-link, .mobile-nav-link").forEach((link) => {
    link.classList.toggle("active", link.getAttribute("data-page") === pageId)
  })

  // Scroll to top
  window.scrollTo(0, 0)
}

function toggleMobileMenu() {
  document.getElementById("mobileNav").classList.toggle("open")
}

function handleSubmit(e) {
  e.preventDefault()

  const name = document.getElementById("name").value
  const email = document.getElementById("email").value
  const message = document.getElementById("message").value

  const subject = currentLanguage === "de" ? `Kontaktanfrage von ${name}` : `Contact request from ${name}`

  const body =
    currentLanguage === "de"
      ? `Name: ${name}\nE-Mail: ${email}\n\nNachricht:\n${message}`
      : `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`

  const mailtoLink = `mailto:sheshapestech.engineering@zhaw.ch?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

  window.location.href = mailtoLink
}

document.addEventListener("DOMContentLoaded", () => {
  setLanguage("en")
})
