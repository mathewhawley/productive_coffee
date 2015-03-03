class Establishment < ActiveRecord::Base
  belongs_to :user
  has_many :reviews

  # def self.rating_overall(params)
  #   establishment = Establishment.find(params[:id])
  #   values = establishment.reviews.map { |value| value.overall_rating }.compact
  #   ((values.inject(:+).to_f)/values.length).round(0)
  # end

  def establishment_ratings(column)
    values = establishment.reviews.map { |value| value[column] }.compact
    ((values.inject(:+).to_f)/values.length).round(0)
  end

end
