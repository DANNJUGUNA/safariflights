class BookingsController < ApplicationController
    def index
        bookings = Booking.includes(:user, :flight)
        render json: bookings, include: { flight: {} }, except: [:flight_id], status: :ok
    end

    def show
        @booking = Booking.includes(:user, :flight).find_by(id: params[:id])
        if @booking
        render json: @booking, include: { flight: {} }, except: [:flight_id], status: :ok
        else
        render json: { error: "Booking Not found" }, status: :not_found
        end
    end

    def create
        booking = Booking.create!(booking_params)
        if booking
            render json: booking.user, include: [:flights], status: :created
        else
            render json: { errors: record.erros.full_messages }, status: :unprocessable_entity
        end
    end

    def booking_params
        params.require(:booking).permit(:flight_id, :user_id)
    end

end

