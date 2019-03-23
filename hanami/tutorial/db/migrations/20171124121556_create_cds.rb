Hanami::Model.migration do
  change do
    create_table :cds do
      primary_key :id

      column :title,      String
      column :artist,     String

      column :created_at, DateTime, null: false
      column :updated_at, DateTime, null: false
    end
  end
end
