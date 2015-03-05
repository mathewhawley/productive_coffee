class CreateReviews < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
      t.integer :power
      t.integer :wifi
      t.integer :coffee
      t.integer :food
      t.integer :service
      t.integer :noise_level
      t.text :content
      t.integer :overall
      t.integer :user_id
      t.integer :establishment_id

      t.timestamps null: false
    end
  end
end
