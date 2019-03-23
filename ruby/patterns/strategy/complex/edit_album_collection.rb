class EditAlbumCollection
  def perform(album, data = {})
    start

    return false unless valid?(album)
    create_album_new_latest_version(album)
    recover_album_old_associations(album)
    append_to_album_collection(album, data)
  end

private

  def start
    puts "start to create album version"
  end

  def valid?(album)
    true
  end

  def create_album_new_latest_version(album)
    puts "create album's new latest version without any album's info changes"
  end

  def recover_album_old_associations(album)
    puts "recover album old associations"
  end

  def append_to_album_collection(album, data)
    puts "append item to collection"
  end
end
