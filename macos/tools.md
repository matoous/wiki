# Tools

## Tools

- *[ag - The Silver Searcher](https://github.com/ggreer/the_silver_searcher)*,
  crazy fast code searching tool similar to `ack`.

  Install with: `brew install the_silver_searcher`

- *[ripgrep](https://github.com/BurntSushi/ripgrep)* - another search tool,
  while the functionality overlaps with `ag` this one has a few more tricks
  up the sleeve, see [this](https://beyondgrep.com/feature-comparison/) comparison.

  Install with: `brew install ripgrep`

  - [Fast Searching with ripgrep (2020)](https://mariusschulz.com/blog/fast-searching-with-ripgrep)
  - [Search and replace tricks with ripgrep (2020)](https://learnbyexample.github.io/substitution-with-ripgrep/) ([Lobsters](https://lobste.rs/s/tn4olb/search_replace_tricks_with_ripgrep))

- *awk* - _TODO_

  - [Awk in 20 Minutes](https://ferd.ca/awk-in-20-minutes.html) ([HN](https://news.ycombinator.com/item?id=23048054))

- *[jq](https://stedolan.github.io/jq/)* - flexible and lightweight JSON processor
  that allows you to slice, transform, map and filter JSON data with eas.

  Install with: `brew install jq`

  - [Awesome jq](https://github.com/fiatjaf/awesome-jq) - Curated list of awesome things built with the JSON processor and turing-complete functional language jq.

- *[fd](https://github.com/sharkdp/fd)* simple, fast and user-friendly alternative to find.

  Install using `brew install fd`

- *[git](https://github.com/git/git)* for version control obviously.

  Install using `brew install git`

- *[curl](https://curl.se/docs/manpage.html)*, I prefer HTTPie but curl works
  out of the box on many systems being more friendly for sharing commands and
  scripts.

  Comes pre-insatlled on MacOS, but if you also install the keg using
  `brew install curl` you will get autocompletion.

- *[HTTPie](https://httpie.org/)* - `curl`/`wget` alternative with highlighting,
  JSON support, plugins and much more.

  Install using: `brew install httpie`

- *[fzf](https://github.com/junegunn/fzf)* - command line fuzzy finder for anything.
  With `fzf` you can easily search for files, directories, commands from history and more using fuzzy matching.

  Install using: `brew install fzf` and to enable useful key bindings:`$(brew --prefix)/opt/fzf/install`

- *[exa](https://github.com/ogham/exa)* - modern alternative to `ls`.
  Exa ships with better defaults and colorful highlighting, it has also support
  for git, symlinks and file attributes and is written in rust, so it is super fast.

  Install using: `brew install exa`

- *[htop](https://htop.dev/)*, interactive process viewer.

  Install using: `brew install htop`

  - [htop explained](https://peteris.rocks/blog/htop/)

- *[pandoc](https://github.com/jgm/pandoc)*, universal markup converted.
  Supports `tex`, `md`, `docx`, `odt`, and many more.

  Install using: `brew install pandoc`

- *[noti](https://github.com/variadico/noti)* - monitor for processes
  that triggers notification once the process completes.
  Nice for long builds, uploads or downloads, and other long running scripts.

  Install using: `brew install noti`

- *[tldr](https://tldr.sh/)* - simplified man pages with examples, for whenever you forget the command usage and don't want to read through thousands of lines of man page to find the flag you are looking for. (On the other hand, `tldr` is sometimes too brief).

  Install using: `brew install tldr`

- *[Mackup](https://github.com/lra/mackup)* - backup and keep your application settings in sync. Mackup supports multiple storages for backup - Dropbox, Google Drive, iCloud and more.

  Install using: `brew install mackup`

- *[asciinema](https://github.com/asciinema/asciinema)* - terminal session recorder.

  Install using: `brew install asciinema`

- *[ffsend](https://github.com/timvisee/ffsend)* - easily and securely share files from the command line using Firefox Send. `ffsend` has also many useful features such as protecting the shared file with password or limiting the number of downloads.

  Install using: `brew install ffsend`

- *[neofetch](https://github.com/dylanaraps/neofetch)* - command line
  system information tool, similar to `screenfetch` but more stylish.

  Install using: `brew install neofetch`

- *[hugo](https://github.com/gohugoio/hugo)* - static site generator written in Go.
  Used for my [personal webpage](https://dzx.cz).

  Install using: `brew install hugo`

- *[emojify](https://github.com/mrowa44/emojify)* - substitue emoji aliases
  on command line.

  Install using: `brew install emojify`

- *[dive](https://github.com/wagoodman/dive)* - a tool for exploring docker
  images.

  Install using: `brew install dive`

- *[gist](https://github.com/defunkt/gist)* - upload content to [gist.github.com](https://gist.github.com/discover). Gist makes it easy to share code snippets, simple markdown files and more, all from the command line.

  Install using: `brew install gist`

- *[youtube-dl](https://ytdl-org.github.io/youtube-dl/index.html)* - download videos, audio or whole playlists from youtube.

  Install using: `brew install youtube-dl`

- *[bat](notion://www.notion.so/matousdz/Computer-Science-adccc07398e04fe3b6b6b3ac98029f61?p=51166fcb3e3c49f18c0f00fe0586dc08&showMoveTo=true)* - `cat` alternative with colors and more.

  Install using: `brew install bat`

- *[trash](https://github.com/ali-rantakari/trash)* - move files into thrash.
  Works best aliased to `rm`.

  Install using: `brew install trash`

- *[jrnl](https://jrnl.sh/en/stable/)* - simple journaling in the command line

- *[pingme](https://github.com/kha7iq/pingme)* - send messages & alerts to various platforms (discord, email, slack, telegram, etc.)

- *[todo.txt](https://github.com/todotxt/todo.txt-cli)* - todo management from the command line
  - [Goodbye Trello, Hello Todo.txt](https://joehallenbeck.com/goodbye-trello-hello-todo-txt/)
  - [Todo.txt Practices](https://joehallenbeck.com/todo-txt-practices/)
  - [Tasks](https://plaintext-productivity.net/1-00-tasks-introduction.html)

## Resources

- [MacHack](https://github.com/kendfinger/MacHack) - List of built-in tools in macOS that you probably didn't know about.
- [VMCLI](https://github.com/gyf304/vmcli) - Set of utilities to help you manage VMs with Virtualization.framework. ([HN](https://news.ycombinator.com/item?id=25786640))
- [Curated list of shell commands and tools specific to macOS](https://github.com/herrbischoff/awesome-macos-command-line)
- [maclaunchmaclaunch](https://github.com/HazCod/maclaunch) - Manage your macOS startup items.

