const { app, BrowserWindow } = require('electron');
const url = require('url');
const path = require('path');


function createMainWindow() {
    const MainWindow = new BrowserWindow({
        title: "Processing Log",
        width: 1000,
        height: 600,
    });

    const startUrl = url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file',
    });

    MainWindow.loadURL(startUrl);
}

app.whenReady().then(createMainWindow);