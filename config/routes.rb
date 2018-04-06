Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'
  root 'dashboard/index', controller: 'dashboard', action: 'index'

  namespace :api, defaults: { format: :json } do
    resources :tours, only: %i[index create update]
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
