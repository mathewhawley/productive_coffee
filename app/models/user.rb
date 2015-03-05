class User < ActiveRecord::Base
  has_many :establishments
  has_many :reviews
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  mount_uploader :profile_pic, ProfilePicUploader

  def role?(role_to_compare)
    self.role.to_s == role_to_compare.to_s
  end
end
