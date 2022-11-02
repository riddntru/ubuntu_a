#!/bin/bash

opt=$1
opt1=$2

if [ $opt == 'test' -a $opt1 == 'aaa' ]; then
  echo good
else
  echo bad
fi
