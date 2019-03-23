class CreateTopics < ActiveRecord::Migration[5.2]
  def change
    create_table :topics do |t|
      t.string :creator
      t.string :title
      t.text :content

      t.timestamps
    end
  end
end
