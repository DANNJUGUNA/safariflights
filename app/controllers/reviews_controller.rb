class ReviewsController < ApplicationController

  def index 
      review=Review.all
      render json: review
  end

  def show
      review= find_review
      render json:review
  end
  
  def create
      render json: Review.create!(review_params)
    end

    def update
      review = find_review
      review.update!(review_params)
    end 


  private
  
  def find_review
      Review.find( params[:id])
   end

   def review_params
    params.permit( :rating)
  end


end

