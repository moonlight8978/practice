class User < ApplicationRecord
  has_secure_password

  has_many :messages
  belongs_to :room, optional: true
end
