Rails.application.routes.draw do
  root to: 'home#index'
  
  resources :artists do
    resources :albums
  end
end
