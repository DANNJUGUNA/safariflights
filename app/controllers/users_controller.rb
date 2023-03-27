class UsersController < ApplicationController
    def index
        @users = User.all
        render json: @users, only: [:username, :email, :password_digest]
    end

    def show
        @user = User.find_by(id: params[:id])
        if @user
            render json: @user.as_json(include: { bookings: { only: [:flight_id, :user_id] }})
        else
            render json: { error: "User Not found" }, status: :not_found
        end
    end

    def create
        user = User.new(user_params)
        if user.save
            render json: user.bookings, status: :created
        else
            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end
        

    def user_params
        params.require(:user).permit(:username, :email, :password_digest)
      end
end
