#!/bin/sh
echo "[documentation] build..."
docker rmi -f ramesesinc/documentation:1.01
docker build -t ramesesinc/documentation:1.01 .
echo ""
echo "[documentation] done..."
