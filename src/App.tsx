import { BookingForm } from '@/components/booking/BookingForm';
import { BookingList } from '@/components/booking/BookingList';

function App() {
  const handleBookingSubmit = () => {
    // Handle booking submission
    console.log('Booking submitted');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold text-gray-900">VayGo Transport</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">Book a Ride</h2>
            <div className="bg-white rounded-lg shadow-md p-6">
              <BookingForm onSubmit={handleBookingSubmit} />
            </div>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-4">Your Bookings</h2>
            <BookingList />
          </div>
        </div>
      </main>
    </div>
  );
}