class SearchController < ApplicationController
  # before_action :authenticate_user!

  
  def index
    if params[:q]
      @search = Establishment.search(name_cont: params[:q])
      @results = @search.result
    else
      redirect_to root_path
    end 
  end

end