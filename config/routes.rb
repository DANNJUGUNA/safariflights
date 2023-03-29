Rails.application.routes.draw do



  resources :flights, only: [:index,:create,:show,:update,:destroy]


  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
 
  resources :reviews
  resources :bookings


  get '/users',to: 'users#index'
  get '/loggedin',to: 'users#loggedin'
  post '/users',to:'users#create'

  
  post'/login', to: "session#login"
  delete '/logout', to: "session#logout"
  # post '/users', to: 'users#create'
  # post '/users', to: 'users#create'
  # post '/users', to: 'users#create'
  # post '/users', to: 'users#create'

end
