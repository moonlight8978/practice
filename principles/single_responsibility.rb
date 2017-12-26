require 'date'
require 'forwardable'

# Model

class Formatter
  attr_accessor :person

  def initialize(person)
    @person = person
  end

  def display
    puts "Name: #{person.name}, Age: #{person.age}"
  end

  def year_of_birth
    puts (Date.today.year - person.age)
  end
end

class Person
  extend Forwardable

  attr_reader :name, :age

  # def_delegators :formatter, :display, :year_of_birth

  def initialize(name, age)
    @name = name
    @age = age
  end

  def display
    formatter.display
  end

  def year_of_birth
    formatter.year_of_birth
  end

  def formatter
    @formatter ||= Formatter.new(self) # violate DIP?
  end
end

# Service Version 1

# module PersonLogger
#   def log_action(name, action = :create)
#     puts "#{name} has been #{action}"
#   end
# end

# class PersonService
#   include PersonLogger

#   def initialize(person)
#     @person = person
#   end

#   def create
#     log_action(person.name)
#   end

# private 

#   attr_reader :person
# end

# Service Version 2

class PersonLogger
  def log_action(name, action = :create)
    puts "#{name} has been #{action}"
  end
end

class PersonService
  def initialize(person)
    @person = person
  end

  def create
    PersonLogger.new.log_action(person.name) # violate DIP?
  end

private 

  attr_reader :person
end

# Main process

person = Person.new("Hiroshi", 20)
PersonService.new(person).create
person.display
person.year_of_birth

# @summary
#   Single Responsibility in Ruby can be achieved by using `include` or `new` (?)
#   I prefer `new` way
#   Cache dependency if need to use it more than 2 times
