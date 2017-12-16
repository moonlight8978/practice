require 'rails_helper'

# controller: test response's status
RSpec.describe ArtistsController, type: :controller do
  # #index: test instance variables
  describe "GET #index" do
    let(:artist) { create(:artist_nao) }

    it "returns http success" do
      get :index

      expect(assigns[:artists]).to eq [artist]
      expect(response).to have_http_status(:success)
    end
  end

  # #create: test post params, instance variables
  describe "POST #create" do
    describe "with invalid params" do
      let(:params) { Hash[artist: { name: nil }] }

      it "return with errors" do
        post :create, params: params
        artist = assigns[:artist]

        expect(artist).to be_invalid
        expect(artist.errors.messages[:name]).to be_present

        expect(response).to render_template(:new)
        expect(response).to have_http_status(:bad_request)
      end
    end

    describe "with valid params" do
      let(:params) { Hash[artist: { name: 'nao' }] }

      it 'succeed to create a new artist' do
        post :create, params: params
        artist = assigns[:artist]

        expect(artist).to be_valid
        expect(response).to redirect_to(artist_path(artist))
      end
    end
  end

  # #show: test with params[:id]
  describe "GET #show" do
    let(:artist) { create(:artist_nao) }

    it "can return with 404 not found" do
      get :show, params: { id: 10 }

      expect(response).to have_http_status(:bad_request)
    end

    it "returns http success" do
      get :show, params: { id: artist.id }

      expect(assigns(:artist)).to eq artist
      expect(response).to have_http_status(:success)
    end
  end

  # #new: test ?
  describe "GET #new" do
    it "display a form to create new artist" do
      get :new
      expect(response).to have_http_status(:success)
    end
  end
end
