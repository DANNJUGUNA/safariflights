Rails.application.routes.draw do



  resources :flights, only: [:index,:create,:show,:update,:destroy]


  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
 
  resources :reviews
  resources :bookings


  namespace :api do
    namespace :v1 do
      resources :users, only: [:create]
      post '/users',to:'users#create'
      post'/login', to: "session#login"
      get '/loggedin',to: 'users#loggedin'
      get '/users',to: 'users#index'
    end
  end

  # get '/users',to: 'users#index'
  # get '/loggedin',to: 'users#loggedin'
  

  
  
  delete '/logout', to: "session#logout"
  # post '/users', to: 'users#create'
  # post '/users', to: 'users#create'
  # post '/users', to: 'users#create'
  # post '/users', to: 'users#create'

end
