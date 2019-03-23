module Web::Controllers::Cds
  class Index
    include Web::Action

    expose :cds

    def call(params)
      @cds = CdRepository.new.all
    end
  end
end
