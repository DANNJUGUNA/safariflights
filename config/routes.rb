Rails.application.routes.draw do
  resources :users
  resources :reviews
  resources :bookings
  resources :flights
  # post '/users', to: 'users#create'
  # post '/users', to: 'users#create'
  # post '/users', to: 'users#create'
  # post '/users', to: 'users#create'
end
