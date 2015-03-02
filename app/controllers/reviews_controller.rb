class ReviewsController < ApplicationController
  
  def new
    @establishment = Establishment.find(params[:establishment_id])
    @review = Review.new
  end

  def create
  end

end