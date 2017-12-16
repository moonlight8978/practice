# describe - group, it - element
RSpec.describe Web::Controllers::Cds::Index, type: :action do
  # described_class is Web::Controllers::Cds::Index
  let(:action) { described_class.new }
  let(:params) { Hash[] }
  let(:repository) { CdRepository.new }

  before do
    repository.clear

    @cd = repository.create(title: '茜色の奇跡', author: 'miru')
  end

  it 'is successful' do
    response = action.call(params)
    # response[0] is response http code
    expect(response[0]).to eq 200
  end

  it 'exposes all cds' do
    action.call(params)
    # action.exposures is Controller's class level variable
    # which use expose macro
    expect(action.exposures[:cds]).to eq [@cd]
  end
end
