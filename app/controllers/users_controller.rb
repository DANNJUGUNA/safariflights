class UsersController < ApplicationController
     skip_before_action :authorize,only:[:create]
    def index
        users = User.all
        render json:users
    end

    def loggedin
        user = User.find_by(id: session[:user_id])
        if(user)
            render json: {loggedin: true, user: user}
         else
            render json: {loggedin: false}
         end 
    end

    def create
        user = User.create(user_params)
        if user.valid?
            render json: { "success": "User saved successfully!"}
        else
            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end
        
   private
    def user_params
        params.permit(:username, :email, :password)
      end
end