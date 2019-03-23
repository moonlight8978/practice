class Song < ApplicationRecord
  belongs_to :album

  validates :title, presence: true
end
