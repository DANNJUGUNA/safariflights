class UsersController < ApplicationController
    def index
        users = Users.all
        render json: @users
    end

    def show
        user = User.find_by(id: params[:id])
        if user
            render json: user.as_json
        else
            render json: { error: "User Not found" }, status: :not_found
        end
    end
end
