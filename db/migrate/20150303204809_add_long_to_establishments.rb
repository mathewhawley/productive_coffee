class AddLongToEstablishments < ActiveRecord::Migration
  def change
    add_column :establishments, :long, :float
  end
end
