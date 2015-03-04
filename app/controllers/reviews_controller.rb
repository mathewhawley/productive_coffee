class ReviewsController < ApplicationController
  before_action :authenticate_user!, only: [:new, :create, :edit, :update]
  
  def new
    @establishment = Establishment.find(params[:establishment_id])
    @review = Review.new
  end

  def create
    @establishment = Establishment.find(params[:establishment_id])
    @review = Review.create(review_params)
    overall_rating = Review.review_overall_rating(params)
    @review.update_attributes(overall_rating: overall_rating)
    if @review.save
      redirect_to @establishment
    else
      render 'new'
    end
  end

private
  def review_params
    params.require(:review).permit(:power, :wifi, :coffee, :food, :service, :noise_level, :content, :user_id, :establishment_id)
  end

end