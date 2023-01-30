#
# ~/.bashrc
#

# If not running interactively, don't do anything
[[ $- != *i* ]] && return

alias ls='ls --color=auto'
PS1='[\u@\h \W]\$ '
. "$HOME/.cargo/env"

export PATH="$HOME/.local/bin/":$PATH
# alias i3sg='$HOME/.My_scripts/i3sg.sh'
alias i3sg='~/.My_scripts/i3sg.sh'
