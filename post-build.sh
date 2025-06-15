#!/bin/bash
# script to move files from dist folder to www/consumer folder
SOURCE_DIR="$(pwd)/dist"
DEST_DIR="$(pwd)/../www/consumer"

# Clear DEST_DIR before move files
rm -rf "$DEST_DIR"/*

# Copy files from SOURCE_DIR to DEST_DIR
cp -r "$SOURCE_DIR"/* "$DEST_DIR"
cp _redirects "$DEST_DIR"

# Edit index.html to replace /assets/ by /consumer/assets/
sed -i -e "s/\/assets\//\/consumer\/assets\//g" "$DEST_DIR/index.html"

# Remove temporary file called index.html-e
rm -f "$DEST_DIR/index.html-e"
