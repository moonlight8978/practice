FactoryBot.define do
  factory :medical do
    user

    blood_pressure { Faker::Number.decimal(l_digits: 3, r_digits: 2) }
    pulse_rate { Faker::Number.between(from: 50, to: 60) }
    hospitalization { [*Medical.hospitalization.values, nil].sample }
  end
end
