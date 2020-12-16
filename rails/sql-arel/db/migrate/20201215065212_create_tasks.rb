class CreateTasks < ActiveRecord::Migration[6.1]
  def change
    create_table :tasks do |t|
      t.belongs_to :creator
      t.belongs_to :assignee

      t.string :name
      t.string :status

      t.datetime :started_at
      t.datetime :finished_at

      t.timestamps
    end
  end
end
