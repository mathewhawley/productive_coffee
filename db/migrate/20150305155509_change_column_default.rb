class ChangeColumnDefault < ActiveRecord::Migration
  def change
    change_column_default :establishments, :image, 'https://s3-eu-west-1.amazonaws.com/productive-coffee/uploads/cafe/bag-and-hands.jpg'
  end
end
