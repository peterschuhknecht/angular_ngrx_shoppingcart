import { Component, OnInit } from '@angular/core';
import { TestService } from "./services/test.service";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit{
  public serviceData: any;
  public errorMessage: any;

  constructor(private testService: TestService) {
  }

  ngOnInit() {
  }

  public getServiceData() {
    this.testService.getDataV1().subscribe({
      next: data => {
        this.serviceData = data;
      },
      error: err => {
        this.errorMessage = err.statusText;
      },
      complete: () => {
        console.log('Finished');
    }
    });
  }

  public testFunction(): void {
    throw new Error("Oh there is an error!");
  }

}
