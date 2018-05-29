class ChangePriceToBeFloatInProducts < ActiveRecord::Migration[5.1]
  def change
  	change_column :products, :price, 'float USING CAST(price AS float)'
  end
end
