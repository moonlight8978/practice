class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.belongs_to :room
      
      t.string :username
      t.string :password_digest
      t.string :display_name

      t.timestamps
    end
  end
end
