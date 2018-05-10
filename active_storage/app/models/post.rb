class Post < ApplicationRecord
  has_one_attached :cover
  has_many_attached :images

  validate :validate_cover, if: ->(post) { post.cover.attached? }

  def validate_cover
    unless cover.blob.content_type.start_with?('image')
      errors.add(:cover, :invalid_type, message: 'Invalid cover')
    end

    unless cover.blob.byte_size > 10
      errors.add(:cover, :too_small, message: 'Too small')
    end
  end
end
