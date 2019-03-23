# Search class for searching with provided `keyword`
class Search
  # Intialize product search object
  #
  # * asdas
  # * asddasasd
  # * asdas
  #
  # @param args [Hash] arguments for searching, `:text` or `:html`
  # @option args [#search] :searchable Class responds to `#search`
  # @option args [String] :keyword Keyword for fulltext-search
  # @option args [Symbol] :order Order results by specific field, `:column_name`
  # @option args [Symbol] :group Grouping results, `:column_name`
  def initialize(**args)
    # assign variables 
  end

  # Different initialize
  # @param (see #initialize)
  # @option (see #initialize)
  # @return (see #initialize)
  def different_initialize(**args)
    # assign variables
  end

  # Perform search with `keyword`
  # 
  # @return [Array<Product>, nil] an array of results or nil if no result found
  #
  # @example
  #   Search.new.perform => [p1, p2, p3...]
  def perform
    do_search
  end

private
  
  def do_search
    do_something_before_search
    # search
  end

  # Transform `:keyword` to standard form
  #
  # @return [true, false] standard form of keyword
  def do_something_before_search
    # let's do smth with variables
  end
end
