require_relative 'command'

class AlertCommand < Command
  def initialize(msg)
    @msg = msg
  end

  def excute
    puts "Alert #{@msg}"
  end
end
