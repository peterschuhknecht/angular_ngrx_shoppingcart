import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TestdataService implements InMemoryDbService {
  createDb() {
    return {
      products: [
        {
          id: 0,
          title: 'Produkt Eins',
          description:
            'Lorem ipsum dolor sit amet, consetetur sadipscing dolor',
          price: 1245,
        },
        {
          id: 1,
          title: 'Produkt Zwei',
          description:
            'Lorem ipsum dolor sit amet, consetetur sadipscing dolor',
          price: 145,
        },
        {
          id: 2,
          title: 'Produkt Drei',
          description:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr',
          price: 27,
        },
        {
          id: 3,
          title: 'Produkt Vier',
          description:
            'Lorem ipsum dolor sit amet, consetetur sadipscing dolor',
          price: 1065,
        },
        {
          id: 4,
          title: 'Produkt Fünf',
          description:
            'At accusam dolor sit amet, consetetur sit dolores elitr',
          price: 459,
        },
        {
          id: 5,
          title: 'Produkt Sechs',
          description:
            'At accusam dolor sit amet, consetetur sit dolores elitr',
          price: 459,
        },
        {
          id: 6,
          title: 'Produkt Sieben',
          description:
            'At vero eos et accusam et justo duo dolores et ea rebum',
          price: 12,
        },
      ],
    };
  }
}
