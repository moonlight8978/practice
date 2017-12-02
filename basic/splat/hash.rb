def give_me_args(**args)
  p args
end

give_me_args(x: 2, y: 3) # Will transform args to hash

#
#

# `**` will create new Hash, original hash wont be affected
def will_create_new_hash(**hash)
  hash[:x] = 10 # Change
  p hash
  p hash.object_id 
end

h = { x: 1, y: 2 }

puts "Before:"
p h
p h.object_id

puts "Process:"
will_create_new_hash(h)

puts "After:"
p h
p h.object_id
