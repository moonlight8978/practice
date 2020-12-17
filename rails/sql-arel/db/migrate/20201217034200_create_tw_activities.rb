class CreateTwActivities < ActiveRecord::Migration[6.1]
  def change
    create_table :tw_activities do |t|
      t.belongs_to :newsfeedable, polymorphic: true
      t.belongs_to :creator

      t.timestamps
    end
  end
end
