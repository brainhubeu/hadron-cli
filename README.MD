# hadron-cli
> Console commands framework

Library allowing you to define and run your own console commands in no time.

## Basic usage
#### Installation
hadron-cli requires node 8 or newer

`npm i hadron-cli -g`

NOTE: the library is in early stage of development, and it's still not published to npm!

#### Creating simple command
```js
// ./commands/mySimpleCommand.js

export const name = 'myApp:mySimpleCommand';

export const description = 'This command does not do much';

export const action = options => {
  console.log('My simple command got following option:', options.foo);
};

export const flags = {
  foo: {
    alias: 'f',
    description: 'Optional option',
  },
};
```

#### Adding command to registry
```js
// ./commands.js
export default [
  'mySimpleCommand.js',
];
```

#### Running command
```bash
$ hadron myApp:mySimpleCommand -f barbaz
```
And the result will be:
```
My simple command got following option: barbaz
```

#### Getting help
Help will be automagically generated:
```bash
$ hadron --help

Usage: hadron <command> [options]

Commands:
  hadron myApp:mySimpleCommand  This command does not do much

Options:
  --help     Show help                                                 [boolean]
  --version  Show version number                                       [boolean]

```

```bash
$ hadron myApp:mySimpleCommand --help

hadron myApp:mySimpleCommand

This command does not do much

Options:
  --help     Show help                                                 [boolean]
  --version  Show version number                                       [boolean]
  --foo, -f  Optional option
```

## Docs
- [Configuration](docs/configuration.md)
- [Advanced command options](docs/advancedOptions.md)
- [Even more advanced command options](docs/moreAdvancedOptions.md)
- [Command arguments](docs/arguments.md)

## Roadmap
- Write tests
- Add command validation
- Add custom help

## FAQ
#### Are there good alternatives?
This library depends on [yargs](https://github.com/yargs/yargs) which you may want to use directly.

#### I found a bug! What should I do?
There are at least 3 options:
1. Add an issue, write test(s) for bug you found, write fix that will make your test(s) pass, submit pull request
2. Add an issue, write test(s) for bug you found, submit pull request with you test(s)
3. Add an issue
