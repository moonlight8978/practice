class MyError < StandardError
  attr_reader :custom

  def initialize(msg = "Default message", custom = { x: 2 })
    @custom = custom

    super(msg)
  end
end

begin
  raise MyError, 'New message'
rescue MyError => e
  p e.custom
end

begin
  raise MyError.new('New message', { x: 3 })
rescue MyError => e
  p e.custom
end
