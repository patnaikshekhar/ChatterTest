'use strict';

// Electron related imports
const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

/**
 * Initializes the main application
 */
function initialize() {
    const mainWindow = new BrowserWindow({ width: 600, height: 600, show: false });
    mainWindow.loadURL(`file://${__dirname}/index.html`);
    mainWindow.show();  
    mainWindow.webContents.openDevTools();     
}

app.on('ready', initialize);

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

