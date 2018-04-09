#!/usr/bin/env node

require('babel-register')({
  ignore: /node_modules\/(?!@brainhubeu\/hadron-cli)/,
});
require('./runCommand');
