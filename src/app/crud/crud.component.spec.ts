import { TestBed } from '@angular/core/testing';
import { CrudComponent } from './crud.component';

describe('CrudComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CrudComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(CrudComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  // it(`should have as title 'demo-solera'`, () => {
  //   const fixture = TestBed.createComponent(CrudComponent);
  //   const app = fixture.componentInstance;
  //   expect(app.title).toEqual('demo-solera');
  // });

  it('should render title', () => {
    const fixture = TestBed.createComponent(CrudComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('demo-solera app is running!');
  });
});
