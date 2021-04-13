# Vim

Here's a little cheat sheet of commands that I for whatever reason considered worthy of typing down. Either because I found them useful, neat, or I forgot them one too many times and got tired of googling them.

## Navigating

```jsx
" Up, down, left, righ
k, j, h, l
" Right by word, left by word, end of word
w, b, e
" Begining of line, end of ling
^, $
" Top of screen, middle of screen, bottom of the screen
H, M, L
" Page down, page up
<C+d>, <C+u>
" Begining of sentece, end of sentence
(, )
" Begining of text block, end of text block
{, }
" To occurence of character to the right, places cursor ON the character
f{char}
" To occurence of character to the left, places cursor ON the character
F{char}
" Till occurence of character to the right, places cursor before the character
t{char}
" Till occurence of character to the right to the left, places cursor before the character
T{char}
" Repeat latest f, F, t, T
;
" Repeat latest f, F, t, T in opposite directioin
,
" Go to line
[line]G
" Go to last line in range, doesn't modify the jumplist
:[range]
" Go to {count} percentage in the file
{count}%
```

[reference](https://www.cs.auckland.ac.nz/references/gnu/vim/motion.html)

## Inserting

```jsx
" Append right of the cursor, append at the end of line
a, A
" Insert left of the cursor, insert at the start of the line
i, I
" Open line under, open line above
o, O
```

## Changing text

```jsx
" Change word
cw
" Change line
cc
" Substitute text
s
" Replace character
r
```

## Deleting

```jsx
" Delete one character
x
" Delete something
d[motion]
" Delete line
dd
" Delete to the end of line
D
" Delete to the start of line
d0
" Delete text between quotes
di"
" Delete text between quotes and the quotes too
da"
" Delete paragraph
dip
```

## Undo and redo

To undo your latest action, press `u`, to redo it, press `<C+R>`. There's not much more to the basic usage except except `U` to undo all changes on the current line.

As with anything else in vim, there's of course more powerful version, in this case called *Undo branches*. You can basically undo something, make some changes, but still retain the undo history.

## Copying and Moving Text

Done using `yank` (copy), `delete`, and `put` commands.

```jsx
" yank whole line
yy, Y
" put below, put above
p, P 
```

Moving lines by default can be done by deleting and pasting. Optionally, you can use  [Unimpaired]().

## Commenting

```jsx
" Comment out something
[count]<leader>cn
" Toggle comment (based on first line)
[count]<leader>c<space>
```

---

[https://github.com/preservim/nerdcommenter](https://github.com/preservim/nerdcommenter)

## Search and replace

Done by `:substitute` command, also `:s`.

```jsx
" Search and replace on current line
:s/from/to/g
" Search and replace on all lines
:%s/from/to/g
" Ask for confirmation
:s/from/to/gc
```

## Folding

```jsx
" Fold (hide) selected area
zf
" Open (unfold) selected area
zo
```

## Global

`:global` or `:g` executes anything on any line of the buffer.

```jsx
" List all lines with TODO
:g/TODO:/
```

## Split panes

Create a vertical split using `:vsp` and horizontal with `:sp`. You can specify the width (and height) by prefixing the command with a number of lines, e.g. `:50vsp`. To make the opening of new split panes feel more natural you can set

```jsx
set splitbelow
set splitright
```

which will open the panes by default to the right or bottom.

### Navigate between split panes

By default you navigate between panes by `split_number C-w C-w`. This might get slower with more panes so I found this recommendation on stack overflow:

```
" Use ctrl-[hjkl] to select the active split!
nmap <silent> <c-k> :wincmd k<CR>
nmap <silent> <c-j> :wincmd j<CR>
nmap <silent> <c-h> :wincmd h<CR>
nmap <silent> <c-l> :wincmd l<CR>
```

### Split panes manipulation

Resizing

```jsx
"Max out the height of the current split
ctrl + w _
"Max out the width of the current split
ctrl + w |
"Normalize all split sizes, which is very handy when resizing terminal
ctrl + w =
```

Other manipulation

```
"Swap top/bottom or left/right split
Ctrl+W R
"Break out current window into a new tabview
Ctrl+W T
"Close every window in the current tabview but the current one
Ctrl+W o
```

And as with anything else, you can always `:help split`.

## Tabs

`:tabedit filename` to open file `filename` in a new tab. Navigate between tabs using `gt` and `gT`, this also supports tab indexes so for example `3gT` takes you to the third opened tab. You can also use `:tabfirst` and `:tablast` to navigate to first and last tab respectively. Then there's `:tabn` for next tab and `:tabp` for previous tab. If you want to list all open tabs you can use `:tabs`. To close current tab use `:tabclose` and to keep only the current tab and close the rest there's `:tabonly`.

- Resources

    [https://vim.fandom.com/wiki/Using_tab_pages](https://vim.fandom.com/wiki/Using_tab_pages)

    [https://vim.fandom.com/wiki/Alternative_tab_navigation](https://vim.fandom.com/wiki/Alternative_tab_navigation)

## Indentation

```jsx
" Indent left
<
" Indent right
>
" Autoindent
=
" Autoindent next line based on the current one
:set autoindent
" Smart indentation based on the file, if you have this on, autoindent should be on as well
:set smartindent
" Number of whitespaces to represent indentation
:set shiftwidth=2
```

## Spellchecking

Turn on spell checking `:set spell spelllang=en_us`. To turn on spell check only for local buffer use `:setlocal spell spelllang=en_us`. To turn off spelling use `:set nospell`.

This alone wouldn't be of much help obviously, but Vim provides means to fix misspelled words, a way to tell that certain words are correct and shouldn't be highlighted, and as always an easy way to navigate between misspelled words.

To move to misspelled word use `[s` and `s]`. This is action like any other so you can prefix it with number, etc. To display fix suggestions use `z=`. If you want certain word to be marked as correct use `zg` and to mark a word as wrong use `zw`.

## Letter case manipulation

```jsx
" swap case
g~
" UPPER case
gU
" lower case
gu
```

## Multiple files

TODO

## Recording

TODO

## Marks

TODO

## Sources

- [VIM Cheat Sheet](https://devhints.io/vim)
- [Why do Vim experts prefer buffers over tabs?](https://stackoverflow.com/questions/26708822/why-do-vim-experts-prefer-buffers-over-tabs)
- [Why I love Vim: It’s the lesser-known features that make it so amazing](https://www.freecodecamp.org/news/learn-linux-vim-basic-features-19134461ab85/)
- [Vim documentation: help](https://www.cs.auckland.ac.nz/references/gnu/vim/help.html)
