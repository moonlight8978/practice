require 'rails_helper'

RSpec.describe "artists/show.html.slim", type: :view do
  let(:artist) { create(:artist_nao) }

  before do
    assign(:artist, artist)  
  end

  it 'show the artist profile' do
    render

    expect(rendered).to match /nao/
  end
end
