class WelcomeController < ApplicationController
  before_action :authenticate_user!, only: [:new, :create, :edit, :update]

  def index
    @establishments = Establishment.all
    respond_to do |format|
      format.html
      format.json { render json: @establishments }
    end
  end
  
end