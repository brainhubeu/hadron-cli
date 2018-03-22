## More advanced command options
You can also pass arrays and objects to your commands and boolean passed multiple times will be counted.

#### Arrays
You can pass an array just by providing the same option more than once:

```bash
$ hadron myApp:someCommand --foo=firstValue --foo=secondValue --foo=thirdValue

foo: ['firstValue', 'secondValue', 'thirdValue']
```

```bash
$ hadron myApp:someCommand -f firstValue -f secondValue -f thirdValue

foo: ['firstValue', 'secondValue', 'thirdValue']
```

#### Objects
You can pass objects by using dots:
```bash
$ hadron myApp:someCommand --foo.bar=barValue --foo.baz.baq=baqValue

foo: { bar: 'barValue', baz: { baq: 'baqValue' } }
```

#### Counting booleans
If you provide boolean value more than once it will have integer value
```bash
$ hadron myApp:someCommand --foo --foo --foo

foo: 3
```
