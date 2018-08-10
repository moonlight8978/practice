require 'singleton'

class Logger
  include Singleton

  def info(msg)
    puts "Info: #{msg}"
  end

  def warning(msg)
    puts "Warning: #{msg}"
  end
end
