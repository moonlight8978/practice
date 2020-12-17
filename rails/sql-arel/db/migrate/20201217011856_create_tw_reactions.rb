class CreateTwReactions < ActiveRecord::Migration[6.1]
  def change
    create_table :tw_reactions do |t|
      t.belongs_to :tweet
      t.belongs_to :responder

      t.string :emoticon

      t.timestamps
    end
  end
end
