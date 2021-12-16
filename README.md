# electron-headui

This is an electron application that automatically opens up multiple browser tabs in its own window. The tabs can be predefined in electron-headui.json Currently built under ubuntu 20.04 x64.

This is useful to show web-based monitoring status/metrics in a clean and neat fashion.

## Quick Start

### Setup

Make sure you have [Node.js](https://nodejs.org) and yarn installed, then type...

```
yarn install
```

### Build

```bash
yarn make
```

A deb will be produced in out/headui-linux-x64

### Debug

```bash
yarn start
```

### Config

The binary will read a json file from /etc/electron-headui/electron-headui.json.

Example:
Each json object will be treated as a new tab.

```json
[
  { "title": "google1", "url": "https://google.com" },
  { "title": "google2", "url": "https://google.com" }
]
```
