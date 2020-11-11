let version = 'v1.4.0';

const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require("path");
const url = require("url");
const fs = require('fs');

let window;

function createWindow() {
    window = new BrowserWindow();
    window.maximize();
    // window.loadURL(url.format({
    //     pathname: path.join(__dir, "index.html"),
    //     protocol: 'file',
    //     slashes: true
    // }));
    window.loadURL('file://' + __dirname + '/index.html')

    window.on("closed", () => {
        window = null;
    })
}


app.on('ready', createWindow);

fs.writeFile('version.txt', version, (err) => {

    if (err) throw err;

});

