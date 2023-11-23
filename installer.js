const electronInstaller = require('electron-winstaller');

electronInstaller.createWindowsInstaller({
  appDirectory: '/out/runotion-win32',
  outputDirectory: '/out/installer-win32',
  authors: 'Pavel Frolov',
  exe: 'runotion.exe'
}).then(() => console.log("It worked!"), (e) => console.log(`No dice: ${e.message}`));