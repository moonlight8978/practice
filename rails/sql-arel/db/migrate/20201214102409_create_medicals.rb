class CreateMedicals < ActiveRecord::Migration[6.1]
  def change
    create_table :medicals do |t|
      t.belongs_to :user

      t.decimal :blood_pressure
      t.integer :pulse_rate

      t.string :hospitalization

      t.timestamps
    end
  end
end
