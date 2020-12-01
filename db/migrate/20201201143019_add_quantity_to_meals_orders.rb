class AddQuantityToMealsOrders < ActiveRecord::Migration[6.0]
  def change
    add_column :meals_orders, :quantity, :integer
  end
end
