import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { PRODUCTO_ACTIONS } from './ngrx';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
})
export class ProductComponent {
  constructor(public store: Store) { }

  ngOnInit(): void {
    this.store.dispatch({type : PRODUCTO_ACTIONS.INIT_PRODUCTOS});
  }
}
