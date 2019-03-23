class Album < ApplicationRecord
  validates :title, presence: true
  has_many :songs
  accepts_nested_attributes_for :songs,
    allow_destroy: true,
    reject_if: proc { |attributes| attributes[:title].blank? }
end
