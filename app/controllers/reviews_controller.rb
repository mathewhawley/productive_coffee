class ReviewsContorller < ApplicationController
  def new
    @review = Review.new
  end

end