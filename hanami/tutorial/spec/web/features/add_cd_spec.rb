describe 'Add a cd' do
  it 'display errors when params contains errors' do
    visit '/cds/new'

    within '#cd-form' do
      # Try to create a cd without filling the form
      # Create = value, location can be value, id, name
      click_button 'Create'
    end

    expect(current_path).to eq '/cds'

    # Should display the errors
    expect(page).to have_content 'There was a problem with your submission'
    expect(page).to have_content 'Title must be filled'
    expect(page).to have_content 'Artist must be filled'
  end

  it 'can create a new cd' do
    visit '/cds/new'

    # capybara methods
    within '#cd-form' do
      fill_in 'Title', with: "And I'm home"
      fill_in 'Artist', with: "madoka"

      click_button 'Create'
    end

    expect(current_path).to eq '/cds'
    # now current_path is cds list, so it should have recently created cd
    expect(page).to have_content "And I'm home"
  end
end
