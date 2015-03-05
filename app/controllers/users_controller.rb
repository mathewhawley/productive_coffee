class UsersController < ApplicationController
  before_action :authenticate_user!, only: [:new, :create, :edit, :update]
  authorize_resource
  
  def show
    @user = User.find(params[:id])
  end
end