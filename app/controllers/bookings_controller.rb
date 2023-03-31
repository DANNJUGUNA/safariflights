class BookingsController < ApplicationController
  before_action :authorized
   
      def index
        render json: current_user_bookings
      end
    
      def show
        booking_id = params[:id]
        authorized(booking_id)
        booking = Booking.find(booking_id)
        render json: { id: booking.id, user_id: booking.user_id, flight_id: booking.flight_id, user: booking.user, flight: booking.flight }
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
    flight_id = params[:flight_id]
    user = current_user
    booking = Booking.find_by(flight_id: flight_id, user_id: user.id)
    if booking.present?
      booking.destroy
      render json: { message: "Booking successfully deleted" }, status: :ok
    else
      render json: { error: "Booking not found" }, status: :not_found
    end
  end
  
  
  
  
    private
    def booking_params
        params.require(:booking).permit(:flight_id)
    end
      
      

end

