str = "A string"
p str.class             # => String
p str.length, str.size  # => 8

#
#

# String interpolation
age = 20
p "Age: #{age}!"    # => "Age: 20!"

#
#

# String is not symbol
a = "hello"
a2 = :"hello"
b = :hello
c = 'hello'

p (a == b)    # => false
p (a2 == b)   # => true
p (a == c)    # => true

# Pay attention in hash
h = { x: 2, "y": 3, "z" => 4 }
p "#{h[:x]}, #{h[:'y']}, #{h['z']}"  # => "2, 3, 4"

#
#

# + will create a new string
# #concat (#<<) works on old string. concat is faster than #+
str = "string"            # => "string"
p str.object_id           # => 70368295864140

str = "New " + str        # => "New string"
p str.object_id           # => 70368295867200

str.concat(" blah blah")  # => "New string blah blah"
p str.object_id           # => 70368295867200

#
#

# Useful methods: #gsub, #split, #slice
str = "This%20is%20an%20url_encoded%20string"
p str.object_id       # => 70368596533100

decoded = str.gsub('%20', ' ')
p decoded             # => "This is an url_encoded string"
p decoded.object_id   # => 70368596524020

# Can be used with regex
url = 'http://twitter.com/example_2017'
code = url.gsub(/((https|http):\/\/)*(www.)*twitter.com\//, "")
p code  # => "example_2017"

str = "a string"
new_str = str.slice(0, str.length)
p str, new_str  # => "a string"

# Object's methods
new_str = str.clone
new_str = str.dup

# @summary
#   String and Symbol are different. Be careful
#   Length: #length, #size
#   Useful methods: #gsub, #split, #slice...
#   #concat (#<<) concat to original string, faster than #+
