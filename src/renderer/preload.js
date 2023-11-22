const injectJS = require("./utils/inject-js")

window.addEventListener("DOMContentLoaded", () => {
  injectJS("src", "renderer", "translate", "i18n.js")
  injectJS("src", "renderer", "translate", "translate.js")

  if (process.platform !== "darwin") {
    require("./modules/window-manager/create-windows-menu")()
  }

  /** slides feat */
  require("./modules/slides/index.js")

  /** content-only feat */
  require("./modules/content-only")
})
