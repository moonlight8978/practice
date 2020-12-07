require 'rails_helper'

describe ImportUsersService::Csv::UserContract do
  let(:input) do
    {
      name: '鈴木ひろし',
      name_kana: 'スズキヒロシ',
      phone_type: '',
      phone_number: '',
      address_postal_code: '100000',
      address_city: 'Hanoi',
      address_street: 'Cau Giay',
      birthday: 'abc',
      gender: '      ',
      role: '1',
    }
  end

  it do
    binding.pry
  end
end
