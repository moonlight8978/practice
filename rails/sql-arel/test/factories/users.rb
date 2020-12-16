FactoryBot.define do
  factory :user do
    company

    name { Faker::Name.name }
    gender { User.gender.values.sample }
  end
end
