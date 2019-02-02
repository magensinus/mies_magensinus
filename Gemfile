# frozen_string_literal: true

# Rubygems
source "https://rubygems.org"

# Github
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

# Declare your gem's dependencies in mies.gemspec.
# Bundler will treat runtime dependencies like base dependencies, and
# development dependencies will be added by default to the :development group.
gemspec

# Ruby version
ruby "2.5.3"

# Declare any dependencies that are still in development here instead of in
# your gemspec. These might include edge Rails or gems from your path or
# Git. Remember to move these dependencies to your gemspec before releasing
# your gem to rubygems.org.

# Rack-based asset packaging system.
gem "sprockets", "~> 4.0.0.beta8"

# Linters
gem "coffeelint", require: false
gem "haml_lint", require: false
gem "reek", require: false
gem "rubocop", require: false
gem "scss_lint", require: false
