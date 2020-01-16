# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'override using skip_before_action', type: :request do
  context 'on actions does not affected by skip_before_action' do
    it 'run before_action normally' do
      get admins_path
      expect(response_body).to eq(%w[first second third])
    end
  end

  context 'on affected action' do
    it 'does not run the callback of course' do
      get admin_path(1)
      expect(response_body).to eq(%w[first third])
    end
  end
end
