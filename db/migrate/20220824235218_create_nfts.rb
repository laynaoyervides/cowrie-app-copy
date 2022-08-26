class CreateNfts < ActiveRecord::Migration[6.1]
  def change
    create_table :nfts do |t|
      t.string :contract_date
      t.string :contents
      
      t.timestamps
    end
  end
end
