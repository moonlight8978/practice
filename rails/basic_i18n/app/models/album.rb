class Album < ApplicationRecord
  belongs_to :artist

  validates :title, presence: true
  validates :genre, presence: true
  validates :code, presence: true

  validate :code_must_start_with_specific_characters

private

  def code_must_start_with_specific_characters
    unless code && code.match?(/^AL\d+/)
      errors.add(:code, :must_start_with_specific_characters)
    end
  end
end
