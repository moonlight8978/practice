require_relative 'edit_album'

class EditAlbumInfo < EditAlbum
  def valid?
    @album.valid?
  end

  def create_album_new_latest_version
    puts "create album's new latest version with new album's info"
  end

  def recover_album_old_associations
    puts "recover album old associations"
  end

  def append_to_album_collection(data)

  end
end
