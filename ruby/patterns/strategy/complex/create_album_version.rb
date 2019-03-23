require_relative 'edit_album_info'

class CreateAlbumVersion
  attr_accessor :service

  def initialize(album, service = EditAlbumInfo.new)
    @album = album
    @service = service
  end

  def perform(**data)
    @service.perform(@album, data)
  end
end
