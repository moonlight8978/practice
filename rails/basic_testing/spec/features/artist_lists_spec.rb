require 'rails_helper'

RSpec.describe "Guest visits artists list", type: :feature do
  let(:album1) { create(:album_koidoll) }
  let(:album2) { create(:album_akuma) }
  let(:els) { page.all(:css, '.artist') }

  before do
    @albums = [album1, album2]
    @artists = [album1.artist, album2.artist]
    
    visit artists_path
  end

  describe 'displays artists list' do
    it 'has title' do
      expect(page).to have_content 'Artists list'
    end

    it 'is max at 20 artists' do
      expect(els.count).to be <= 20
      expect(els.count).to eq 2
    end

    describe 'each artist' do
      it 'has name' do
        expect(els[0]).to have_content 'なお'
        expect(els[1]).to have_content 'AiRI'
      end

      it 'and number of albums' do
        els.each_with_index do |el, i|
          expect(el.find('.nos-of-albums').text.to_i).to eq 1
        end
      end
    end
  end
end
