class WatchingStatus < ApplicationRecord
  belongs_to :movie
  belongs_to :user

  enum status: {
    plan_to_watch:  'plan_to_watch',
    watching:       'watching',
    completed:      'completed',
    on_hold:        'on_hold',
    dropped:        'dropped'
  }, _prefix: true
end
