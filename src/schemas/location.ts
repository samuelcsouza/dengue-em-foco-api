export interface Location {
  id: string;
  name: string;
  description?: string;
  address: string;
  latitude: number;
  longitude: number;
  visited: boolean;
  visited_at: string | null;
  created_at: string;
}

export interface NewLocation {
  name: string;
  description?: string;
  address: string;
  latitude: number;
  longitude: number;
  visited: boolean;
}
