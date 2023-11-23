import { ipcMain, BrowserWindow } from 'electron'
import { assetsPath } from '../utils/assets-path'

ipcMain.on('request-app-path', (event, arg) => {
  event.returnValue = assetsPath
})
