import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';

interface BookingFormProps {
  onSubmit: () => void;
}

export const BookingForm: React.FC<BookingFormProps> = ({ onSubmit }) => {
  const [pickupLocation, setPickupLocation] = useState<string>('');
  const [dropoffLocation, setDropoffLocation] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [passengers, setPassengers] = useState<number>(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="pickup" className="block text-sm font-medium text-gray-700">
          Pickup Location
        </label>
        <input
          type="text"
          id="pickup"
          value={pickupLocation}
          onChange={(e) => setPickupLocation(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      <div>
        <label htmlFor="dropoff" className="block text-sm font-medium text-gray-700">
          Dropoff Location
        </label>
        <input
          type="text"
          id="dropoff"
          value={dropoffLocation}
          onChange={(e) => setDropoffLocation(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      <div>
        <label htmlFor="date" className="block text-sm font-medium text-gray-700">
          Date
        </label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      <div>
        <label htmlFor="passengers" className="block text-sm font-medium text-gray-700">
          Passengers
        </label>
        <input
          type="number"
          id="passengers"
          min="1"
          value={passengers}
          onChange={(e) => setPassengers(parseInt(e.target.value))}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      <Button type="submit" variant="primary" className="w-full">
        Search Vehicles
      </Button>
    </form>
  );
};