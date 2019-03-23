require 'features_helper'

RSpec.describe Cd, type: :entity do
  it "can be initialize with attrs" do
    cd = Cd.new(title: "Cd 1", artist: "Artist 1")
    expect(cd.title).to be == "Cd 1"
  end
end
