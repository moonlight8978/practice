class Forms::Virtus::UserForm
  attr_accessor(
    :username,
    :fullname,
    :password,
    :password_confirmation,
    :gender,
  )

  Schema = Dry::Validation.Schema do
    required(:username).filled
    required(:fullname).filled
    required(:password).filled(min_size?: 10, max_size?: 20).confirmation
    required(:password_confirmation).filled
    required(:gender).filled(included_in?: User.genders.keys)
  end

  def valid?(params)
    Schema.call(params)
  end
end