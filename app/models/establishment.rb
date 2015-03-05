class Establishment < ActiveRecord::Base
  belongs_to :user
  has_many :reviews

  mount_uploader :image, ImageUploader

  def average_ratings(column)
    values = reviews.map { |value| value[column] }.compact
    return 'no rating' if values.empty?
    ((values.inject(:+).to_f)/values.length).round(0)
  end

  def self.most_popular(establishments)
    hash = Hash[establishments.map {|establishment| [establishment.id, establishment.average_ratings(:overall)]}]
    hash.delete_if {|key, value| value == 'no rating'}
    hash.sort_by {|key, value| value}.reverse
  end
end
