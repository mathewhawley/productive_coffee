class AddLatToEstablishments < ActiveRecord::Migration
  def change
    add_column :establishments, :lat, :float
  end
end
