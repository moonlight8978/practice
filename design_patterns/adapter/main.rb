require_relative 'album'
require_relative 'album_last_fm'
require_relative 'album_last_fm_adapter'

# Basically, we want AlbumLastFm acts like Album in our application, but their
#   interfaces doesn't match. Adapter helps us to solve this kind of situation.
#
a1 = Album.new("AAA", "aaa")
a_fm = AlbumLastFm.new({ ja: "びびび", en: "BBB" }, { name: "bbb" })
a2 = AlbumLastFmAdapter.new(a_fm)

[a1, a2].each { |album| puts album.title }
