class Forms::Reform::UserForm < Reform::Form
  property :username
  property :fullname
  property :password
  property :password_confirmation
  property :gender

  validation :default do
    required(:username).filled
    required(:fullname).filled
    required(:password).filled
    required(:password_confirmation).filled
    required(:gender).filled
  end
end