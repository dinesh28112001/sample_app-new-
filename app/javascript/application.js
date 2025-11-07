import "@hotwired/turbo-rails"

// import "@hotwired/turbo-rails"
// import "controllers"
import "bootstrap"
import "@popperjs/core"

document.addEventListener("turbo:load", () => {
  // Enable dropdowns
  const dropdownTriggerList = document.querySelectorAll('[data-bs-toggle="dropdown"]')
  dropdownTriggerList.forEach(dropdownTriggerEl => {
    new bootstrap.Dropdown(dropdownTriggerEl)
  })
})
