class SearchController < ApplicationController
  before_action :authenticate_user!
  # load_and_authorize_resource
  
  def index
    if params[:q]
      @search = Establishment.search(name_cont: params[:q])
      @results = @search.result
    else
      redirect_to root_path
    end 
  end

end