class Tw::Tweetable < ApplicationRecord
  include Tw::Newsfeedable

  belongs_to :creator, class_name: "User"
  belongs_to :subject, class_name: "Tw::Tweetable", optional: true

  has_many :reactions, foreign_key: :tweet_id, class_name: 'Tw::Reaction'
  has_many :replies, -> { replies }, foreign_key: :subject_id, class_name: 'Tw::Reply'
  has_many :retweets, -> { retweets }, foreign_key: :subject_id, class_name: 'Tw::Retweet'

  scope :retweets, -> { where(type: 'Tw::Retweet') }
  scope :replies, -> { where(type: 'Tw::Reply') }
  scope :tweets, -> { where(type: 'Tw::Tweet') }

  class << self
    def table_name
      'tw_tweets'
    end

    def polymorphic_name
      self.name
    end

    def sti_name
      self.name
    end
  end

  validates :content, presence: true

  def type
    self[:type] || self.class.name
  end

  def tweet?
    type == 'Tw::Tweet'
  end

  def reply?
    type =='Tw::Reply'
  end

  def retweet?
    type == 'Tw::Retweet'
  end
end
