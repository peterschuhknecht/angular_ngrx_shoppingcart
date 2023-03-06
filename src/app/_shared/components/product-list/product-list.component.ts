import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  @Input() products: any;
  @Input() buttonName: string | undefined;
  @Output() newItemEvent = new EventEmitter<Product>();  

  public onButton(value: Product): void {
    this.newItemEvent.emit(value);
  }
}
