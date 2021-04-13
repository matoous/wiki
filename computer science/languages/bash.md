# Bash

## Conditionals

```bash
if [ expression ]
then
    command
fi

# or
if [ expression ]; then command; fi
```

You can use chaining of commands to simplify things

```bash
if [ -r ~/.profile ]; then
    source ~/.profile
fi
```

becomes

```bash
[ -r ~/.profile ] && . ~/.profile
```

or

```bash
init && configure && install && cleanup || echo Install failed
```

## Resources

- [Elegant bash conditionals](https://timvisee.com/blog/elegant-bash-conditionals/)

