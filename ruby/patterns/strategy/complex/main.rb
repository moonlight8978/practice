# Domain model
require_relative 'album'
require_relative 'disc'

# Services
require_relative 'create_album_version'
require_relative 'edit_album_collection'

# Main process
disc = Disc.new("Disc")
album = Album.new("Album")

service = CreateAlbumVersion.new(album)
service.perform(params: { name: 'New name' })
puts "\n"
service.service = EditAlbumCollection.new
service.perform(disc: disc)
