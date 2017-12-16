module HasMany
  def has_many(association)
    define_method(association) do
      unless instance_variable_defined?(:"@#{association}")
        instance_variable_set(:"@#{association}", Array.new)
      end
      instance_variable_get(:"@#{association}")
    end

    define_method(:"#{association}=") do |objects_array|
      instance_variable_set(:"@#{association}", objects_array)
    end
  end
end
