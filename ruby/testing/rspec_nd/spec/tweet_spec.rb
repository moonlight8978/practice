require 'rspec'

require_relative '../src/tweet'

describe Tweet do
  let(:content) { 'Content' }
  let(:user) { 'DZ' }
  let(:tweet) { Tweet.new(content: content, user: user) }

  describe "#new" do
    context "without content" do
      it "is invalid" do
        tweet.content = nil
        expect(tweet).to be_invalid
      end
    end

    context "without user" do
      it "is invalid" do
        tweet.user = nil
        expect(tweet).to be_invalid
      end
    end

    context "without both user and content" do
      it "is invalid" do
        tweet.user = nil
        tweet.content = nil
        expect(tweet).to be_invalid
      end
    end

    context "with user and content" do
      it "is valid" do
        expect(tweet).to be_valid
      end
    end
  end

  describe "#format" do
    context "without user" do
      it "returns nil" do
        tweet.user = nil
        expect(tweet.format).to be_nil
      end
    end

    context "without content" do
      it "returns nil" do
        tweet.content = nil
        expect(tweet.format).to be_nil
      end
    end

    context "without both user and content" do
      it "returns nil" do
        tweet.user = nil
        tweet.content = nil
        expect(tweet.format).to be_nil
      end
    end

    context "with properly user and content" do
      it "takes the user and content to format the output" do
        output = "#{user} said: \"#{content}\""
        expect(tweet.format).to eq(output)
      end
    end
  end
end
