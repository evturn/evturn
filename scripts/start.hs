#!/usr/bin/env stack
{- stack
  script
  --resolver lts-10.6
  --package process
-}
import           System.Process

main :: IO ()
main =  do
  _ <- createProcess $ shell "echo `tput setaf 6`$'\n➤  Starting dev server\n'`tput sgr0`;"
  print "Here is an empty tuple which I will not print."
