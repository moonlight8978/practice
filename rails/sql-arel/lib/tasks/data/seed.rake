namespace :data do
  namespace :seed do
    task company: :environment do
      ActiveRecord::Base.transaction do
        companies = FactoryBot.build_list(:company, 40)
        Company.import! companies
      end
    end

    task user: :environment do
      ActiveRecord::Base.transaction do
        users = []
        Company.all.each.with_index do |company, index|
          next if index > 30

          users.concat FactoryBot.build_list(:user, Faker::Number.between(from: 10, to: 20), company: company)
        end
        User.import! users
      end
    end

    task medical: :environment do
      ActiveRecord::Base.transaction do
        medicals = []
        User.all.each do |user|
          Faker::Number.between(from: 20, to: 40).times do |i|
            medicals << FactoryBot.build(:medical, created_at: i.hours.ago, user: user)
          end
        end

        Medical.import! medicals
      end
    end

    task task: :environment do
      ActiveRecord::Base.transaction do
        tasks = []
        User.all.each do |user|
          tasks.concat FactoryBot.build_list(:task, Faker::Number.between(from: 20, to: 40), assignee: user)
        end

        Task.import! tasks
      end
    end

    task tweet: :environment do
      ActiveRecord::Base.transaction do
        tweets = []
        User.all.each do |user|
          if rand(0..1) == 1
            Faker::Number.between(from: 20, to: 40).times do |i|
              tweets << FactoryBot.build(:tw_tweet, created_at: i.hours.ago, creator: user)
            end
          end
        end
        Tw::Tweet.import! tweets
      end
    end

    def pick_random(arr, count)
      result = []

      while (result.length < count)
        item = arr.sample
        result << item unless result.include?(item)
      end

      result
    end

    task retweet: :environment do
      user_ids = User.pluck(:id)

      ActiveRecord::Base.transaction do
        retweets = []

        Tw::Tweet.tweets.each do |tweet|
          pick_random(user_ids, Faker::Number.between(from: 0, to: 20)).each.with_index do |user_id, i|
            if rand(0..1) == 1
              retweets << FactoryBot.build(:tw_retweet, created_at: i.hours.ago, creator_id: user_id, subject: tweet)
            end
          end
        end

        Tw::Retweet.import! retweets
      end
    end

    task reply: :environment do
      user_ids = User.pluck(:id)

      ActiveRecord::Base.transaction do
        replies = []

        Tw::Tweet.tweets.each do |tweet|
          pick_random(user_ids, Faker::Number.between(from: 0, to: 20)).each.with_index do |user_id, i|
            if rand(0..1) == 1
              replies << FactoryBot.build(:tw_reply, created_at: i.hours.ago, creator_id: user_id, subject: tweet)
            end
          end
        end

        Tw::Reply.import! replies
      end
    end

    task reaction: :environment do
      user_ids = User.pluck(:id)

      ActiveRecord::Base.transaction do
        reactions = []

        Tw::Tweet.tweets.each do |tweet|
          pick_random(user_ids, Faker::Number.between(from: 0, to: 20)).each.with_index do |user_id, i|
            if rand(0..1) == 1
              reactions << FactoryBot.build(:tw_reaction, created_at: i.hours.ago, responder_id: user_id, tweet: tweet)
            end
          end
        end

        Tw::Reaction.import! reactions
      end
    end

    task activity: :environment do
      ActiveRecord::Base.transaction do
        create_activities = proc do |newsfeedables|
          activities = []

          newsfeedables.each do |newsfeedable|
            next if newsfeedable.activity.present?

            activities << newsfeedable.build_newsfeed_activity
          end

          Tw::Activity.import! activities
        end

        Tw::Tweetable.includes(:creator, :activity).all.find_in_batches(batch_size: 10000, &create_activities)
        Tw::Reaction.includes(:responder, :activity).all.find_in_batches(batch_size: 10000, &create_activities)
      end
    end

    task reply_interaction: :environment do
      user_ids = User.pluck(:id)

      ActiveRecord::Base.transaction do
        replies = []

        Tw::Reply.all.each do |tweet|
          pick_random(user_ids, Faker::Number.between(from: 0, to: 20)).each.with_index do |user_id, i|
            if rand(0..1) == 1
              replies << FactoryBot.build(:tw_reply, created_at: i.hours.ago, creator_id: user_id, subject: tweet)
            end
          end
        end

        Tw::Reply.import! replies
      end
    end

    task all: [:environment, :company, :user, :medical, :task, :tweet, :reply, :retweet, :reaction, :activity] do; end
  end
end
