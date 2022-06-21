#!/usr/bin/env bash

echo "Installing Volta"
curl https://get.volta.sh | bash
VOLTA_HOME="$HOME/.volta"
PATH="$VOLTA_HOME/bin:$PATH"
grep --silent "$VOLTA_HOME/bin" <<<$PATH || PATH="$VOLTA_HOME/bin:$PATH"

echo "Installing Latest Node.js"
volta install node@latest
volta install yarn

source ~/.bashrc ~/.zshrc
