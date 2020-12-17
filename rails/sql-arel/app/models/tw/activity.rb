class Tw::Activity < ApplicationRecord
  delegated_type :newsfeedable, types: %w[Tw::Tweet Tw::Reaction Tw::Retweet Tw::Reply]

  belongs_to :creator, class_name: "User"

  scope :newsfeeds, -> do
    self
      .where(newsfeedable_type: ['Tw::Tweet', 'Tw::Retweet', 'Tw::Reaction'])
      .order(created_at: :desc, id: :desc)
  end

  scope :preload_newsfeeds, -> do
    self.preload(:newsfeedable, :creator).tap do |activities|
      preloader = ActiveRecord::Associations::Preloader.new
      preloader.preload(activities.select(&:tweet?), [:newsfeedable])
      preloader.preload(activities.select(&:retweet?), { newsfeedable: [subject: :creator] })
      preloader.preload(activities.select(&:reaction?), { newsfeedable: [tweet: :creator] })
    end
  end

  def retweet?
    newsfeedable_type == 'Tw::Retweet'
  end

  def tweet?
    newsfeedable_type == 'Tw::Tweet'
  end

  def reaction?
    newsfeedable_type == 'Tw::Reaction'
  end
end
