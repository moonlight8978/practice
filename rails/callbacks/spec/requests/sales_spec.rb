# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'override before_action using only/except', type: :request do
  context 'on overrided action' do
    it 'will run all non-overrided ones first, then run the overrided one' do
      get sales_path
      expect(response_body).to eq(%w[second third first])
    end
  end

  context 'on other actions' do
    it 'does not run, of course' do
      get sale_path(1)
      expect(response_body).to eq(%w[second third])
    end
  end
end
