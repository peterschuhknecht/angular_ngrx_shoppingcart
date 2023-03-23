import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/Product';
import { Observable } from 'rxjs';
import { CartState } from '../../store/reducers/cart.reducer';
import { Store } from '@ngrx/store';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  cart$: Observable<readonly Product[]>;
  cartItems = 0;

  constructor(
    private cartStore: Store<CartState>,
    private messageService: MessageService
  ) {
    this.cart$ = this.cartStore.select('cart');
  }

  ngOnInit(): void {
    this.subscribeToCart();
  }

  private subscribeToCart(): void {
    this.cart$.subscribe(async (product: readonly Product[]) => {
      // Warenkorbmeldung anzeigen je nach hinzugefügt oder entfernt
      if (product.length !== 0 && this.cartItems < product.length) {
        this.messageService.add({
          severity: 'success',
          summary: 'Produkt hinzugefügt ',
          detail: '',
        });
      }

      if (this.cartItems > product.length) {
        this.messageService.add({
          severity: 'warn',
          summary: 'Produkt entfernt ',
          detail: '',
        });
      }

      // Anzahl Warenkorbartikel updaten
      this.cartItems = product.length;

      // Alle Meldungen nach einer Sekunde schließen
      setTimeout(() => {
        this.messageService.clear();
      }, 1000);
    });
  }
}
