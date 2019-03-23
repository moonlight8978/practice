require 'rspec'

require_relative '../entities/cd'
require_relative '../entities/artist'

RSpec.describe '' do
  let(:artist) { Artist.new('nao') }

  it 'will create a new cd' do
    cd = Cd.new('恋する少女と想いのキセキ Original Sound Track')
    cd.artist = artist
    artist.cds << cd

    expect(cd.title).to eq '恋する少女と想いのキセキ Original Sound Track'
    expect(cd.artist.name).to eq 'nao'

    expect(artist.cds.size).to be > 0
    expect(artist.cds.last.title).to eq '恋する少女と想いのキセキ Original Sound Track'
  end
end
