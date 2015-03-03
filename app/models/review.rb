class Review < ActiveRecord::Base
  belongs_to :user
  belongs_to :establishment


  def self.review_overall_rating(params)
    values = [
      params[:review][:power],
      params[:review][:wifi],
      params[:review][:coffee],
      params[:review][:food],
      params[:review][:service],
      params[:review][:noise_level]
    ]
    values.reject! {|value| value == ''}
    total = values.map {|value| value.to_i}.inject(:+).to_f
    average = (total/values.length).round(0)
  end

end
