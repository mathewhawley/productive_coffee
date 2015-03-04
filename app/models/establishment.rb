class Establishment < ActiveRecord::Base
  belongs_to :user
  has_many :reviews

  def average_ratings(column)
    values = reviews.map { |value| value[column] }.compact
    ((values.inject(:+).to_f)/values.length).round(0)
  end

end