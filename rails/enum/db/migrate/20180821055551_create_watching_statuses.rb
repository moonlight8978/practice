class CreateWatchingStatuses < ActiveRecord::Migration[5.2]
  def up
    execute <<-SQL
      CREATE TYPE watching_status AS ENUM ('plan_to_watch', 'watching', 'completed', 'on_hold', 'dropped');
    SQL

    create_table :watching_statuses do |t|
      t.belongs_to :movie
      t.belongs_to :user
      t.column :status, :watching_status

      t.timestamps
    end

    add_index :watching_statuses, [:movie_id, :user_id]
  end

  def down
    drop_table :watching_statuses

    execute <<-SQL
      DROP TYPE watching_status;
    SQL
  end
end
