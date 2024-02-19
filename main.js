const { app, BrowserWindow } = require('electron');
const url = require('url');
const path = require('path');

function createMainWindow() {
    const mainWindow = new BrowserWindow({
        title: 'Processing Log',
        width: 1000,
        height: 600,
        webPreferences: {
            contextIsolation: true,
            nodeIntegration: true,
        }
    });

    // mainWindow.webContents.openDevTools();

    const startUrl = url.format({
        pathname: path.join(__dirname, "./app/build/index.html"),
        protocol: 'file:',
        slashes: true
    });

    mainWindow.loadURL(startUrl);
}

app.on('ready', createMainWindow);