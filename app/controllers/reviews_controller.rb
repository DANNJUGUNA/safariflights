class ReviewsController < ApplicationController
    def index
        @reviews = Review.all
        render json: @reviews, only: [:rating, :user_id]
    end

    def show
        @review = Review.find_by(id: params[:id])
        if @review
            render json: @review.as_json
        else
            render json: { error: "Review Not found" }, status: :not_found
        end
    end

end

