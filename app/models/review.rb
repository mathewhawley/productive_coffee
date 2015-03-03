class Review < ActiveRecord::Base
  belongs_to :user
  belongs_to :establishment


  def self.review_overall_rating(review_params)
    values = review_params.values[0..5].reject {|x| x == ''}
    total = values.map {|value| value.to_i}.inject(:+).to_f
    average = (total/values.length).round(0)
  end

end
