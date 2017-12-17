require_relative 'album'
require_relative 'log_service'

TITLE = "TRIBAL LINK - L"

album = Album.new(TITLE.downcase)
album.add_observer(LogService.new)
album.update(title: TITLE.upcase)
