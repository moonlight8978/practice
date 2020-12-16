class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.belongs_to :company

      t.string :name
      t.string :gender

      t.integer :medicals_count

      t.timestamps
    end
  end
end
