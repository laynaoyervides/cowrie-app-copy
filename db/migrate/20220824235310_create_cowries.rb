class CreateCowries < ActiveRecord::Migration[6.1]
  def change
    create_table :cowries do |t|
      t.integer :current_price
      t.integer :amount_left

      t.timestamps
    end
  end
end
