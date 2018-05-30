class ChangeColumnName < ActiveRecord::Migration[5.1]
  def change
  	rename_column :categories, :due_date, :category_create_date
  end
end
