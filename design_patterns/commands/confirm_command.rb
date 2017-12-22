require_relative 'command'

class ConfirmCommand < Command
  def initialize(msg, url)
    @msg, @url = msg, url
  end

  def excute
    puts "Confirmed to #{@msg}. Request has been sent to #{@url}"
  end
end
