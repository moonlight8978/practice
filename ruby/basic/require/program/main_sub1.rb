# require      # => Ruby will look for $LOAD_PATH => gem, lib folder
# require './' # => current app directory
require './sub1/a1'
require './sub1/b1'

A1.hello
B1.hello
