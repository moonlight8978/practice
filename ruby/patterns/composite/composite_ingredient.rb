require_relative 'ingredient'

class CompositeIngredient < Ingredient
  def initialize(quantity)
    super(quantity)
    @sub_ingredients = []
  end

  def <<(ingredient)
    @sub_ingredients << ingredient
  end

  def [](index)
    @sub_ingredients[index]
  end

  def []=(index, new_ingredient)
    @sub_ingredients[index] = new_ingredient
  end

  def cost
    bonus = 2_000
    @sub_ingredients.reduce(bonus) { |memo, ingredient| memo + ingredient.cost }
  end
end
