import path from 'path';
import fs from 'fs';
import { CONFIG_FILENAME } from './config';

export const forEach = (obj, iteratee) => {
  const keys = Object.keys(obj);
  keys.forEach(key => {
    iteratee(obj[key], key);
  });
};

export const mapValues = (obj, iteratee) => {
  const result = {};
  forEach(obj, (el, key) => {
    result[key] = iteratee(el, key);
  });
  return result;
};

export const getPath = (...paths) => path.resolve(process.cwd(), ...paths);

export const readConfigFile = path => {
  if (fs.existsSync(path)) {
    const userConfigFile = fs.readFileSync(getPath(CONFIG_FILENAME));
    if (userConfigFile) {
      try {
        const userConfig = JSON.parse(userConfigFile);
        return userConfig;
      } catch (error) {
        return {};
      }
    }
  }
};

export const runCommand = commandAction => argv => {
  const { _, $0, help, version, ...rest } = argv; // eslint-disable-line no-unused-vars
  return commandAction(rest);
};

export const defaultCommands = [
  {
    name: 'createAlias <aliasName>',
    description: 'Creates alias for hadron command',
    action: params => console.log(`# hadron alias\nalias ${params.aliasName}="hadron"\n`),
  },
];
