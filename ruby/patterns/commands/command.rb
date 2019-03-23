# This is an abstract class
# Each ConcreteCommand will be initialized with neccessary params for #excute
# If a complicated command contain many already-defined commands, take a look
#   at Composite Pattern
# @abstract
class Command
  def excute
    raise NoMethodError, "called abstract method #excute"
  end
end
