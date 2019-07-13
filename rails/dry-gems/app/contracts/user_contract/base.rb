UserContract::Base = Dry::Schema.Params do
  required(:name).filled(:string)
  required(:name_kana).filled(:string)

  required(:phone_type).maybe(:integer)
  required(:phone_number).maybe(:string)

  required(:address_postal_code).filled(:string)
  required(:address_city).filled(:string)
  required(:address_street).filled(:string)

  required(:birthday).maybe(:date)
  required(:gender).filled(:integer)

  required(:role).maybe(:integer)
end
