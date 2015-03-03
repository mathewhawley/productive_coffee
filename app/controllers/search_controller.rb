class SearchController < ApplicationController
  def index
    if params[:q]
      @search = Establishment.search(name_cont: params[:q])
      @results = @search.result
    end
  end
end