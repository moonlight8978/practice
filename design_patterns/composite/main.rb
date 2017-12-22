require_relative 'snack'
require_relative 'oil'
require_relative 'vegetable'
require_relative 'vegetable_oil'

# Secret:
#   100g snack = 100g vegetable oil (LOL)
#   100g vegetable_oil = 50g oil + 50g vegetable

snack = Snack.new(100)
vegetable_oil = VegetableOil.new(100)
snack << vegetable_oil

vegetable_oil << Vegetable.new(50)
vegetable_oil << Oil.new(50)

puts snack.cost
