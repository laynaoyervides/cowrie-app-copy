class CreateArtworks < ActiveRecord::Migration[6.1]
  def change
    create_table :artworks do |t|
      t.string :title
      t.string :date_created
      t.string :description
      t.integer :list_price
      t.string :owner

      t.timestamps
    end
  end
end
