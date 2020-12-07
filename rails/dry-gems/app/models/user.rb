class User < ApplicationRecord
  extend Enumerize

  enumerize :phone_type, in: { home: 1, mobile: 2, other: 9 }
  enumerize :gender, in: { male: 1, female: 2 }

  enum role: { user: 1, admin: 99 }
end
