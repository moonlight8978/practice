require_relative 'edit_album'

class EditAlbumCollection < EditAlbum
  def valid?
    true
  end

  def create_album_new_latest_version
    puts "create album's new latest version without any album's info changes"
  end

  def recover_album_old_associations
    puts "recover album old associations"
  end

  def append_to_album_collection(data)
    puts "append item to collection"
  end
end
