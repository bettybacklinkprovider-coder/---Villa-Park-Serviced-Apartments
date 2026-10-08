export interface Apartment {
  id: string;
  nameAr: string;
  nameEn: string;
  taglineAr: string;
  taglineEn: string;
  image: string;
  size: string;
  guests: string;
  beds: string;
  priceEstimate: string;
  amenities: string[];
  amenitiesAr: string[];
  descriptionAr: string;
  descriptionEn: string;
}

export interface Amenity {
  id: string;
  nameAr: string;
  nameEn: string;
  descriptionAr: string;
  descriptionEn: string;
  icon: string;
  image?: string;
}
