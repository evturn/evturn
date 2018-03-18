#! /bin/env bash

TOOLSDIR="${PWD}/tools";

echo `tput setaf 2`$'\n➤  Starting production server\n'`tput sgr0`;

node --experimental-modules --no-warnings "${TOOLSDIR}/server.prod.mjs";
