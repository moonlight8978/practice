### Singleton Pattern

We have some things that are unique and could be globaly accessed, such as configurator, logger...

```ruby
class Logger
  # ...

  @@instance = Logger.new

  def self.instance
    @@instance
  end

  private_class_method :new
end
```

Or simply include stdlib's `Singleton` module

```ruby
require 'singleton'

class Logger
  include Singleton
end
```

To access the logger

```ruby
Logger.instance.method
```
