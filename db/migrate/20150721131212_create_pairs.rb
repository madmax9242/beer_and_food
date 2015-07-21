class CreatePairs < ActiveRecord::Migration
  def change
    create_table :pairs do |t|
    	t.text :food
    	t.text :beer
    	t.text :beer_type
    end
    
  end
end
