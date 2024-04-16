export interface Point {
  latitude: number | null;
  longitude: number | null;
  boundingbox: string[] | null;
  match_address: string | null;
}

export interface ForwardGeocode {
  place_id: number;
  licence: string;
  osm_type: string;
  osm_id: number;
  boundingbox: string[];
  lat: string;
  lon: string;
  display_name: string;
  class: string;
  type: string;
  importance: number;
}
