class CreateTutorials < ActiveRecord::Migration[6.1]
  def change
    create_table :tutorials do |t|
      t.string :title
      t.string :topic
      t.string :video_url
      t.string :description
      
      t.timestamps
    end
  end
end
