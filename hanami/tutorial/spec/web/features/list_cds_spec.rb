require 'features_helper'

describe 'visit cds list', type: :feature do
  let(:repository) { CdRepository.new }

  before do
    repository.clear

    repository.create(
      title: '恋する少女と想いのキセキ Original Sound Track',
      artist: 'nao'
    )
    repository.create(
      title: '僕と恋するポンコツアクマ。 MAXI SINGLE',
      artist: 'AiRI'
    )
    # clear repository and create 2 cds, so our database now has 2 cds,
    # expect cds list page will has 2 cds
  end

  it 'displays each CD on the page, max is 20' do
    visit '/cds'

    within '#cds' do
      expect(page.all(:css, "div.cd").count).to eq(2), 'Expected to find 2 cds'
    end
  end
end
