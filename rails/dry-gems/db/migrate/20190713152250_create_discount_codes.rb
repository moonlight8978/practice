class CreateDiscountCodes < ActiveRecord::Migration[6.0]
  def change
    create_table :discount_codes do |t|
      t.string :code, limit: 20
      t.date :available_from
      t.date :available_to

      t.timestamps
    end
  end
end
