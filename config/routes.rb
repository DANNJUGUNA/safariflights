Rails.application.routes.draw do



  resources :flights, only: [:index,:create,:show,:update,:destroy]


  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
 
  resources :reviews, only: [:index, :show, :create, :update]
  resources :bookings, only: [:index, :show, :create, :destroy]
  resources :users, only: [:create]
  post "/login", to: "users#login"
  delete "/logout", to: "users#logout"
  delete '/bookings', to: 'bookings#destroy'

  #
  

  
   
      

  
  
  

end
