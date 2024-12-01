import React from 'react';
import { useBookingStore } from '@/store/bookingStore';
import { format } from 'date-fns';
import { Button } from '@/components/ui/Button';

export const BookingList: React.FC = () => {
  const bookings = useBookingStore((state) => state.bookings);
  const cancelBooking = useBookingStore((state) => state.cancelBooking);

  return (
    <div className="space-y-4">
      {bookings.map((booking) => (
        <div
          key={booking.id}
          className="bg-white rounded-lg shadow-md p-4 border border-gray-200"
        >
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold text-lg">
                {booking.pickupLocation.name} → {booking.dropoffLocation.name}
              </h3>
              <p className="text-gray-600">
                {format(booking.date, 'PPP')} • {booking.passengers} passengers
              </p>
              <p className="text-gray-600">Vehicle: {booking.vehicle.name}</p>
              <p className="font-medium mt-2">Total: ${booking.totalPrice}</p>
            </div>
            <div>
              <span
                className={`inline-block px-2 py-1 rounded-full text-sm ${
                  booking.status === 'confirmed'
                    ? 'bg-green-100 text-green-800'
                    : booking.status === 'cancelled'
                    ? 'bg-red-100 text-red-800'
                    : 'bg-yellow-100 text-yellow-800'
                }`}
              >
                {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
              </span>
            </div>
          </div>
          {booking.status === 'pending' && (
            <div className="mt-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => cancelBooking(booking.id)}
                className="text-red-600 border-red-600 hover:bg-red-50"
              >
                Cancel Booking
              </Button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};