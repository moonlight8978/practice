require 'forwardable'

class UserDecorator
  extend Forwardable

  def_delegators :user, :first_name, :last_name, :gender

  def initialize(user)
    @user = user
  end

  def full_name
    "#{last_name} #{first_name}"
  end

  def name_with_honorific
    "#{honorific} #{last_name}"
  end

  def honorific
    case gender
    when :male
      "Mr."
    when :female
      "Ms."
    end
  end

private

  attr_reader :user
end
