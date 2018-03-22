## Configuration
When running command hadron-cli will look for `.hadronclirc` file in current directory. You can overwrite some or all configuration options on per-project basis.

NOTE: `.hadronclirc` file must be JSON-parsable

#### Customizing commands registry file path
Default path to registry file is `./commands.js`. All non-absolute paths are resolved relative to current directory.
```
{
  "commandsRegistryFile": "./my/custom/registry.js",
}
```

#### Customizing commands directory
Default commands dir is `./commands`. All non-absolute paths are resolved relative to current directory.
```
{
  "commandsDirectory": "./my/custom/commands/path",
}
```

#### Auto registry
You can turn auto-registry option on in `.hadronclirc`. Auto-registry is turned off by default.
```
{
  "commandsDirectory": "./commands",
  "autoRegistry": true
}
```
Now you don't need to add paths to all commands, all files in commandsDirectory will be registered as commands, and `commandsRegistryFile` will be ignored.

#### Adding alias to hadron command
If you want to use different name you can add alias for hadron command. There is a built-in command to generate the alias for you:

```bash
$ hadron createAlias cli

# hadron alias
alias cli="hadron"

```

You can copy the output to your .bashrc or .zshrc (or whatever shell you're using)

Example for .zshrc:
```bash
$ hadron createAlias cli >> ~/.zshrc
```

And now you can use `cli` instead of `hadron`:
```bash
$ cli myProject:myCommand
```