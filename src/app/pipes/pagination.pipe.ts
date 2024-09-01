import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../interfaces/product';

@Pipe({
  name: 'pagination'
})
export class PaginationPipe implements PipeTransform {

  transform(arrAllProducts: Product[], page: number = 1, totalElements: number= 3): Product[] {
    return arrAllProducts.slice(page, page + totalElements) ;
  }

}
