
const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require("path");
const url = require("url");

let window;

function createWindow() {
    window = new BrowserWindow();
    window.loadURL(url.format({
        pathname: path.join("UI", "index.html"),
        protocol: 'file',
        slashes: true
    }));

    window.on("closed", () => {
        window = null;
    })
}


app.on('ready', createWindow);