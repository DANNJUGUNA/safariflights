class FlightsController < ApplicationController
    def index
        flights = Flight.all
        render json: flights, only: [:destination, :from, :duration, :departure, :cost]
    end

    def show
        flight = Flight.find_by(id: params[:id])
        if flight
            render json: flight.as_json(includes: :users)
        else
            render json: { error: "Flight Not found" }, status: :not_found
        end
    end
end
