class AddAddressAndPhoneNumberAndEmailAndUrlAndDescriptionAndImageToEstablishments < ActiveRecord::Migration
  def change
    add_column :establishments, :address, :text
    add_column :establishments, :phone_number, :string
    add_column :establishments, :email, :string
    add_column :establishments, :url, :text
    add_column :establishments, :description, :text
    add_column :establishments, :image, :text
  end
end
