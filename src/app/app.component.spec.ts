import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { provideMockStore } from "@ngrx/store/testing";
import { StoreModule } from "@ngrx/store";
import { MatchersComponent } from "./_shared/components/matchers/matchers.component";
import { MenuComponent } from "./_shared/components/menu/menu.component";

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        StoreModule.forRoot(provideMockStore)
      ],
      declarations: [
        AppComponent,
        MatchersComponent,
        MenuComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
