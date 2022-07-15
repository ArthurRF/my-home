export interface IUpdateAddressDTO {
    id: string;
    city_id?: number;
    district?: string;
    street?: string;
    number?: number;
    complement?: string;
    reference_point?: string;
}