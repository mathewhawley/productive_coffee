class SearchController < ApplicationController
  def index
    @search = Establishment.search(name_cont: params[:q])
    @results = @search.result
  end
end