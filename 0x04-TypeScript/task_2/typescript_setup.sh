#!/usr/bin/bash
nvm use 21.2.0
npm install
npm install typescript --save-dev
npm install webpack webpack-cli --save-dev
npm install ts-loader --save-dev
npm install webpack-dev-server --save-dev
npm install clean-webpack-plugin fork-ts-checker-webpack-plugin html-webpack-plugin --save-dev
npm install jest ts-jest @types/jest --save-dev
npm install @babel/plugin-proposal-export-default-from @babel/preset-typescript --save-dev
npm install @typescript-eslint/eslint-plugin @typescript-eslint/parser --save-dev
npx tsc --init
npx webpack
