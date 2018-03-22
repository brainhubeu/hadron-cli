## Advanced command options
You can define if option has default value (which will be set when it is not provided by the user) or if it should be required.

#### Required options
You can define default values for options or set some options as required:
```
// ./commands/commandWithRequired.js

export const name = 'myApp:commandWithRequired';

export const description = 'This command has required option';

export const action = options => {
  console.log(`I got foo: ${options.foo}`);
};

export const flags = {
  foo: {
    alias: 'f',
    required: true,
    description: 'Required foo option',
  },
};
```

```bash
$ hadron myApp:commandWithRequired

hadron myApp:commandWithRequired

This command has required option

Options:
  --help     Show help                                                 [boolean]
  --version  Show version number                                       [boolean]
  --foo, -f  Required foo option                             [string] [required]

Missing required argument: foo
```

```bash
$ hadron myApp:commandWithRequired --foo=fooValue

I got foo: fooValue
```


#### Required options
You can define default values for options or set some options as required:
```
// ./commands/commandWithDefault.js

export const name = 'myApp:commandWithDefault';

export const description = 'This command has default value';

export const action = options => {
  console.log(`I got foo: ${options.foo}`);
};

export const flags = {
  foo: {
    alias: 'f',
    default: 'defaultFooValue'
    description: 'Required foo option',
  },
};
```

```bash
$ hadron myApp:commandWithRequired

I got foo: defaultFooValue
```

```bash
$ hadron myApp:commandWithRequired --foo=fooValue

I got foo: fooValue
```
