class Tw::Reaction < ApplicationRecord
  include Tw::Newsfeedable

  extend Enumerize

  belongs_to :responder, class_name: 'User'
  belongs_to :tweet, class_name: 'Tw::Tweetable'

  enumerize :emoticon, in: [:love, :care, :like, :haha, :wow, :sad, :angry], default: :like

  alias_attribute :creator, :responder
end
