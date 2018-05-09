* `$ rails new app_name -B -T --skip-turbolinks -d postgresql`

* Copy all folder's contents except README.md to project folder

* Add database's username, password, host, and port to `config/database.yml`

* `$ bundle`

* `$ rails g rspec:install`

* Add to `spec/rails_helper.rb`

```ruby
require 'capybara/rspec'
require 'support/factory_bot'
require 'support/database_cleaner'
```

* i18n

 * `$ rm -r config/locales`

 * `$ cp $(i18n-tasks gem-path)/templates/config/i18n-tasks.yml config/`

 * `$ cp $(bundle exec i18n-tasks gem-path)/templates/rspec/i18n_spec.rb spec/`

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

* Devise

 * `$ rails g devise:install`

 * `$ config/environments/development.rb`

```ruby
# Devise settings
config.action_mailer.default_url_options = { host: 'localhost', port: 3000 }

# Mailer
ActionMailer::Base.smtp_settings = {
  :address        => 'smtp.gmail.com',
  :domain         => 'mail.google.com',
  :port           => 587,
  :user_name      => ENV['GMAIL_ACCOUNT'],
  :password       => ENV['GMAIL_PASSWORD'],
  :authentication => :plain
  # :enable_starttls_auto => true
}
```

 * `$ rails generate devise user`

 * `$ rake db:migrate`

 * `$ rails generate devise:controllers users`

 * `$ rails generate devise:views users`

 * Add to `config/routes.rb`

```ruby
devise_for :users
```

* `config/application.rb`

```ruby
# Autoload paths
config.autoload_paths << Rails.root.join('lib')
config.assets.paths << Rails.root.join('node_modules')

# Errors
ActionView::Base.field_error_proc = Proc.new do |html_tag, instance|
  html_tag.html_safe
end
```

* Search engine

 * `$ sudo apt-get install elasticsearch`

* Decorator

 * `$ rails generate draper:install`

* FriendlyID

 * `$ rails generate friendly_id`

* Carrierwave (image uploader)


* Bullet (N+1 queries killer)
 * Add to `config/environments/development.rb`

```ruby
# Bullet gem (N+1 query)
config.after_initialize do
  Bullet.enable = true
  Bullet.sentry = true
  Bullet.alert = true
  Bullet.bullet_logger = true
  Bullet.console = true
  Bullet.growl = true
  # Bullet.xmpp = { :account  => 'bullets_account@jabber.org',
  #                 :password => 'bullets_password_for_jabber',
  #                 :receiver => 'your_account@jabber.org',
  #                 :show_online_status => true }
  Bullet.rails_logger = true
  # Bullet.honeybadger = true
  # Bullet.bugsnag = true
  # Bullet.airbrake = true
  Bullet.rollbar = true
  Bullet.add_footer = true
  # Bullet.stacktrace_includes = [ 'your_gem', 'your_middleware' ]
  # Bullet.stacktrace_excludes = [ 'their_gem', 'their_middleware' ]
  # Bullet.slack = { webhook_url: 'http://some.slack.url', channel: '#default', username: 'notifier' }
end
```
