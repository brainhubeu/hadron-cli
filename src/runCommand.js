import fs from 'fs';
import merge from 'lodash/merge';
import { mapValues, getPath, readConfigFile, runCommand, defaultCommands } from './helpers';
import { DEFAULT_FIELDS, CONFIG_FILENAME, DEFAULT_CONFIG, ERROR_MESSAGES } from './config';
let argv = require('yargs')
  .usage('Usage: $0 <command> [options]');

/* getting config */
const config = DEFAULT_CONFIG;
merge(config, readConfigFile(getPath(CONFIG_FILENAME)));

/* registering commands */
const commandsRegistry = config.autoRegistry
  ? fs.readdirSync(getPath(config.commandsDirectory))
  : require(getPath(config.commandsRegistryFile)).default;

const commands = commandsRegistry.map(commandPath => {
  const command = require(getPath(config.commandsDirectory, commandPath));
  return mapValues(DEFAULT_FIELDS, sourceKey => command[sourceKey]);
});

// TODO add command validation (e.g. require name and action)

/* adding commands to yargs */
commands.forEach(command => {
  argv = argv.command(command.name, command.description, command.flags || {}, runCommand(command.action));
});

/* adding default commands to yargs */
defaultCommands.forEach(command => {
  argv = argv.command(command.name, command.description, command.flags || {}, runCommand(command.action));
});

argv = argv
  .strict()
  .demandCommand(1, 1, ERROR_MESSAGES.noCommandProvided, ERROR_MESSAGES.tooManyCommandsProvided)
  .recommendCommands();

argv = argv.argv;
