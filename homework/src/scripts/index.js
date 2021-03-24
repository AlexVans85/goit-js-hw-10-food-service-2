// console.log("dfafaf")
import createCardsFunction from "../html/templates/card.hbs"
import dishes from "../../../menu.json"

const cardHTMLMarkup = createCardsFunction(dishes)

// console.log(cardHTMLMarkup)
const listMenu = document.querySelector(".js-menu")

listMenu.insertAdjacentHTML("beforeend", cardHTMLMarkup)

const Theme = {
  LIGHT: "light-theme",
  DARK: "dark-theme",
}

const switchBtn = document.querySelector(".theme-switch__toggle")

if (localStorage.getItem("current theme") === "dark-theme") {
  switchBtn.checked = true
  document.body.classList.add("dark-theme")
}

switchBtn.addEventListener("change", function (event) {
  if (event.target.checked) {
    document.body.classList.toggle(Theme.DARK)
    document.body.classList.remove(Theme.LIGHT)
    localStorage.setItem("current theme", Theme.DARK)
    // localStorage.getItem("current theme")
  } else {
    localStorage.setItem("current theme", Theme.LIGHT)
    document.body.classList.toggle(Theme.DARK)
    document.body.classList.add(Theme.LIGHT)
  }
})
