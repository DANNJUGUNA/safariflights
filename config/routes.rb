Rails.application.routes.draw do



  resources :flights, only: [:index,:create,:show,:update,:destroy]


  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
 
  resources :reviews
  resources :bookings, only: [:index, :show]
  resources :users, only: [:create]
  post "/login", to: "users#login"
  delete "/logout", to: "users#logout"
  # get '/bookings', to: 'users#bookings'
  

  
   
      

  
  
  

end
