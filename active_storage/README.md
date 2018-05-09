##### Setup

* `rails active_storage:install`

* `rails db:migrate`

##### Usage

In model:

```ruby
class Post < ApplicationRecord
  has_one_attached :cover
  has_many_attached :images
end
```

In views:

```ruby
= f.file_field :cover, class: 'form-control'
= f.file_field :images, multiple: true, class: 'form-control'
```

Controller: permit the attachment keys' name

```ruby
def post_params
  params.require(:post).permit(
    :title, :content, :cover, images: []
  )
end
```

Process:

* Store attachment data into `active_storage_blobs` table: filename, size, checksum...
* `active_storage_attachments` table works as a join table. Store attachment type, its blob id, and the model id.
* Use `ActiveJob` to set the metadata for blobs: width, height

Access from view:

```ruby
= image_tag @post.cover.variant(resize: '300x300')

- @post.images.each do |image|
  = image_tag image
```

Rails will send a request to `ActiveStorage::BlobsController#show` to resize/retrieve the image. 
Rails use:
* `signed_blob_id`:  to retrieve the blob record from database.
* `key `: to retrieve the blob file saved on disk.
* `variation_key`: to retrieve the resized version (image only).

```ruby
= link_to(@post.cover.filename, rails_blob_path(@post.cover, disposition: :attachment))
```

Disposition is `:inline` by default, by changing to `:attachment` will result in downloading the attachment.

To delete the attachment, use `#purge`

```ruby
@post.cover.purge
@post.images.first.purge_later 	# background process
@post.images.purge
```

