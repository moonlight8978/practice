require_relative 'moon/calculator'
require_relative 'moon/speaker'

class Moon
  def self.add(num1, num2)
    Moon::Calculator.new.add(num1.to_i, num2.to_i)
  end

  def self.speak
    Moon::Speaker.new.perform
  end
end
