class UsersController < ApplicationController
    # skip_before_action :authorize, only: [:create, :index, :show. :destroy, :uodate]

    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    
    def index
        users = User.all
        render json: users
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
        render json: { "Success": "User saved successfully!"}, status: :created
    end

    def update
        user = find_user
        user.update!(user_params)
        render json: user
    end

    def show
        user = find_user
        render json: user
    end

    # def destroy
    #     user = find_user
    #     user.destroy
    # end
        
    private
    def find_user
        User.find(params[:id])
    end
    def user_params
        params.permit(:username, :email, :password_digest)
    end

    def render_not_found_response
        render json: { error: "User not found" }, status: :not_found
    end

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors }, status: :unprocessable_entity
    end
end