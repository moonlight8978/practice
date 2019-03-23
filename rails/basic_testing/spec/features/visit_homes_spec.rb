require 'rails_helper'

# use rails g rspec:feature feature
# list of generators: https://relishapp.com/rspec/rspec-rails/docs/generators
# feature / scenario (Capybara) ~ describe / it (RSpec)
RSpec.describe "Visit home", type: :feature do
  it 'User visits home' do
    visit '/'

    expect(page).to have_content "Welcome"
  end
end
