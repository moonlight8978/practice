require 'rails_helper'

RSpec.feature "User create an artist", type: :feature do
  before do
    visit '/artists/new'
  end

  it "can fail" do
    within '#artist-form' do
      click_button 'Create'
    end

    expect(current_path).to eq '/artists'
  end

  it "can succeed" do
    within '#artist-form' do
      fill_in 'Name', with: 'nao'

      click_button 'Create'
    end

    expect(current_path).to match /artists\/\d+/
    expect(current_path).not_to eq 'artists/0'
    
    expect(page).to have_content 'nao' 
  end
end
