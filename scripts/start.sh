#! /bin/env bash

TOOLSDIR="${PWD}/tools";

echo `tput setaf 6`$'\n➤  Starting dev server\n'`tput sgr0`;

node --experimental-modules --no-warnings "${TOOLSDIR}/server.dev.mjs";
