export interface Product {
    _id: string;
    name: string;
    description: string;
    price: string;
    category?: string;
    department?: string;
    image: string;
    active: boolean;
    quantity?: number;
}
