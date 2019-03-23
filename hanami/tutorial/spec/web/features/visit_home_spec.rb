require 'features_helper'

describe 'visit home', type: :feature do
  it 'is successful' do
    visit '/'

    # basic syntax expect + @smth + to/not_to + matcher + @smth_else
    expect(page).to have_content('nyoro3')
  end
end
