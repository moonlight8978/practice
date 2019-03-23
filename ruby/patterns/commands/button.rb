# Many another button types can inherit Button
# Commands make complicated logics seperate from Button class
class Button
  def initialize(name, command)
    @name = name
    @command = command
  end

  def onclick
    @command.excute if @command
  end
end
