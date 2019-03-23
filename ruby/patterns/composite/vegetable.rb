require_relative 'ingredient'

class Vegetable < Ingredient
  def initialize(quantity)
    super(quantity)
    @cost = 100
  end
end
