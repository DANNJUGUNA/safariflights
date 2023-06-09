class FlightsController < ApplicationController
    skip_before_action :authorized,only:[:index]
    def index
        flights=Flight.all 
        render json: flights 
    end
    def show
        flight=find_flight
        if flight
            render json: flight
        else
            render json: { error: "Flight not found" }, status: :not_found
        end
    end

    def create
        flight=Flight.create!(permited_params)
        render json: flight,status: :created
    end
    def update
        flight=find_flight
        flight.update!(permited_params)
        render json:flight,status: :ok
    end
    def destroy
        flight=find_flight
        flight.destroy
        head :no_content
    end

    private 
    
    def permited_params
        params.permit(:destination,:from,:duration,:departure,:cost)
    end
    def find_flight
        Flight.find(params[:id])
    end
    def render_not_found_response
        render json: { error: "Flight not found" }, status: :not_found
    end
    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :render_unprocessable_entity_response

    end
end

