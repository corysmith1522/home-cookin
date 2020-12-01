Rails.application.routes.draw do
  resources :meals, only: :index
  resources :orders
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  resources :users, only: :create
  post '/meals/:meal_id/orders/:id', to: 'orders#add_meal'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
