# Use factory for reuseable datas
FactoryBot.define do
  factory :album_koidoll, class: Album do
    title '恋する少女と想いのキセキ Original Sound Track'
    # Use association name if it is the same as the factory name
    # artist
    # Can override attributes
    association :artist, factory: :artist_nao, name: 'なお'
  end

  factory :album_akuma, class: Album do
    title '僕と恋するポンコツアクマ。 MAXI SINGLE'
    association :artist, factory: :artist_airi
  end
end
