export interface ICreatePropertyDTO {
    name: string;
    description?: string;
    price: number;
    size: number;
    negociation_type: string;
    bedrooms?: number;
    suits?: number;
    bathrooms?: number; 
    garages?: number; 
    property_type_slug: string;
    address_id: string;
}