FactoryBot.define do
  factory :tw_reaction, class: 'Tw::Reaction' do
    association :tweet, factory: :tw_tweet
    association :responder, factory: :user

    emoticon { Tw::Reaction.emoticon.values.sample }
  end
end
