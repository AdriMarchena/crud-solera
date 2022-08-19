import { TestBed } from '@angular/core/testing';
import { FormServiceComponent } from './form-service.component';

describe('FormServiceComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        FormServiceComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(FormServiceComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'demo-solera'`, () => {
    const fixture = TestBed.createComponent(FormServiceComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('demo-solera');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(FormServiceComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('demo-solera app is running!');
  });
});
