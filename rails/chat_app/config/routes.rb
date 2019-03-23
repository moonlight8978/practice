Rails.application.routes.draw do
  root to: 'home#index'
  get 'welcome', to: 'home#welcome'
  
  resource :session, only: [:create, :destroy]
  resource :user, only: [:create]

  resources :rooms do
    resources :messages, only: :create
  end
end
