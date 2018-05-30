class AddDueDateToCategories < ActiveRecord::Migration[5.1]
  def change
    add_column :categories, :due_date, :date
  end
end
