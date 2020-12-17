class User < ApplicationRecord
  extend Enumerize

  belongs_to :company

  has_many :medicals
  has_many :tasks, foreign_key: :assignee_id
  has_many :tweets, class_name: 'Tw::Tweet', foreign_key: :creator_id
  has_many :replies, class_name: 'Tw::Reply', foreign_key: :creator_id
  has_many :retweets, class_name: 'Tw::Retweet', foreign_key: :creator_id
  has_many :reactions, class_name: 'Tw::Reaction', foreign_key: :responder_id

  has_many :newsfeeds, -> { newsfeeds }, class_name: 'Tw::Activity', foreign_key: :creator_id

  enumerize :gender, in: [:male, :female]
  enumerize :role, in: [:employee, :leader, :manager, :admin], default: :employee

  scope :sort_view, -> do
    user_roles = UserRole.instance.arel_table
    users = arel_table

    join_user_roles = users.join(user_roles).on(users[:role].eq(user_roles[:role]))
    self
      .joins(join_user_roles.join_sources)
      .order(user_roles[:role_int].asc)
  end
end
