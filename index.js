const { app, BrowserWindow } = require('electron')
const createWindow = () => {
  const win = new BrowserWindow({
    width: 1200,
    height: 900,
  })
  win.loadFile('web/index.html')
}
app.whenReady().then(() => {
  createWindow()
})