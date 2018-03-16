module Api
  class ToursController < ApplicationController
    def index
      @tours = Tour.all
    end

    def create

    end

    def update

    end
  end
end
