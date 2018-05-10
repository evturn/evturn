#!/usr/bin/env bash

BUILD_DIR="${PWD}/build"
TOOLS_DIR="${PWD}/tools"
PUBLIC_DIR="${PWD}/public"

CYAN="$(tput setaf 6)"
GREEN="$(tput setaf 2)"
RESET="$(tput sgr0)"

echo "${CYAN}➤  Creating production build\n${RESET}"

if [[ -d $BUILD_DIR && ! -L $BUILD_DIR ]]; then
  rm -rf $BUILD_DIR;
  echo "${CYAN}✓  Cleaning build/\n${RESET}"
fi

mkdir $BUILD_DIR

node --experimental-modules --no-warnings "${TOOLS_DIR}/webpack.config.prod.mjs"
rsync --exclude "index.html" -avhz --no-perms "${PUBLIC_DIR}/" "${BUILD_DIR}/"

echo "${GREEN}\n⌁  Done. ⌁\n${RESET}"
