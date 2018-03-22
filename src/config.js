export const DEFAULT_FIELDS = {
  name: 'name',
  description: 'description',
  action: 'action',
  flags: 'flags',
};

export const CONFIG_FILENAME = '.hadronconsolerc';

export const DEFAULT_CONFIG = {
  commandsDirectory: './commands',
  commandsRegistryFile: 'commands.js',
  autoRegistry: false,
};

export const ERROR_MESSAGES = {
  noCommandProvided: 'You must provide one valid command',
  tooManyCommandsProvided: 'You must provide one valid command',
};
