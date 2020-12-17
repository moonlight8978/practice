class CreateTwTweets < ActiveRecord::Migration[6.1]
  def change
    create_table :tw_tweets do |t|
      t.belongs_to :creator
      t.belongs_to :subject

      # STI
      t.string :type

      t.string :content

      t.timestamps
    end
  end
end
