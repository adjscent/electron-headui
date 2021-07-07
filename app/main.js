// main.js

// Modules to control application life and create native browser window
const { app, BrowserWindow } = require('electron')
const path = require('path')
const windowStateKeeper = require('electron-window-state')

function createWindow() {
  const mainWindowState = windowStateKeeper({
    defaultWidth: 1600,
    defaultHeight: 900
  })
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    title: 'headui',
    icon: path.join(__dirname, "resources", "icon.png"),
    'x': mainWindowState.x,
    'y': mainWindowState.y,
    'width': mainWindowState.width,
    'height': mainWindowState.height,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
      contextIsolation: false,
      webviewTag: true
    }
  })
  
  mainWindowState.manage(mainWindow);

  // and load the index.html of the app.
  mainWindow.setMenuBarVisibility(false)
  mainWindow.loadFile('./app/index.html')
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

app.allowRendererProcessReuse = false
