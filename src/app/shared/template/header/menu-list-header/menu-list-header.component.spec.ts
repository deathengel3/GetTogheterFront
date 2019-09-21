import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuListHeaderComponent } from './menu-list-header.component';

describe('MenuListHeaderComponent', () => {
  let component: MenuListHeaderComponent;
  let fixture: ComponentFixture<MenuListHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuListHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuListHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
