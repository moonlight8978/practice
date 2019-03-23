require 'rails_helper'

RSpec.describe User, type: :model do
  let!(:user) do
    User.create!(
      username: 'username',
      fullname: 'fullname',
      password: '123456'
    )
  end

  it do
    form = Forms::ActiveModel::UserForm.new(
      id: user.id,
      gender: '0',
    ) 
    result = form.valid?
    expect(form.errors).to have_key(:gender)
  end
end
