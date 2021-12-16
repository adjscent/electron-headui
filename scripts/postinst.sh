#!/bin/bash

mkdir -p "/etc/electron-headui/"
if [ ! -f "/etc/electron-headui/headui.json" ]; then
    echo '[{"title":"google","url":"https://google.com"}]' >/etc/headui/headui.json
fi
