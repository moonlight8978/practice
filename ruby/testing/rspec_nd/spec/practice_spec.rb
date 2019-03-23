require 'rspec'

$count = 0
$count2 = 0

describe "let" do
  let!(:count) { $count += 1 }

  it "will call the block the first time" do
    expect(count).to eq(1)
  end

  it "will not be cached, so the block will be called again" do
    expect(count).to eq(2)
  end
end

describe "before" do
  before do
    @count = ($count2 += 1)
  end

  it "will be excute before this example" do
    expect(@count).to eq(1)
  end

  it "will be excute again" do
    expect(@count).to eq(2)
  end
end
