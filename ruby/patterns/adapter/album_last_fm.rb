# Data fetched from last.fm
#
class AlbumLastFm
  attr_reader :title, :artist

  # @param title [Hash] title of album, has `:en`, `:ja` title
  # @param artist [Hash] artist of album, has `:name`, ...
  # @return [AlbumLastFm] create new album info (from last.fm) object
  # @note It may look like the same as Album, but it doesn't
  def initialize(title, artist)
    @title = title
    @artist = artist
  end
end
