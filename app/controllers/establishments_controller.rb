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
    @overall_rating = Establishment.rating_overall(params)
    binding.pry
    nil
  end
end