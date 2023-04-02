class ReviewsController < ApplicationController
  before_action :authorized

  def index 
    
      reviews = Review.all
      average_rating = reviews.average(:rating)
      average_rating = average_rating ? average_rating.round : nil 
      render json: { reviews: reviews, average_rating: average_rating }
  end
  def show
    review = current_user.review
    if review.present?
      render json: review, status: :ok
    else
      render json: { error: "Review not found" }, status: :not_found
    end
    
  end
  
  def create
    review = Review.new(rating: params[:rating], user: current_user)
    if review.save
      render json: review, status: :created
    else
      render json: { errors: review.errors.full_messages }, status: :unprocessable_entity
    end
  end
  
  

  def update
    review = current_user.reviews.find_by(id: params[:id])
    if review
      if review.update(review_params)
        render json: review
      else
        render json: { errors: review.errors.full_messages }, status: :unprocessable_entity
      end
    else
      render json: { error: "Review not found" }, status: :not_found
    end
  end

  def destroy
    review = find_review
    if current_user == review.user
      review.destroy
      head :no_content
    else
      render json: { error: "Unauthorized" }, status: :unauthorized
    end
  end

  private
  
  def find_review
    Review.find(params[:id])
  end

  def review_params
    params.permit(:rating)
  end
  
  def authorized
    render json: { message: 'Please log in' }, status: :unauthorized unless logged_in?
  end

  def logged_in?
    !!current_user
  end
end


