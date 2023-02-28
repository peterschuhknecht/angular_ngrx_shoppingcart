import { Component } from '@angular/core';

@Component({
  selector: 'app-matchers',
  templateUrl: './matchers.component.html',
  styleUrls: ['./matchers.component.scss']
})
export class MatchersComponent {

  public testFunction(): void {
    throw new Error("Oh there is an error!");
  }

}
