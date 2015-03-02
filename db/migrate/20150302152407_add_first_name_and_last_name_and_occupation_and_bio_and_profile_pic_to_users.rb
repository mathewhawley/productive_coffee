class AddFirstNameAndLastNameAndOccupationAndBioAndProfilePicToUsers < ActiveRecord::Migration
  def change
    add_column :users, :first_name, :string
    add_column :users, :last_name, :string
    add_column :users, :occupation, :string
    add_column :users, :bio, :text
    add_column :users, :profile_pic, :text
  end
end
