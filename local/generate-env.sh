#!/bin/bash

# Check if .env file already exists
if [ -f .env ]; then
  echo "File .env already exists. Skipping copy."
else
  # Copy .env.example to .env
  cp .env.example .env
  echo "Copied .env.example to .env"
fi