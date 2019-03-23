require_relative 'user_decorator'

class User
  attr_reader :first_name, :last_name, :gender

  def initialize(**args)
    @first_name = args[:first_name]
    @last_name = args[:last_name]
    @gender = args[:gender]
  end

  def decorate
    @_decorator ||= UserDecorator.new(self)
  end
end
