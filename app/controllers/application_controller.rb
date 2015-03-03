class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def search_establishments
    @search = Establishment.search(name_cont: params[:q])
    @results = @search.result
  end
end
