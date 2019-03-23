class EditAlbum
  def initialize(album)
    @album = album
  end

  def perform(data = {})
    start

    return unless valid?
    create_album_new_latest_version
    recover_album_old_associations
    append_to_album_collection(data)
  end

protected

  def start
    puts "start to create album version"
  end

  def check_valid
    raise NoMethodError, "called abstract method #check_valid"
  end

  def create_album_new_latest_version
    raise NoMethodError, "called abstract method #create_album_new_latest_version"
  end

  def recover_album_old_associations
    raise NoMethodError, "called abstract method #recover_album_old_associations"
  end

  def append_to_album_collection(data)
    raise NoMethodError, "called abstract method #append_to_album_collection"
  end
end
