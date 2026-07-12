export type PetCategory = "dog" | "cat";

export interface Pet {
  id: string;
  name: string;
  category: PetCategory;
  breed: string;
  age: string;
  gender: "Male" | "Female";
  size: string;
  origin: string;
  location: string;
  lat: number;
  lng: number;
  images: string[];
  shortDescription: string;
  story: string;
  breedInfo: string;
  temperament: string[];
  goodWith: string[];
}
