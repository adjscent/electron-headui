// ./renderer.js

// 1. Require the module
const TabGroup = require("electron-tabs")
const path = require('path')
const fs = require('fs')
const isReachable = require('is-reachable')

// 2. Define the instance of the tab group (container)
let tabGroup = new TabGroup(
    // Disable new tabs by not including newTab
);

var jsonfilepath = path.resolve('/etc/electron-headui/electron-headui.json')

if (!fs.existsSync(jsonfilepath)) {
    jsonfilepath = path.resolve('./electron-headui.json')
    if (!fs.existsSync(jsonfilepath)) {
        t = tabGroup.addTab({
            title: "Error",
            src: path.join(__dirname, 'error.html'),
            visible: true,
            closable: false
        })
        t.activate()
        return
    }
}

data = fs.readFileSync(jsonfilepath);
json = data.toString('utf8');
settings = JSON.parse(json);

settings.map((j) => {
    t = tabGroup.addTab({
        title: j["title"],
        src: path.join(__dirname, 'loading.html'),
        visible: true,
        closable: false
    })
    t.activate()
    isReachable(j["url"]).then((v) => {
        if (v) {
            t.webview.loadURL(j["url"])
        } else {
            t.webview.loadURL('file://' + path.join(__dirname, 'unreachable.html'))
            t.flash(true)
        }
        t.show()
    })
})