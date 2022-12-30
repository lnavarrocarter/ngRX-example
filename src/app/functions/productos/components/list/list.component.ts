import { Component } from '@angular/core';
import { ProductoElement } from '../../models/producto.interface';
import { Store } from '@ngrx/store';
import { GetProductList, PRODUCTO_ACTIONS } from '../../ngrx';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-list-producto',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListProductoComponent {
  displayedColumns: string[] = ['title', 'category', 'price'];
  $productos: Observable<ProductoElement[]> = this.store.select(GetProductList);
  list : ProductoElement[] = [];
  constructor(
    public store: Store
    ) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.getProductoServices();
  }

  getProductoServices() {
      this.$productos
      .subscribe((data: any) => {
        console.log(JSON.stringify(data), 'return product')
        this.list = data;
      })

  }
}
