json.extract! post, :id, :content, :category, :created_at, :updated_at
json.url post_url(post, format: :json)
