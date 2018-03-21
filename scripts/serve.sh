#!/usr/bin/env bash

TOOLSDIR="${PWD}/tools";

if [ $# -eq 0 ]; then
  node --experimental-modules --no-warnings "${TOOLSDIR}/server.prod.mjs";
else
  nohup node --experimental-modules --no-warnings "${TOOLSDIR}/server.prod.mjs" &
fi;

echo `tput setaf 2`$'\n➤  Starting production server\n'`tput sgr0`;

