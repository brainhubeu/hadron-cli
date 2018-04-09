#!/usr/bin/env node

require('babel-register')({
  ignore: false,
  only: /src/,
});
require('./runCommand');
