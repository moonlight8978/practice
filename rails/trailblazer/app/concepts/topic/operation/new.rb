class Topic::Operation::New < Trailblazer::Operation
  # step :create_model

  # def create_model(options, **)
  #   model = Topic.new
  #   options[:model] = model
  #   options["contract.default"] = Topic::Contract::New.new(model)
  # end

  step :upload_to_s3
  fail :upload_to_azure, Output(:success) => :test2
  fail :upload_to_b2, Output(:success) => Track(:success)
  fail :log_problem
  step :test2
  pass :win

  def upload_to_s3(options, **)
    puts "s3"
    false
  end

  def upload_to_azure(options, **)
    puts "azure"
    true
  end

  def upload_to_b2(options, **)
    puts "b2"
    false
  end

  def test2(options, **)
    puts "test2"
    Railway.pass!
  end

  def log_problem(options, **)
    puts "abc"
  end

  def win(options, **)
    puts "winnn"
  end
end
