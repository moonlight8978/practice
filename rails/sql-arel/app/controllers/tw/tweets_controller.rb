class Tw::TweetsController < ApplicationController
  def show
    @tweet = Tw::Tweetable.includes(replies: [activity: :creator]).where(type: [Tw::Tweet.name, Tw::Retweet.name, Tw::Reply.name]).find(params[:id])
    @mentioned_tweet = @tweet.retweet? ? @tweet.subject : nil
    preloader = ActiveRecord::Associations::Preloader.new
    preloader.preload(@tweet.replies.select { |reply| reply.replies.size == 1 }, [replies: [activity: :creator]])
  end
end
