Rails.application.routes.draw do



  resources :flights, only: [:index,:create,:show,:update,:destroy]


  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  resources :users
  resources :reviews
  resources :bookings
 
  # post '/users', to: 'users#create'
  # post '/users', to: 'users#create'
  # post '/users', to: 'users#create'
  # post '/users', to: 'users#create'

end
