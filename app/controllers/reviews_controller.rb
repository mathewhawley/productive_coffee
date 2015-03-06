class ReviewsController < ApplicationController
  before_action :authenticate_user!, only: [:new, :create, :edit, :update, :destroy]
  authorize_resource :through => :establishment, only: [:create, :destroy]
  
  
  # , param_method: :review_params
  
  def new
    @establishment = Establishment.find(params[:establishment_id])
    @review = Review.new
  end

  def create
    @establishment = Establishment.find(params[:establishment_id])
    @review = Review.create(review_params)
    overall_rating = Review.review_overall_rating(params)
    @review.update_attributes(overall: overall_rating)
    if @review.save
      redirect_to @establishment
    else
      render 'new'
      flash[:notice] = "Please provide content for your review."
    end
  end

  def destroy
    @establishment = Establishment.find(params[:establishment_id])
    @review = Review.find(params[:id])
    # respond_to do |format|
    #   format.html { redirect_to establishments_path }
    #   format.json { render json: @review }
    # end
    
    @review.destroy
    # head :no_content, status: :ok
    redirect_to @establishment
  end 

private
  def review_params
    params.require(:review).permit(:power, :wifi, :coffee, :food, :service, :noise_level, :content, :user_id, :establishment_id)
  end

end