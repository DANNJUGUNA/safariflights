class BookingsController < ApplicationController
    before_action :authorized
   
    
    def index
      if params[:cancel].present?
        booking = Booking.find_by(id: params[:cancel], user_id: current_user.id)
        if booking.present?
          booking.destroy
          render json: { message: "Booking cancelled successfully" }
        else
          render json: { error: "Booking not found" }, status: :not_found
        end
      else
        render json: current_user_bookings.as_json(only: [:id, :user_id, :flight_id], include: {
          user: { only: [:id, :username, :email] },
          flight: { only: [:id, :destination, :from, :duration, :departure, :cost] }
        })
      end
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
    booking = Booking.find_by(id: params[:id], user_id: current_user.id)
    if booking
      flight_id = booking.flight_id
      booking.destroy
      render json: { message: "Booking successfully deleted", flight_id: flight_id }, status: :ok
    else
      render json: { error: "Booking not found" }, status: :not_found
    end
  end
  
  
    private
    def booking_params
        params.require(:booking).permit(:flight_id)
      end

end

