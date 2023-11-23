const injectJS = require("./utils/inject-js")

window.addEventListener("DOMContentLoaded", () => {
  injectJS("src", "renderer", "translate", "i18n.js")
  injectJS("src", "renderer", "translate", "translate.js")
})
