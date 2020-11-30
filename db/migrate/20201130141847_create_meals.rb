class CreateMeals < ActiveRecord::Migration[6.0]
  def change
    create_table :meals do |t|
      t.string :name
      t.string :image
      t.string :description
      t.integer :price

      t.timestamps
    end
  end
end
