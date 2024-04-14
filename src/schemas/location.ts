import { ObjectId } from "mongodb";

export interface Location {
  _id?: ObjectId;
  name: string;
  description?: string;
  address: string;
  phone: string;
  postal_code: string;
  visited: boolean;
  visited_at: string | null;
  created_at: string;
  latitude?: number;
  longitude?: number;
  bounding_box?: string[];
  match_address?: string;
}

export interface NewLocation {
  name: string;
  description?: string;
  address: string;
  phone: string;
  postal_code: string;
}

export interface LocationId {
  id: string;
}

export interface LocationPagination {
  skip: number;
  limit: number;
}
