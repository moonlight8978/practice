Rails.application.routes.draw do
  get 'about/index'

  get 'home/index'

  # Use this because root_path will not automatically match /:locale
  # The regex is used to make sure /artists will not match root_path
  get '/:locale', locale: /en|ja/, to: 'home#index'
  root to: 'home#index'

  # Use optional path scope to avoid Routing Error when access without locale
  # /en/artists, /artists, /ja/artists will both work
  scope '(:locale)', locale: /en|ja/ do
  end
end
