## Defining arguments
You can define argument for your command. They will be available in the params object and named according to the order they were passed to the command.

#### Optional arguments
You can define optional arguments.
```
// ./commands/commandWithOptionalArgument.js

export const name = 'myApp:commandWithOptionalArgument [foo]';

export const description = 'This command has optional argument';

export const action = options => {
  console.log(`I got foo: ${options.foo}`);
};
```

The command can be used as follows:
```bash
$ hadron myApp:commandWithOptionalArgument
I got foo: undefined
```

```bash
$ hadron myApp:commandWithOptionalArgument fooValue
I got foo: fooValue
```

#### Required arguments
You can define required arguments. For obvious reasons, required arguments must precede optional arguments.
```
// ./commands/commandWithArguments.js

export const name = 'myApp:commandWithArguments <foo> [bar]';

export const description = 'This command has different arguments';

export const action = options => {
  console.log(`I got foo: ${options.foo}, bar: ${options.bar}`);
};
```

The command can be used as follows:
```bash
$ hadron myApp:commandWithArguments

hadron myApp:commandWithArguments <foo> [bar]

This command has different arguments

Options:
  --help     Show help                                                 [boolean]
  --version  Show version number                                       [boolean]

Not enough non-option arguments: got 0, need at least 1
```

```bash
$ hadron myApp:commandWithArguments fooValue
I got foo: fooValue, bar: undefined
```

```bash
$ hadron myApp:commandWithArguments fooValue barValue
I got foo: fooValue, bar: barValue
```
