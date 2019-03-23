module Web::Controllers::Cds
  class Create
    include Web::Action

    expose :cd

    params do
      required(:cd).schema do
        required(:title).filled(:str?)
        required(:artist).filled(:str?)
      end
    end

    def call(params)
      if params.valid?
        @cd = CdRepository.new.create(params[:cd])

        redirect_to '/cds'
      else
        self.status = 422
      end
    end
  end
end
