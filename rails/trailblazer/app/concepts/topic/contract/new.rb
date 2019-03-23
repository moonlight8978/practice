class Topic::Contract::New < Reform::Form
  property :creator
  property :title
  property :content

  validates :creator, presence: true
  validates :title, presence: true
  validates :content, presence: true
end
