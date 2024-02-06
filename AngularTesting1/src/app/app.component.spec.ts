import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should count capital letters in a string', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const str = 'Hello World';

    expect(app.CountCapital(str)).toEqual(2); // Expected output: 2
  });

  it('should check if a password meets criteria', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const password = 'Abcd@1234!';

    expect(app.CheckPassword(password)).toBeTrue(); // Expected output: true
  });

  it('should add elements of an array', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const arr = [1, 2, 3, 4, 5];

    expect(app.ArrayAddition(arr)).toEqual(15); // Expected output: 15
  });
});
