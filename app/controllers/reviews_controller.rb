class ReviewsController < ApplicationController
  
  def new
    @establishment = Establishment.find(params[:establishment_id])
    @review = Review.new
  end

  def create
    @establishment = Establishment.find(params[:establishment_id])
    @review = Review.create(review_params)
    # test = Review.review_overall_rating(review_params)
    binding.pry
    nil
    if @review.save

      redirect_to "/establishments/#{@establishment.id}"
    else
      render 'new'
    end
  end

private
  def review_params
    params.require(:review).permit(:power, :wifi, :coffee, :food, :service, :noise_level, :overall_rating, :user_id, :establishment_id)
  end

end