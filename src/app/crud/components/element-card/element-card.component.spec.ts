import { TestBed } from '@angular/core/testing';
import { ElementCardComponent } from './element-card.component';

describe('ElementCardComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ElementCardComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(ElementCardComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'demo-solera'`, () => {
    const fixture = TestBed.createComponent(ElementCardComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('demo-solera');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(ElementCardComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('demo-solera app is running!');
  });
});
