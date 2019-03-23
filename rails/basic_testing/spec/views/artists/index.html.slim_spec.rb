require 'rails_helper'

# view: test ?
RSpec.describe "artists/index.html.slim", type: :view do
  before do
    Artist.delete_all
    assign(:artists, [
      create(:artist_nao),
      create(:artist_airi)
    ])
  end

  it 'displays both artist' do
    render

    expect(rendered).to match /nao/
    expect(rendered).to match /AiRI/

    expect(rendered.scan(/class="artist"/).size).to eq 2
    expect(rendered.scan(/class="nos-of-albums"/).size).to eq 2
  end
end
