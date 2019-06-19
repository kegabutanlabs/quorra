import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { HeaderComponent } from './header.component';
import { NavComponent } from './nav/nav.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BsDropdownModule.forRoot()
      ],
      declarations: [ 
        HeaderComponent,
        NavComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
