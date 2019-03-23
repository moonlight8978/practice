class X
  attr_accessor :name

  def initialize(name)
    @name = name
  end

  def index(&block)
    if block_given?
      p 'block'
      yield self
    else
      'no block'
    end
  end
end

x = X.new("Bach")
p x.index(&:name)
p x.index { |object| object.name }
p x.index