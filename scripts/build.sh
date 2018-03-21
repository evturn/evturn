#!/bin/env bash

BUILDDIR="${PWD}/build";
TOOLSDIR="${PWD}/tools";
PUBLICDIR="${PWD}/public";

echo `tput setaf 6`$'\n➤  Create production build...'`tput sgr0`;

if [[ -d $BUILDDIR && ! -L $BUILDDIR ]]; then
  rm -rf $BUILDDIR;
  echo `tput setaf 2`$'✓  Old files removed.\n'`tput sgr0`;
fi

echo `tput setaf 6`$'➤  Running compiler...\n'`tput sgr0`;

node --experimental-modules --no-warnings "${TOOLSDIR}/webpack.config.prod.mjs";

echo `tput setaf 6`$'➤  Copying public files...\n'`tput sgr0`;

rsync -avh "${PUBLICDIR}/media/" "${BUILDDIR}/static/media";
rsync -avh "${PUBLICDIR}/manifest.json" "${BUILDDIR}/";

echo `tput setaf 2`$'\n❖  Build completed.\n'`tput sgr0`;
