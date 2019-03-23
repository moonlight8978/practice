class EditAlbumInfo
  def perform(album, data = {})
    start

    return false unless valid?(album)
    create_album_new_latest_version(album)
    recover_album_old_associations(album)
  end

private

  def start
    puts "start to create album version"
  end

  def valid?(album)
    album.valid?
  end

  def create_album_new_latest_version(album)
    puts "create album's new latest version with new album's info"
  end

  def recover_album_old_associations(album)
    puts "recover album old associations"
  end
end
