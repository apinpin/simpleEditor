const electron = require('electron');
const url = require('url');
const path = require('path');

const {app, BrowserWindow, Menu} = electron;

let mainWindow;
let addWindow;

app.on('ready', function(){
    // Create new Windows
    mainWindow = new BrowserWindow({});
    // Load html into window
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'mainWindow.html'),
        protocol: 'file:',
        slashes: true
    }));

    // When Main window is exited 
    mainWindow.on('closed', function(){
        app.quit();
    });

    createWindow();

    // Build menu from template
    //const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
    // Inster Menu
    //Menu.setApplicationMenu(mainMenu);
});

// Creates a new window
function createWindow()
{
    // Create new window
    addWindow = new BrowserWindow({
        width: 300,
        height: 200,
        title: 'Hello'
    });
    // Load html into window
    addWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'addWindow.html'),
        protocol: 'file:',
        slashes: true
    }));

    // Garbage Collection
    addWindow.on('close', function(){
        addWindow = null;
    });
}

// Create Menu Template
const mainMenuTemplate = [
    {
        label: 'File'
    }
];