# Plugins

## Surround

[Vim surround](https://github.com/tpope/vim-surround) is all about surrounding *things*. Parentheses, brackets, quotes, tags, you name it.

```jsx
" Change surrounding " to '
cs"'
" Surround word with brackets, 'ys' to surround an object, 'iw' inside word object, and what to surround with
ysiw{
" Surround selection with something
S[something]
```

## Golang

Go language support for vim: [fatih/vim-go](https://github.com/fatih/vim-go).

```jsx
" Go to definition/declaration
gd
" Go back
<C+t>
" Rename anything
:GoRename
" Show function callers
:GoCallers
" Show callstack
:GoCallstack
" Implement interface
:GoImpl [receiver] [interface]
" Keyifi struct literals
:GoKeyify
" Fill struct fields
:GoFillStruct
" Create if err != nil return
:GoIfErr
```

## Unimpaired

Useful and cool complementary pairs of mappings, [tpope/vim-unimpaired](https://github.com/tpope/vim-unimpaired).

There are mappings which are simply short normal mode aliases for commonly used ex commands. `]q` is :cnext. `[q` is :cprevious. `]a` is :next.  `[b` is :bprevious.  See the documentation for the full set of 20 mappings and mnemonics. All of them take a count.

There are line-wise mappings. `[<Space>` and `]<Space>` add newlines before and after the cursor line. `[e` and `]e` exchange the current line with the one above or below it.

There are mappings for toggling options. `[os`, `]os`, and `yos` perform `:set spell`, `:set nospell`, and `:set invspell`, respectively.  There's also `l` (`list`), `n` (`number`), `w` (`wrap`), `x` (`cursorline cursorcolumn`), and several others, plus mappings to help alleviate the `set paste` dance.

There are mappings for encoding and decoding. `[x` and `]x` encode and decode XML (and HTML). `[u` and `]u` encode and decode URLs. `[y` and `]y` do C String style escaping.

And in the miscellaneous category, there's `[f` and `]f` to go to the next/previous file in the directory, and `[n` and `]n` to jump betweenSCM conflict markers.

The `.` command works with all operator mappings, and will work with the line-wise mappings as well if you install [repeat.vim](https://github.com/tpope/vim-repeat).

## Targets

[Targets.vim](https://github.com/wellle/targets.vim) is a Vim plugin that adds various text objects to give you more targets to operate on. It expands on the idea of simple commands like di' (delete inside the single quotes around the cursor) to give you more opportunities to craft powerful commands that can be repeated reliably. One major goal is to handle all corner cases correctly.

## FZF

[fzf.vim](https://dev.to/iggredible/how-to-search-faster-in-vim-with-fzf-vim-36ko) 

# Advanced usage

## Search and replace across multiple files

```jsx
" Find all occurences of pizza, this needs the vim grep command to be set to rigrep
:grep "pizza"
" Quick fix do -> do something for all entries in quickfix list, that's where grep puts the matches
:cfdo %s/pizza/donut/g | update
```

