class Album
  attr_reader :title, :artist

  def initialize(title, artist)
    @title, @artist = title, artist
  end
end
