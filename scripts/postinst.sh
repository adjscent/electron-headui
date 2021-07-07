#!/bin/bash

mkdir -p "/etc/headui/"
if [ ! -f "/etc/headui/headui.json" ]; then
    echo '[{"title":"google","url":"https://google.com"}]' >/etc/headui/headui.json
fi
