FactoryBot.define do
  factory :task do
    association :assignee, factory: :user
    creator { assignee }

    status { Task.status.values.sample }
    name { Faker::Name.name }

    started_at { Faker::Number.between(from: 50, to: 200).days.ago }
    finished_at { started_at + Faker::Number.between(from: 1, to: 20).days }

    created_at { started_at - Faker::Number.between(from: 1, to: 20).days }
  end
end
