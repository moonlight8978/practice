require 'rails_helper'

RSpec.describe HomeController, type: :controller do
  let(:params) { Hash[id: 2, name: 'abc', xyz: 'asd'] }

  describe 'GET #index' do
    it 'does not care about params' do
      # accept params, headers, env, xhr
      get :index, params: params

      # get instance varialbes inside controller
      expect(assigns[:title]).to eq 'Home'
      # response object (#body - ?, #status - int, #headers - hash)
      expect(response).to have_http_status(:ok)
    end

    it 'success' do
      get :index

      expect(response).to have_http_status(:ok)
    end
  end
end
