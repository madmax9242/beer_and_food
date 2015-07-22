class CreatePairs < ActiveRecord::Migration
  def change
    create_table :pairs do |t|
      t.string :food
      t.string :beer
      t.string :beer_type

      t.timestamps null: false
    end
  end
end
