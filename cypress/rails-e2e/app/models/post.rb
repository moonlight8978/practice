class Post < ApplicationRecord
  validates :creator, presence: { message: 'is required' }
  validates :content, presence: { message: 'is required' }
end
