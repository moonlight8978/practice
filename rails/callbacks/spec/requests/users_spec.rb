# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'defines 2 before action', type: :request do
  it 'will run sequently' do
    get users_path
    expect(response_body).to eq(%w[first second third])
  end
end
