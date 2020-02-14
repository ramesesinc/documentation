#!/bin/sh

msg=$@
msglen=${#msg}

if [ $msglen == 0 ] 
then
    echo 'Specify commnit message'
    exit 65
fi

git add .
git commit -am "$msg"

