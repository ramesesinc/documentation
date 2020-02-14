#!/bin/sh

git pull
git push

ssh rameses@192.168.254.11 "sh pull-docs.sh"

