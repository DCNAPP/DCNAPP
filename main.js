const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require("path");
const url = require("url");
const write = require('write');


let window;

function createWindow() {
    window = new BrowserWindow();
    window.maximize();

    window.loadURL('file://' + __dirname + '/index.html')

    window.on('enter-full-screen', () => {
        window.removeMenu()
    })

    window.on("closed", () => {
        window = null;
    })
}


app.on('ready', () => {
    createWindow();

    var handleRedirect = (e, url) => {
        if (url != app.getURL()) {
            e.preventDefault()
            require('electron').shell.openExternal(url)
        }
    }

    app.on('will-navigate', handleRedirect)
    app.on('new-window', handleRedirect)

});
