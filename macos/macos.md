# macOS

[Apps](/macOS/apps.md) and [Tools](macOS/tools.md) and
overall setup of macOS dvelopment environment.

## Shell productivity

Programs and tools provide many features that can speed things up but first one needs to learn them.

- [Shell productivity tips and tricks](https://blog.balthazar-rouberol.com/shell-productivity-tips-and-tricks.html) guide by [Balthazar Rouberol](https://blog.balthazar-rouberol.com/).

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

## Learn more

1. [Text processing in the shell](https://blog.balthazar-rouberol.com/text-processing-in-the-shell)
2. [Linux Productivity Tools](https://www.usenix.org/sites/default/files/conference/protected-files/lisa19_maheshwari.pdf)
3. [nikitavoloboev/my-mac-os](https://github.com/nikitavoloboev/my-mac-os)

# Links

- [Awesome command line tools](https://github.com/learn-anything/command-line-tools)
- [Ask HN: What are your favorite terminal programs?](https://news.ycombinator.com/item?id=17011227)
- [What's an awesome Linux/Unix command that you wish someone had told you about earlier?](https://twitter.com/b0rk/status/993165679833567233)
- [Awesome Console Services](https://github.com/chubin/awesome-console-services)
- [Awesome jq](https://github.com/fiatjaf/awesome-jq) - Curated list of awesome things built with the JSON processor and turing-complete functional language jq.
- [cli.fan blog](https://cli.fan/posts/introduction/) - [Introduction](https://cli.fan/posts/introduction/).
- [One Things Well blog](https://onethingwell.org/) - Weblog about simple, useful software.
- [Terminals Are Sexy](https://terminalsare.sexy/) - Curated list of Terminal frameworks, plugins & resources for CLI lovers.
- [Inconsolation](https://inconsolation.wordpress.com/) - Adventures with lightweight and minimalist software for Linux.
- [Arabesque](https://sanctum.geek.nz/arabesque/) - Systems, Tools, and Terminal Science.
- [The Art of Command Line](https://github.com/jlevy/the-art-of-command-line)
- [cheat](https://github.com/cheat/cheat) - Allows you to create and view interactive cheatsheets on the command-line. ([HN](https://news.ycombinator.com/item?id=24195122))
- [hyperfine](https://github.com/sharkdp/hyperfine) - Command-line benchmarking tool.
- [An Illustrated Guide to Useful Command Line Tools (2019)](https://www.wezm.net/technical/2019/10/useful-command-line-tools/) ([Lobsters](https://lobste.rs/s/pven1z/illustrated_guide_some_useful_command)) ([HN](https://news.ycombinator.com/item?id=21363121))
- [uutils coreutils](https://github.com/uutils/coreutils) - Cross-platform Rust rewrite of the GNU coreutils.
- [The Language Agnostic, All-Purpose, Incredible, Makefile (2019)](https://blog.mindlessness.life/makefile/2019/11/17/the-language-agnostic-all-purpose-incredible-makefile.html) ([Lobsters](https://lobste.rs/s/ots6gm/language_agnostic_all_purpose)) ([HN](https://news.ycombinator.com/item?id=21566530))
- [CLI: improved (2018)](https://remysharp.com/2018/08/23/cli-improved)
- [Awesome CLI apps](https://github.com/agarrharr/awesome-cli-apps)
- [Fast Searching with ripgrep (2020)](https://mariusschulz.com/blog/fast-searching-with-ripgrep)
- [Awk in 20 Minutes](https://ferd.ca/awk-in-20-minutes.html) ([HN](https://news.ycombinator.com/item?id=23048054))
- [Grep for System Admins: Using Grep to Automate Daily Tasks (2020)](https://developer.okta.com/blog/2020/05/06/grep-for-system-admins)
- [Command line interfaces are reified UIs (2017)](https://www.expressionsofchange.org/reification-of-interaction/) ([HN](https://news.ycombinator.com/item?id=15619796)) ([Lobsters](https://lobste.rs/s/sjtxdi/clis_are_reified_uis))
- [My Favorite CLI Tools (2020)](https://switowski.com/blog/favorite-cli-tools) ([HN](https://news.ycombinator.com/item?id=23603906))
- [wttr.in](https://github.com/chubin/wttr.in) - Console-oriented weather forecast service. ([HN](https://news.ycombinator.com/item?id=23646953))
- [Structured text tools](https://github.com/dbohdan/structured-text-tools) - List of text-based file formats and command line tools for manipulating each.
- [Conventions for Command Line Options (2020)](https://nullprogram.com/blog/2020/08/01/) ([HN](https://news.ycombinator.com/item?id=24020952))
- [Rewritten in Rust: Modern Alternatives of Command-Line Tools (2020)](https://zaiste.net/posts/shell-commands-rust/) ([Lobsters](https://lobste.rs/s/2mxwdm/rewritten_rust_modern_alternatives))
- [Search and replace tricks with ripgrep (2020)](https://learnbyexample.github.io/substitution-with-ripgrep/) ([Lobsters](https://lobste.rs/s/tn4olb/search_replace_tricks_with_ripgrep))
- [What are your favorite non-standard CLI utils/applications (2020)](https://lobste.rs/s/eprvjp/what_are_your_favorite_non_standard_cli)
- [cheat.sh](https://github.com/chubin/cheat.sh) - Unified access to the best community driven cheat sheets. Available via CLI. ([Web](https://cheat.sh/))
- [My growing list of Rust programs to use](https://gist.github.com/Phate6660/76779693f654d48c5c410be658c53f02) ([Lobsters](https://lobste.rs/s/ltd2be/my_growing_list_rust_programs_use))
- [dasel](https://github.com/TomWright/dasel) - Allows you to query and modify data structures using selector strings.
- [You Don't Need GUI](https://github.com/you-dont-need/You-Dont-Need-GUI) - CLI commands as alternatives to GUI.
- [CLI Guidelines](https://clig.dev/) - Guide to help you write better command-line programs, taking traditional UNIX principles and updating them for the modern day. ([Code](https://github.com/cli-guidelines/cli-guidelines)) ([HN](https://news.ycombinator.com/item?id=25304257)) ([Lobsters](https://lobste.rs/s/bsgtju/cli_guidelines))
- [nq](https://github.com/leahneukirchen/nq) - Utils for creating lightweight job queue systems. ([HN](https://news.ycombinator.com/item?id=25920517))
- [Building Rich Terminal Dashboards (2021)](https://www.willmcgugan.com/blog/tech/post/building-rich-terminal-dashboards/) ([HN](https://news.ycombinator.com/item?id=26149488))
- [frawk](https://github.com/ezrosent/frawk) - JITted and SIMD-optimized AWK written in Rust. ([Lobsters](https://lobste.rs/s/bdzlsu/frawk_jitted_simd_optimized_awk_written))

[Tools](CLI%2051166fcb3e3c49f18c0f00fe0586dc08/Tools%200ba80850b8624ccc9dd31a32a1421fc2.md)

[Vim](CLI%2051166fcb3e3c49f18c0f00fe0586dc08/Vim%20b958a3a8bbf448c5993dc6280cb3e984.md)
