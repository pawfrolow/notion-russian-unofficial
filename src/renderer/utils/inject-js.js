const { ipcRenderer } = require('electron')
const path = require('path')
const appPath = ipcRenderer.sendSync('request-app-path')
const fs = require('fs')

function injectJS(...jsPathSegments) {
  const jsPath = path.resolve(appPath, ...jsPathSegments)
  const jsContent = fs.readFileSync(jsPath)
  const scriptEl = document.createElement('script')
  scriptEl.innerHTML = jsContent
  document.head.append(scriptEl)
}

module.exports = injectJS
