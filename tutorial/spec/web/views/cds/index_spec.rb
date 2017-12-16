RSpec.describe Web::Views::Cds::Index, type: :view do
  # use let to define memoized helper method, it is not cached across examples
  let(:exposures) { Hash[cds: []] }
  let(:template)  { Hanami::View::Template.new('apps/web/templates/cds/index.html.slim') }
  let(:view)      { described_class.new(template, exposures) }
  let(:rendered)  { view.render }

  it 'exposes cds' do
    expect(view.cds).to eq exposures.fetch(:cds)
  end

  # now there are no cds in exposures[:cds]
  describe 'when there are no cds' do
    it 'show a placeholder message' do
      # will run rendered method first time
      expect(rendered).to have_content 'There are no cds'
    end
  end

  # now there still are no cds in exposures[:cds]
  describe "when there are cds" do
    let(:cd1) do
      Cd.new(title: '恋する少女と想いのキセキ Original Sound Track', artist: 'nao')
    end
    let(:cd2) do
      Cd.new(title: '僕と恋するポンコツアクマ。 MAXI SINGLE', artist: 'AiRI')
    end

    let(:exposures) { Hash[cds: [cd1, cd2]] }

    it 'list all of them' do
      # will run rendered method second time
      # so rendered will be updated with new exposures[:cds]
      expect(rendered.scan(/class="cd"/).size).to eq 2
      expect(rendered).to have_content "恋する少女と想いのキセキ Original Sound Track"
      expect(rendered).to have_content "僕と恋するポンコツアクマ。 MAXI SINGLE"
    end

    it 'does not show placeholder message' do
      # will run rendered method third time
      expect(rendered).not_to have_content 'There are no cds'
    end
  end
end
