class ReviewsController < ApplicationController
  def new
    @establishments = Establishment.all
    @review = Review.new
  end

end