import { ForwardGeocode, Point } from "../schemas/geocode";

export class GeocodeService {
  private apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  public forward = async (address: string): Promise<Point> => {
    const endpoint: string = `https://geocode.maps.co/search?q=${address}&api_key=${this.apiKey}`;
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    const forwardGeocde: ForwardGeocode[] = await fetch(endpoint, options)
      .then(async (response: Response) => {
        return await response.json();
      })
      .catch((error) => {
        console.error(error);
        throw error;
      });

    if (forwardGeocde.length === 0) {
      console.debug("Latitude/Longitude not found for this address.");

      const nullPoint: Point = {
        latitude: null,
        longitude: null,
        boundingbox: null,
        match_address: null,
      };

      return nullPoint;
    }

    const point: Point = {
      latitude: Number(forwardGeocde[0].lat),
      longitude: Number(forwardGeocde[0].lon),
      boundingbox: forwardGeocde[0].boundingbox,
      match_address: forwardGeocde[0].display_name,
    };

    return point;
  };
}
