export interface Location {
  id: string;
  name: string;
  address: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface Vehicle {
  id: string;
  type: 'car' | 'van' | 'bus';
  name: string;
  capacity: number;
  pricePerKm: number;
}

export interface Booking {
  id: string;
  pickupLocation: Location;
  dropoffLocation: Location;
  vehicle: Vehicle;
  date: Date;
  passengers: number;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  totalPrice: number;
}