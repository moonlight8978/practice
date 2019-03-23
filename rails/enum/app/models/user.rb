class User < ApplicationRecord
  has_many :watching_statuses
  has_many :movies, through: :watching_statuses
end
