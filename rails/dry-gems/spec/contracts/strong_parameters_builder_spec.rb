require 'rails_helper'

describe StrongParametersBuilder do
  it 'permit params' do
    builder = described_class.new(ActionController::Parameters.new(user: {
      name: '鈴木ひろし',
      name_kana: 'スズキヒロシ',
      phone_type: '1',
      phone_number: '',
      address_postal_code: '100000',
      address_city: 'Hanoi',
      address_street: 'Cau Giay',
      birthday: 'abc',
      gender: '      ',
      role: '1',
      codes: ['123', '456']
    })[:user], [
      :name,
      :name_kana,
      :address_postal_code,
      :address_city,
      :address_street,
      :gender,
      :role,
      [:birthday, ->(params) { params[:gender] == '1' }],
      [:phone_type, ->(params) { params[:role] == '1' }],
      [:phone_number, ->(params) { params[:role] == '1' }],
      codes: [] # or [{ codes: [] }, proc { true }]
    ])

    expect(builder.perform.to_h.symbolize_keys).to eq({
      name: '鈴木ひろし',
      name_kana: 'スズキヒロシ',
      phone_type: '1',
      phone_number: '',
      address_postal_code: '100000',
      address_city: 'Hanoi',
      address_street: 'Cau Giay',
      gender: '      ',
      role: '1',
      codes: ['123', '456']
    })
  end

  it 'permit params with modified values' do
    input = ActionController::Parameters.new(user: {
      name: '鈴木ひろし',
      name_kana: 'スズキヒロシ',
      phone_type: '1',
      phone_number: '',
      address_postal_code: '',
      address_city: 'Hanoi',
      address_street: 'Cau Giay',
      birthday: 'abc',
      gender: '      ',
      role: '1',
      codes: ['123', '456']
    })[:user]
    builder = described_class.new(input, [
      :name,
      :name_kana,
      :address_postal_code,
      :address_city,
      :address_street,
      :gender,
      :role,
      [:birthday, ->(params) { params[:gender] == '1' }],
      [:phone_type, ->(params) { params[:role] == '1' }],
      [:phone_number, ->(params) { params[:role] == '1' }],
      codes: [] # or [{ codes: [] }, proc { true }]
    ]) do |params|
      params.merge!(address_street: nil, address_city: nil) if params[:address_postal_code].blank?
    end

    expect(builder.perform.to_h.symbolize_keys).to eq({
      name: '鈴木ひろし',
      name_kana: 'スズキヒロシ',
      phone_type: '1',
      phone_number: '',
      address_postal_code: '',
      address_city: nil,
      address_street: nil,
      gender: '      ',
      role: '1',
      codes: ['123', '456']
    })
    expect(input[:address_city]).to eq('Hanoi')
    expect(input[:address_street]).to eq('Cau Giay')
  end
end
