require 'rails_helper'

RSpec.describe "artists/new.html.slim", type: :view do
  let(:artist) { Artist.new }

  describe "when form is untouched" do
    before do
      assign(:artist, artist)
    end
    
    it "doesn't expose errors" do
      render

      expect(rendered).not_to have_content "can't be blank"
    end
  end

  describe "when form is invalid" do
    before do
      allow(artist).to receive_message_chain(:errors, messages: Hash[name: ["can't be blank"]])
      assign(:artist, artist)
    end

    it "expose errors" do
      render

      expect(rendered).to have_content "can't be blank"
    end
  end
end
