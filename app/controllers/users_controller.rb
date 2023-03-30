class UsersController < ApplicationController
   
skip_before_action :authorized, only: [:create, :login]

  def create
    @user = User.new(user_params)
    if @user.save
      token = encode_token({ user_id: @user.id })
      render json: { user: @user.as_json(except: [:created_at, :updated_at]), token: token }
    else
      render json: { error: @user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def login
    @user = User.find_by(username: params[:username])
    if @user && @user.authenticate(params[:password])
      token = encode_token({ user_id: @user.id })
      render json: { user: @user.as_json(except: [:created_at, :updated_at]), token: token, authorized: true  }
    else
      render json: { error: 'Invalid username or password' }, status: :unauthorized
    end
  end

  private

  def user_params
    params.permit(:username, :password, :email)
  end
  def authorized
    render json: { message: 'Please log in' }, status: :unauthorized unless logged_in?
  end
end

