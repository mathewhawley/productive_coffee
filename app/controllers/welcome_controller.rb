class WelcomeController < ApplicationController
  before_action :authenticate_user!, only: [:new, :create, :edit, :update]
  
  def index
    @establishments = Establishment.all
    establishments = Establishment.most_popular(@establishments)
    establishment_one = Establishment.find(establishments[0][0])
    establishment_two = Establishment.find(establishments[1][0])
    establishment_three = Establishment.find(establishments[2][0])
    @top_three = [establishment_one, establishment_two, establishment_three]
    respond_to do |format|
      format.html
      format.json { render json: @establishments }
    end
  end
  
end