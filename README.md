# Shoppingcart

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.5.

Bei der Anwendung handelt es sich um einen einfachen Warenkorb. Wir gehen davon aus, dass jeder Artikel nur einmal verfügbar ist. Wird ein Artikel in den Warenkorb geschoben, ist er nicht mehr in der Produktliste sichtbar.

Anforderungen:
- Verwendung von NgRx für das State Management: https://ngrx.io/guide/store .
- Produkt- und Warenkorb-Bereich sollen jeweils eine eigenständige Angular-Komponente sein.
- Es gibt zwei States: “products” (Produkte im linken Bereich) und “cart” (Warenkorb im rechten Bereich).
- Klickt man auf “In den Warenkorb” soll der Artikel aus dem State “product” entfernt und in den State “cart” eingefügt werden.
- Klickt man auf “Entfernen” soll das genau andersherum funktionieren.
- Wird ein Artikel in den Warenkorb hinzugefügt, soll für einige Sekunden die grüne Meldung “Neuer Artikel hinzugefügt” erscheinen und dann automatisch wieder verschwinden. Die Anzeige dieser Meldung sollte über eine Subscription auf den State “cart” gelöst werden.
- Das Design ist nebensächlich. Wenn ihr wollt und Zeit habt, könnt ihr gern PrimeNg einsetzen, um den Umgang damit zu lernen.
- Wenn ihr wollt könnt ihr auch Routing verwenden um die beiden Bereiche in jeweils einer Seite darzustellen.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
