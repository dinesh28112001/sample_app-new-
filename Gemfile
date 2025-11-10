source "https://rubygems.org"

ruby "3.4.4"

gem "rails", "~> 7.1.5.2"
gem "fiddle"

# Asset pipeline and styling
gem "sprockets-rails"
gem "bootstrap", "~> 5.3.3"
gem "sassc-rails", ">= 2.1.2"

# Database and authentication
gem "sqlite3", "~> 1.4"
gem "bcrypt", "~> 3.1.7"

# Utilities
gem "faker", "~> 3.2"
gem 'will_paginate', '3.1.8'
gem 'bootstrap-will_paginate', '1.0.0'
gem "puma", ">= 5.0"


# Rails 7 front-end defaults
gem "importmap-rails"
gem "turbo-rails"
gem "stimulus-rails"

# JSON support
gem "jbuilder"

# Windows compatibility
gem "tzinfo-data", platforms: %i[windows jruby]

# Performance
gem "bootsnap", require: false

group :development, :test do
  gem "debug", platforms: %i[mri windows]
end

group :development do
  gem "web-console"
  gem "rails-controller-testing"
end

group :test do
  gem "capybara"
  gem "selenium-webdriver"
  gem "minitest", "~> 5.22"
  gem "minitest-reporters", "1.3.8"
  gem "guard", "2.15.0"
  gem "guard-minitest", "2.4.6"
end
