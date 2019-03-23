module BelongsTo
  def belongs_to(association)
    define_method(association) do
      instance_variable_get(:"@#{association}")
    end

    define_method(:"#{association}=") do |object|
      instance_variable_set(:"@#{association}", object)
    end
  end
end
