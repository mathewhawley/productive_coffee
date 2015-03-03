class ReviewsController < ApplicationController
  
  def new
    @establishment = Establishment.find(params[:establishment_id])
    @review = Review.new
  end

  def create
    @establishment = Establishment.find(params[:establishment_id])
    @review = Review.new
    @review.overall_rating = Review.review_overall_rating(review_params)
    @review.power = review_params[:power]
    @review.wifi = review_params[:wifi]
    @review.coffee = review_params[:coffee]
    @review.food = review_params[:food]
    @review.service = review_params[:service]
    @review.noise_level = review_params[:noise_level]
    @review.content = review_params[:content]
    @review.user_id = review_params[:user_id]
    @review.establishment_id = review_params[:establishment_id]

    
    # @review = Review.create(review_params)
    if @review.save
      redirect_to "/establishments/#{@establishment.id}"
    else
      render 'new'
    end
  end

private
  def review_params
    params.require(:review).permit(:power, :wifi, :coffee, :food, :service, :noise_level, :content, :user_id, :establishment_id)
  end

end