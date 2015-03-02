class EstablishmentsController < ApplicationController

  def show
    @establishment = Establishment.find(params[:id])
    respond_to do |format|
      format.html
      format.json { render json: @establishment }
    end
  end

end