Rails.application.routes.draw do
  resources :topics, shallow: true do
    resources :posts
  end
end
