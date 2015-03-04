class EstablishmentsController < ApplicationController
  before_action :authenticate_user!

  def index
    @establishments = Establishment.all
    respond_to do |format|
      format.html
      format.json { render json: @establishments }
    end
  end

  def show
    @establishment = Establishment.find(params[:id])

    unless @establishment.reviews.none?
      @overall_rating = @establishment.average_ratings(:overall_rating)
      @power_rating = @establishment.average_ratings(:power)
      @wifi_rating = @establishment.average_ratings(:wifi)
      @coffee_rating = @establishment.average_ratings(:coffee)
      @food_rating = @establishment.average_ratings(:food)
      @service_rating = @establishment.average_ratings(:service)
      @noise_level_rating = @establishment.average_ratings(:noise_level)
    end
  end

  def create
    @establishment = Establishment.create params.require(:establishment).permit(:name, :address, :place_id, :lat, :long)
    if @establishment.save
      respond_to do |format|
        format.html { redirect_to @establishment}
        format.json { render json: "#{establishment_path(@establishment)}", status: :created }
      end
    else
      render 'index'
    end
  end

end