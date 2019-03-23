require_relative 'ingredient'

class Oil < Ingredient
  def initialize(quantity)
    super(quantity)
    @cost = 200
  end
end
