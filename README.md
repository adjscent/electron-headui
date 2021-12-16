# headui

This is an electron application that automatically opens up multiple browser tabs in its own window.

## Quick Start

### Setup

Make sure you have [Node.js](https://nodejs.org) installed, then type...

```
npm i
```

### Build

```bash
npm run make
```

A deb will be produced in out/headui-linux-x64

### Debug

```bash
npm run start
```

### Config

The binary will read a json file from /etc/headui/headui.json.

Example:
Each json object will be treated as a new tab.

```json
[
  { "title": "google1", "url": "https://google.com" },
  { "title": "google2", "url": "https://google.com" }
]
```
