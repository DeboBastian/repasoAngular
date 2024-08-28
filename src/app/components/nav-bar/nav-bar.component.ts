import { Component } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from '../../Services/product.service';
import { ListProductsComponent } from '../Products/list-products/list-products.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  constructor(public productSrv: ProductService,
    //public listService : ListProductsComponent //puedo inyectar cualquier componente para usar sus variables
  ) {
   }

  
//  async ngOnInit() {
//   await this.productSrv.getAll();
//     console.log(this.productSrv.productos)
//   }
  
}
