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

# Main process

Logger.instance.info("Hello")
Logger.instance.info("DSAD")

# @summary
#   Use singleton if you need an object to use across the whole application
#   Cannot be initialize (because only 1 object exists in an application)
#   Use `#instance` to get the object
