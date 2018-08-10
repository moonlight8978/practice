require_relative 'command'

class CompositeCommand < Command
  def initialize
    super()
    @commands = []
  end

  def <<(command)
    @commands << command
  end

  def excute
    @commands.each { |command| command.excute }
  end
end
