# Rails meets I18N

#### Setup

* `Gemfile`

```ruby
gem 'i18n'
gem 'rails-i18n'
gem 'i18n-tasks'
```

* `$ bundle`

* `$ rm -r config/locales`

* `$ cp $(i18n-tasks gem-path)/templates/config/i18n-tasks.yml config/`

* `$ cp $(bundle exec i18n-tasks gem-path)/templates/rspec/i18n_spec.rb spec/`

* `config/initializers/locale.rb`

```ruby
I18n.load_path += Dir[Rails.root.join('lib', 'locales', '**', '*.{rb,yml}')]
I18n.available_locales = [:en, :ja]
I18n.default_locale = :en
```

* `app/controllers/application_controller.rb`

```ruby
class ApplicationController < ActionController::Base
  # codes
  before_action :set_locale

protected

  def set_locale
    I18n.locale = params[:locale] || I18n.default_locale
  end

  def default_url_options
    { locale: I18n.locale }
  end
end
```

#### Usage

* Put all translations in `lib/locales`

* i18n-tasks commands: [here](https://github.com/glebm/i18n-tasks)
