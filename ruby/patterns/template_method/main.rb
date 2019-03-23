# Domain model
require_relative 'album'
require_relative 'disc'

# Services
require_relative 'edit_album_info'
require_relative 'edit_album_collection'

# Main process
disc = Disc.new("Disc")
album = Album.new("Album")

EditAlbumInfo.new(album).perform
puts "\n"
EditAlbumCollection.new(album).perform({ disc: disc })
