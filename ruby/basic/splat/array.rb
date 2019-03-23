arr = [1, 2, 3]
p arr
p 5, 6, 7
p *arr # passing all `array` elements to `#method`, one by one

def give_me_some_args(*args)
  p args
end

give_me_some_args(1, 2, 3) # transform all args into array

#
#

# Wrong
give_me_some_args(arr)

# `*` will call Array#new (?), so original array will not be affected
def will_create_new_array(*args)
  p args.object_id
end

arr = [1, 2, 3]
p arr.object_id
will_create_new_array(*arr)

def original_array_will_not_be_affected(*args)
  args[0] = 5
  p args
end

original_array_will_not_be_affected(*arr)
p arr
