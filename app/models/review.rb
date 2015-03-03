class Review < ActiveRecord::Base
  belongs_to :user
  belongs_to :establishment

  def self.review_overall_rating(review_params)
    values = review_params[:review].values[2..-2].compact
    total = values.map {|value| value.to_i}.inject(:+).to_f
    average = total/values.length
    
  end
end
