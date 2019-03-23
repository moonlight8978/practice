RSpec.describe Web::Views::Cds::New, type: :view do
  # define variables, each `it` block will excute the proc once if be called,
  #   can not be cached
  let(:params) { OpenStruct.new(valid?: false, error_messages: ['Title must be filled', 'Artist must be filled']) }
  let(:exposures) { Hash[params: params] }
  let(:template)  { Hanami::View::Template.new('apps/web/templates/cds/new.html.slim') }
  let(:view)      { described_class.new(template, exposures) }
  # ViewClass.new(template, exposures).render
  let(:rendered)  { view.render }

  it 'displays list of errors when params contains errors' do
    expect(rendered).to have_content 'There was a problem with your submission'
    expect(rendered).to have_content 'Title must be filled'
    expect(rendered).to have_content 'Artist must be filled'
  end
end
