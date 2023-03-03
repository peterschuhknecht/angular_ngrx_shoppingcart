import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent } from './test.component';
import { HttpClientModule, HttpErrorResponse } from "@angular/common/http";
import { TestService } from "./services/test.service";
import { of, throwError } from "rxjs";

describe('TestComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let testServiceMock: any;

  beforeEach(async () => {
    testServiceMock = {
      getDataV1: jest.fn()
    }
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [TestComponent],
      providers: [
        {
          provide: TestService, useValue: testServiceMock
        }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // 1. Matchers

  // Exakt gleich
  it('Zwei plus zwei', () => {
    const four = 2 + 2;
    expect(four).toBe(4);
    expect(four).toEqual(4);

    expect(four).toBeGreaterThan(3);
    expect(four).toBeGreaterThanOrEqual(4);
    expect(four).toBeLessThan(5);
    expect(four).toBeLessThanOrEqual(4);
  });

  // Objekte
  it('Object values', () => {
    const data = {name: "Tester"}
    expect(data).toEqual({name: "Tester"});
  });

  // Wahrhaftigkeit
  it('null', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
  });

  it('zero', () => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
  });

  it('one', () => {
    const z = 1;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).toBeTruthy();
    expect(z).not.toBeFalsy();
  });

  // Gleitkommazahlen
  it('Gleitkommazahlen', () => {
    //const g = 0.1 + 0.3;
    // expect(g).toBe(0.3);       Funktioniert nicht wegen Rundungsfehler
    // expect(g).toEqual(0.3);    Funktioniert nicht wegen Rundungsfehler
  });

  // Strings
  it('Kein H aber D in Demotext vorhanden', () => {
    expect('Demotext').toMatch('D')
    expect('Demotext').not.toMatch('H')
  });

  // Array
  it('Im Warenkorb ist ein Kleid', () => {
    const warenkorb = [
      "Hose",
      "Kleid",
      "Hut",
      "Hemd"
    ]
    expect(warenkorb).toContain('Kleid');
  });

  // Exceptions
  it('testFunction throw Error', () => {
    expect(() => component.testFunction()).toThrow();
    expect(() => component.testFunction()).toThrow(Error);
    expect(() => component.testFunction()).toThrow('Oh there is an error!');
  });

  // 2. Komponenten Tests
  it('should getServiceData set serviceData', () => {
    const expRes = {
      name: 'Test'
    };
    jest.spyOn(testServiceMock, 'getDataV1').mockReturnValue(of(expRes));
    component.getServiceData();
    expect(component.serviceData).toBe(expRes);
  });

  it('should getServiceData set error Message', () => {
    const errorResponse = new HttpErrorResponse({
      error: 'test 404 error',
      status: 404,
      statusText: 'Not Found'
    })
    jest.spyOn(testServiceMock, 'getDataV1').mockReturnValue(throwError(() => errorResponse));
    component.getServiceData();
    expect(component.errorMessage).toBe('Not Found');
  });

  // 3. Branches
  it('should greeting set Good morning', () => {
    expect(component.setGreeting(9)).toBe('Good morning');
  });

  it('should greeting set Good day', () => {
    expect(component.setGreeting(14)).toBe('Good day');
  });

  it('should greeting set Good evening', () => {
    expect(component.setGreeting(22)).toBe('Good evening');
  });

});
