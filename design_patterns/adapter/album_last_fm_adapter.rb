require_relative 'album'

class AlbumLastFmAdapter < Album
  def initialize(album_last_fm)
    @album_last_fm = album_last_fm
  end

  def title
    @album_last_fm.title[:ja]
  end

  def artist
    @album_last_fm.artist[:name]
  end
end
