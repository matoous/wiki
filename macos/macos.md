# macOS

[Apps](/macOS/apps.md) and [Tools](macOS/tools.md) and
overall setup of macOS dvelopment environment.

## Color Themes

I currently use [Github iTerm2 theme](https://github.com/fcaldera/github-primer-iterm2),
specifically, the dark variant.

Here are some other resources for color themes:

* [sindresorhus/iterm2-snazzy](https://github.com/sindresorhus/iterm2-snazzy)

## Fonts

[Nerd Fonts - Iconic font aggregator, glyphs/icons collection, & fonts patcher](https://www.nerdfonts.com/font-downloads)

## Making it easier with aliases

Aliases. Lets type less and do more with following:

1. Navigation - here's a few aliases that make the navigation easier

    ```
    alias ..="cd .."
    alias ...="cd ../.."
    alias ....="cd ../../.."
    alias .....="cd ../../../.."
    alias ~="cd ~" # `cd` is probably faster to type though
    alias -- -="cd -" # switch between old and present working directory

    ```

2. Alternatives - I use a lot of alternatives to common tools so I override them using aliases

    ```
    alias cat="bat"
    alias download="http --follow --download"
    alias diff="colordiff"
    alias diff="colordiff"
    alias rm="trash" # this is a live saver
    alias ls="exa --group-directories-first"

    ```

3. Shortcuts - lets create shorter names for commands that are used often

    ```
    alias g="git"
    alias reload!='. ~/.zshrc'
    alias x="exit"
    alias sz="source ~/.zshrc"
    alias ls="exa --group-directories-first"
    alias lst="exa --group-directories-first -T"
    alias ll="exa --group-directories-first -l"
    alias la="exa --group-directories-first -a"
    alias lat="exa --group-directories-first -a -T"
    alias path='echo -e ${PATH//:/\\\\n}'

    ```

4. Fun - some other fun shorthands that are pretty much useless but nice to have.

    ```
    # Stuff I never really use but cannot delete either because of <https://xkcd.com/530/>
    # original aliases used 'muted true' instead of 'volume 0', I find this better
    alias stfu="osascript -e 'set volume output volume 0'"
    alias pumpit="osascript -e 'set volume output volume 100'"

    alias afk="/System/Library/CoreServices/ScreenSaverEngine.app/Contents/MacOS/ScreenSaverEngine"
    alias sleep="pmset sleepnow"

    ```

## Functions

1. Share anything from command line - I already talked about the `ffsend` command for sharing but this functions takes it a step further:

    ```
    # share file for one download only, uses <https://github.com/timvisee/ffsend>
    share(){
      ffsend upload $1 --archive --copy --no-interact --download-limit=1
    }

    ```

    This function will: archive the file (or files, or directory), upload it, set the download limit
    to 1 download and copy the link to the sharable URL to your clipboard. Pretty neat right!
    I use this anytime I get a request to share some photos (in reasonable size) or documents.

## Git Aliases

To speed up the development I also use bunch of git aliases so I can type less and do more.
These are mostly individual and depend on personal preferences but one that I found especially useful in my day to day use is `cane = commit --amend --no-edit`. In our team at [Kiwi.com](http://kiwi.com/) we always do 1 commit per MR, this means that I often add changes to already pushed commits and this alias makes it super easy and fast.

```
[alias]
  w = switch
  hist = log --pretty=format:'%h %ad | %s%d [%an]' --graph --date=short
  type = cat-file -t
  dump = cat-file -p
  c = commit
  b = branch
  s = status
  p = pull
  d = diff
  lo = log --oneline -n 10
  unstage = reset HEAD
  pushf = push --force-with-lease
  cane = commit --amend --no-edit
[apply]
  whitespace = fix
[credential]
  helper = osxkeychain
[push]
  default = current
[rerere]
  enabled = true

```

## Resources

- [github.com/nikitavoloboev/my-mac-os](https://github.com/nikitavoloboev/my-mac-os)
- [github.com/sb2nov/mac-setup](https://sourabhbajaj.com/mac-setup/)
- [Hard to discover tips and apps for making macOS pleasant](https://thume.ca/2020/09/04/macos-tips/)

