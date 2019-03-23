RSpec.describe Web::Controllers::Cds::Create, type: :action do
  let(:action) { described_class.new }
  let(:params) { Hash[cd: { title: "And I'm home", artist: "madoka" }] }
  let(:repository) { CdRepository.new }

  # before (:each / :all) example do something, default is :each
  before do
    repository.clear
  end

  it 'creates a new cd' do
    action.call(params)
    # last (recently) created cd 
    cd = repository.last

    expect(cd.id).to_not eq nil
    expect(cd.title).to eq params.dig(:cd, :title)
  end

  it 'redirects to the cds list' do
    response = action.call(params)

    expect(response[0]).to eq 302
    # response[1] is header hash
    expect(response[1]['Location']).to eq '/cds'
  end

  describe 'with invalid params' do
    let(:params) { Hash[cd: {}] }

    it 'returns HTTP client error' do
      response = action.call(params)

      expect(response[0]).to eq 422
    end

    it 'dumps errors in params' do
      action.call(params)
      errors = action.params.errors

      # field error messages is an array
      expect(errors.dig(:cd, :title)).to eq ['is missing']
      expect(errors.dig(:cd, :artist)).to eq ['is missing']
    end
  end
end
