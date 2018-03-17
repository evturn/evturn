#! /bin/env bash

BUILDDIR="${PWD}/build";
TOOLSDIR="${PWD}/tools";

echo `tput setaf 6`$'\n➤  Running build script'`tput sgr0`;

if [[ -d $BUILDDIR && ! -L $BUILDDIR ]]; then
  rm -rf $BUILDDIR;
  echo `tput setaf 2`$'✓  Old files removed.\n'`tput sgr0`;
fi

echo `tput setaf 6`$'➤  Starting compile process...\n'`tput sgr0`;

node --experimental-modules --no-warnings "${TOOLSDIR}/webpack.config.prod.mjs";

echo `tput setaf 2`$'\n✓  Build completed.\n'`tput sgr0`;
