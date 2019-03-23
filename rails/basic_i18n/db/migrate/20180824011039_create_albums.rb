class CreateAlbums < ActiveRecord::Migration[5.2]
  def change
    create_table :albums do |t|
      t.belongs_to :artist

      t.string :title
      t.string :genre
      t.string :code

      t.date :releases_on

      t.timestamps
    end
  end
end
