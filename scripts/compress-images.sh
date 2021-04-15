#!/usr/bin/env bash

DIR="src/assets/img/projects/"

for f in $(dir -1 $DIR); do
  convert "$DIR/$f" -colors 256 -strip -quality 25% "$DIR/$f"
done
