FactoryBot.define do
  factory :tw_tweet, class: 'Tw::Tweet' do
    association :creator, factory: :user

    type { "Tw::Tweet" }
    content { Faker::Lorem.paragraph(sentence_count: 2) }
  end

  factory :tw_reply, class: 'Tw::Reply' do
    association :creator, factory: :user
    association :subject, factory: :tw_tweet

    type { "Tw::Reply" }
    content { Faker::Lorem.paragraph(sentence_count: 2) }
  end

  factory :tw_retweet, class: 'Tw::Retweet' do
    association :creator, factory: :user
    association :subject, factory: :tw_tweet

    type { "Tw::Retweet" }
    content { Faker::Lorem.paragraph(sentence_count: 2) }
  end
end
