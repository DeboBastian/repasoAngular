export interface Product {
    _id: string;
    name: string;
    description: string;
    price: string;
    category: string;
    image: string;
    active: boolean;
    quantity?: number;
}
