require_relative 'album'
require_relative 'log_service'

TITLE = "TRIBAL LINK - L"
# Better to use singleton ?
logger = LogService.new

album = Album.new(TITLE.downcase)
album.add_observer do |new_datas, old_datas|
  logger.update(new_datas, old_datas)
end
album.update(title: TITLE.upcase)
