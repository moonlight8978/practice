# Rails meets RSpec

#### Setup

* `$ rails new app -d postgresql -B -T`

* Add to `Gemfile`:

```ruby
group :development, :test do
  gem 'rspec'
  gem 'rspec-rails'
  gem 'rails-controller-testing'
end
```

* `$ bundle`

* `$ rails g rspec:install`

* Add to `spec/rails_helper.rb`

```ruby
require 'capybara/rspec'
```

* [List of generators](https://relishapp.com/rspec/rspec-rails/docs/generators)

#### FactoryBot

* Add to `Gemfile`

```ruby
group :development, :test do
  gem 'factory_bot_rails'
end
```

* `$ bundle`

* Add to `spec/support/factory_bot.rb`

```ruby
RSpec.configure do |config|
  config.include FactoryBot::Syntax::Methods
end
```

* Add to `spec/rails_helper.rb`

```ruby
require 'support/factory_bot'
```


#### DatabaseCleaner

* Add to `Gemfile`

```ruby
group :development, :test do
  gem 'database_cleaner'
end
```

* `$ bundle`

* Add to `spec/support/database_cleaner.rb` [by following](https://github.com/eliotsykes/rspec-rails-examples/blob/master/spec/support/database_cleaner.rb)

* Add to `spec/rails_helper.rb`

```ruby
require 'support/database_cleaner'
```
