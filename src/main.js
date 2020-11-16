let version = 'v1.4.0';

const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require("path");
const url = require("url");
const write = require('write');

write.sync('version.txt', version);

let window;

function createWindow() {
    window = new BrowserWindow();
    window.maximize();
    
    window.loadURL('file://' + __dirname + '/index.html')

    window.on("closed", () => {
        window = null;
    })
}


app.on('ready', createWindow);

