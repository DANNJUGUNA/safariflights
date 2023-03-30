class UsersController < ApplicationController
    # skip_before_action :authorize, only: [:create] 
#     def index
#         users = User.all
#         render json: users
#     end
#     def loggedin
#         user = User.find_by(id: session[:user_id])
#         if(user)
#             render json: {loggedin: true, user: user}
#          else
#             render json: {loggedin: false}
#          end 
#     end

#     def create
#         user = User.create(user_params)
#         if user.valid?
#             render json: { "success": "User saved successfully!"}
#         else
#             render json: user.errors.messages
#         end
#     end

#     # def update
#     #     user = find_user
#     #     user.update!(user_params)
#     #     render json: user
#     # end


  
        
#     private

#     def find_user
#         User.find(params[:id])
#     end

#     def user_params
#         params.permit(:username, :email, :password)
#     end


# def create
#     @user = User.create(user_params)

#     if @user.valid?
#         token = encode_token({ user_id: @user.id })
#         render json: { user: @user, token: token }, status: :ok
#     else
#         render json: { error: 'Invalid username or password' }, status: :unprocessable_entity
#     end
    
      
# end
def create
    
    @user = User.new(user_params)
  
    if @user.save
      token = encode_token({ user_id: @user.id })
      render json: { user: @user, token: token }, status: :ok
    else
      render json: { error: @user.errors.full_messages.join(', ') }, status: :unprocessable_entity
    end
  end
  
def login
    @user =  User.find_by(username: user_params[:username])

    if @user && @user.authenticate(user_params[:password])
        token = encode_token({ user_id: @user.id })
        render json: { user: @user, token: token }, status: :ok
    else
        render json: { error: 'Incorrect username or password' }, status: :unprocessable_entity
    end
end

private

def user_params

    params.require(:user).permit(:username, :email, :password)
      
      
end

  
end

