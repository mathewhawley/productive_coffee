class EstablishmentsController < ApplicationController

  def index
    @establishments = Establishment.all
  end

  def show
    @establishment = Establishment.find(params[:id])
    @overall_rating = @establishment.average_ratings(:overall_rating)
    @power_rating = @establishment.average_ratings(:power)
    @wifi_rating = @establishment.average_ratings(:wifi)
    @coffee_rating = @establishment.average_ratings(:coffee)
    @food_rating = @establishment.average_ratings(:food)
    @service_rating = @establishment.average_ratings(:service)
    @noise_level_rating = @establishment.average_ratings(:noise_level)
  end

  def create
    @establishment = Establishment.create params.require(:establishment).permit(:name, :address, :place_id, :lat, :long)
    # render json: @establishment, status: :created
    if @establishment.save
      redirect_to establishments_path
    else
      render 'index'
    end
  end

end