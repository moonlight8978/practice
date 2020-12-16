Rails.application.routes.draw do
  root to: 'companies#index'

  resources :companies, shallow: true do
    resources :users do
      resources :tasks
    end
  end
end
