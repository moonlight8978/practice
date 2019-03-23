require_relative '../utils/associations/has_many'

class Artist
  extend HasMany

  has_many :cds
  
  attr_accessor :name

  def initialize(name)
    @name = name
  end
end
