require 'rails_helper'

RSpec.describe Album, type: :model do
  let(:album) { build(:album_koidoll) }

  it "can't be created without artist" do
    album.artist = nil
    album.save

    expect(album).to be_invalid
    expect(album.errors[:artist]).to be_present
    expect(album.id).to eq nil
  end
end
