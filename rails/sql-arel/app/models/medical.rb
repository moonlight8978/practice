class Medical < ApplicationRecord
  extend Enumerize

  belongs_to :user

  enumerize :hospitalization, in: [:hospitalized, :treating_at_home]
end
