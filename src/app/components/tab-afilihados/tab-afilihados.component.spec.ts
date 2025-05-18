import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabAfilihadosComponent } from './tab-afilihados.component';

describe('TabAfilihadosComponent', () => {
  let component: TabAfilihadosComponent;
  let fixture: ComponentFixture<TabAfilihadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabAfilihadosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabAfilihadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
