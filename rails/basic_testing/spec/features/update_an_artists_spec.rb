require 'rails_helper'

RSpec.feature "Update an artist", type: :feature do
  let(:artist) { create(:artist_nao) }

  before do
    visit edit_artist_path(id: artist.id)
  end

  it "show the errors when fail" do
    within '#artist-form' do
      fill_in 'Name', with: ''
    end

    click_button 'Update'

    expect(current_path).to match /^\/artists\/[1-9]\d*/
    expect(page).to have_content "can't be blank"
  end

  it "redirect to albums list when success" do
    within '#artist-form' do
      fill_in 'Name', with: 'miru'
    end

    click_button 'Update'

    expect(current_path).to eq '/artists'
    expect(page).to have_content "miru"
  end
end
