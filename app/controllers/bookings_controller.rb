class BookingsController < ApplicationController
    before_action :authorized
   
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
    flight = Flight.find(booking_params[:flight_id])
    user = current_user
    booking = Booking.create(flight: flight, user: user)
    if booking.valid?
      render json: booking, status: :created
    else
      render json: { errors: booking.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def destroy
    booking = Booking.find_by(id: params[:id])
    booking.destroy
    head :no_content
  end

    private
    def booking_params
        params.require(:booking).permit(:flight_id)
      end

end

