class Movie < ApplicationRecord
  has_many :watching_statuses
  has_many :users, through: :watching_statuses
end
