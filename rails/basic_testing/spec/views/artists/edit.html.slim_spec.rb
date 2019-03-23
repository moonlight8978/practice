require 'rails_helper'

RSpec.describe "artists/edit", type: :view do
  let(:artist) { create(:artist_nao) }

  describe "represent a form to edit existing artist" do
    it "doesn't expose errors at the beginning" do
      artist.valid?
      assign(:artist, artist)
      render

      expect(rendered).not_to have_content "can't be blank"
    end
  end

  describe "when invalid" do
    it "expose errors" do
      artist.name = nil
      artist.valid?
      assign(:artist, artist)
      render

      expect(rendered).to have_content "can't be blank"
    end
  end
end
