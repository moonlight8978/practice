require_relative '../utils/associations/belongs_to'

class Cd
  extend BelongsTo
  
  belongs_to :artist

  attr_accessor :title

  def initialize(title)
    @title = title
  end
end
