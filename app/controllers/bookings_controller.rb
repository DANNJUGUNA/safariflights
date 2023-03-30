class BookingsController < ApplicationController
    before_action :authorized
    # def index
    #     bookings = Booking.includes(:user, :flight)
    #     render json: bookings, include: { flight: {} }, except: [:flight_id], status: :ok
    # end
    

    # def show
    #     @booking = Booking.find_by(id: params[:id])
    #     if @booking
    #         render json: @booking, only: [:flight_id, :user_id]
    #     else
    #         render json: { error: "Booking Not found" }, status: :not_found
    #     end
    # end
    def index
        render json: current_user_bookings
      end
    
      def show
        booking_id = params[:id]
        authorized(booking_id)
        booking = Booking.find(booking_id)
        render json: booking
      end

    def create
        booking = Booking.create!(booking_params)
        if booking
            render json: booking.user, include: [:flights], status: :created
        else
            render json: { errors: record.erros.full_messages }, status: :unprocessable_entity
        end
    end

    def destroy
        booking = Booking.find_by(id: params[:id])
        booking.destroy
        head :no_content
    end

    private

    def booking_params
        params.require(:booking).permit(:flight_id, :user_id)
    end

end

