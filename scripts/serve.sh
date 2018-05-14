#!/usr/bin/env bash

TOOLS_DIR="${PWD}/tools";
GREEN="$(tput setaf 2)"
RESET="$(tput sgr0)"

if [ $# -eq 0 ]; then
  node --experimental-modules --no-warnings "${TOOL_SDIR}/server.prod.mjs";
else
  nohup node --experimental-modules --no-warnings "${TOOL_SDIR}/server.prod.mjs" &
fi;

echo "${GREEN}\n➤  Running production server\n${RESET}"

