#!/bin/bash

if [ -f /home/$1/.plan ]; then
  cat /home/$!/.plan
else
  echo "User $1 is not make .plan file.."
fi
