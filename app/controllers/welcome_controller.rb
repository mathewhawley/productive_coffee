class WelcomeController < ApplicationController
 def index
  @establishments = Establishment.all
  respond_to do |format|
    format.html
    format.json { render json: @establishments }
  end
 end
end