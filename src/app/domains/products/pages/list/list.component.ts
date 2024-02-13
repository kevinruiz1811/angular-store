import { Component, inject, signal } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';
import { Product } from '../../../shared/models/product.model';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { CartService } from '../../../shared/services/cart.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  products = signal<Product[]>([]);
  private cartService = inject(CartService);

  constructor() {
    const initProducts: Product[] = [
      {
        id: Date.now(),
        title: 'Producto 1',
        price: 10000,
        image: 'https://picsum.photos/640/640',
        creationAt: new Date().toISOString(),
      },
      {
        id: Date.now(),
        title: 'Producto 2',
        price: 20000,
        image: 'https://picsum.photos/640/640',
        creationAt: new Date().toISOString(),
      },
      {
        id: Date.now(),
        title: 'Producto 3',
        price: 30000,
        image: 'https://picsum.photos/640/640',
        creationAt: new Date().toISOString(),
      },
      {
        id: Date.now(),
        title: 'Producto 4',
        price: 30000,
        image: 'https://picsum.photos/640/640',
        creationAt: new Date().toISOString(),
      },
      {
        id: Date.now(),
        title: 'Producto 1',
        price: 10000,
        image: 'https://picsum.photos/640/640',
        creationAt: new Date().toISOString(),
      },
      {
        id: Date.now(),
        title: 'Producto 2',
        price: 20000,
        image: 'https://picsum.photos/640/640',
        creationAt: new Date().toISOString(),
      },
      {
        id: Date.now(),
        title: 'Producto 3',
        price: 30000,
        image: 'https://picsum.photos/640/640',
        creationAt: new Date().toISOString(),
      },
      {
        id: Date.now(),
        title: 'Producto 4',
        price: 30000,
        image: 'https://picsum.photos/640/640',
        creationAt: new Date().toISOString(),
      },
    ];

    this.products.set(initProducts);
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }
}
