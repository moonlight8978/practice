class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.belongs_to :referrer

      t.string :name
      t.string :name_kana

      t.string :phone_number, limit: 20
      t.integer :phone_type, limit: 2

      t.string :address_postal_code, limit: 10
      t.string :address_city
      t.string :address_street

      t.integer :gender, limit: 1
      t.date :birthday

      t.integer :role, limit: 2

      t.timestamps

      t.index :role
      t.index :name
      t.index :name_kana
    end
  end
end
