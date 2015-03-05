class EstablishmentsController < ApplicationController
  before_action :authenticate_user!, only: [:new, :create, :edit, :update]
  authorize_resource only: [:create]

  def index
    @establishments = Establishment.all.order('created_at DESC')
    respond_to do |format|
      format.html
      format.json { render json: @establishments}
    end
  end

  def show
    @establishment = Establishment.find(params[:id])
    Review.review_attributes.each { |attr| instance_variable_set("@#{attr}_rating", @establishment.average_ratings(attr)) }
  end

  def create
    @establishment = Establishment.create params.require(:establishment).permit(:name, :address, :place_id, :lat, :long, :user_id)
    @establishment.update_attributes(user_id: current_user.id)
    if @establishment.save
      respond_to do |format|
        format.html { redirect_to @establishment}
        format.json { render json: "#{establishment_path(@establishment)}", status: :created }
      end
    else
      render 'index'
    end
  end

  def edit
    @establishment = Establishment.find(params[:id]) 
  end

  def update
    @establishment = Establishment.find(params[:id])
    if @establishment.save
      redirect_to @establishment
    else
      render 'update'
    end
  end

  private
  def establishment_params
    params.require(:establishment).permit(:name, :address, :place_id, :lat, :long, :user_id, :description, :image, :url, :email, :phone_number)
  end

end