class Ingredient
  def initialize(quantity)
    @quantity = quantity
  end

  def cost
    bonus = 1_000
    @cost * @quantity + bonus
  end
end
