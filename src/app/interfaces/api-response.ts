import { Product } from "./product";

export interface ApiResponse {
    page: number;
  per_page: number;
  total: number;
  total_pages: number;
  results: Product[]
}
