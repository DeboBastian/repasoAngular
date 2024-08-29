export interface Product {
    _id: string;
    name: string;
    description: string;
    price: number;
    category?: string;
    department?: string;
    image: string;
    active: boolean;
    quantity?: number;
}
