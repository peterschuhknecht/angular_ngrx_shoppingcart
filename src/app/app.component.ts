import { Component } from '@angular/core';
import { Product } from "./_shared/models/Product";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public products: Product[] = [
    { id: 0, title: 'Produkt Eins', description: 'Lorem ipsum dolor sit amet, consetetur sadipscing dolor', price: 145},
    { id: 2, title: 'Produkt Drei', description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr', price: 27},
    { id: 3, title: 'Produkt Vier', description: 'Lorem ipsum dolor sit amet, consetetur sadipscing dolor', price: 1065},
    { id: 4, title: 'Produkt Fünf', description: 'At accusam dolor sit amet, consetetur sit dolores elitr', price: 459},
    { id: 6, title: 'Produkt Sieben', description: 'At vero eos et accusam et justo duo dolores et ea rebum', price: 12},
  ]

  public cart: Product[] = [
    { id: 1, title: 'Produkt Zwei', description: 'Lorem ipsum dolor sit amet, consetetur sadipscing dolor', price: 145},
    { id: 5, title: 'Produkt Sechs', description: 'At accusam dolor sit amet, consetetur sit dolores elitr', price: 459}
  ]
}
