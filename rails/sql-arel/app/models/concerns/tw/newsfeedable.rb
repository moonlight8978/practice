module Tw::Newsfeedable
  extend ActiveSupport::Concern

  included do
    has_one :activity, class_name: "Tw::Activity", as: :newsfeedable

    delegate :creator, to: :activity

    after_create :create_newsfeed_activity
    after_destroy :destroy_newsfeed_activity
  end

  def create_newsfeed_activity
    Tw::Activity.create!(**create_newsfeed_activity_attributes)
  end

  def build_newsfeed_activity
    Tw::Activity.new(**create_newsfeed_activity_attributes)
  end

  def destroy_newsfeed_activity
    activity.destroy
  end

  private

  def create_newsfeed_activity_attributes
    { creator: creator, created_at: created_at, updated_at: updated_at, newsfeedable: self }
  end
end
