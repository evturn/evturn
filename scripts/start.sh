#!/usr/bin/env bash

TOOLS_DIR="${PWD}/tools"

CYAN="$(tput setaf 6)"
RESET="$(tput sgr0)"

echo "${CYAN}\n➤  Starting dev server\n${RESET}"
node --experimental-modules --no-warnings "${TOOLS_DIR}/server.dev.mjs";
