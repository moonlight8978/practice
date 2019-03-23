class User < ApplicationRecord
  has_secure_password

  enum gender: {
    male: 0,
    female: 1
  }, _prefix: true
end
