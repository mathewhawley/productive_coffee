class EstablishmentsController < ApplicationController

  def index
    @establishments = Establishment.all
    respond_to do |format|
      format.html
      format.json { render json: @establishments }
    end
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
end