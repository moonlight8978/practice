require 'rails_helper'

# model: test associations ?, validate, custom methods
RSpec.describe Artist, type: :model do
  let(:artist) { build(:artist_nao) }

  it 'is invalid without name' do
    artist.name = nil
    artist.save

    expect(artist).to be_invalid
    expect(artist.errors[:name]).to be_present
  end

  it 'is valid' do
    artist.save

    expect(Artist.all.last).to eq artist
  end
end
