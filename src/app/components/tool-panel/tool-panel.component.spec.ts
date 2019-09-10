import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import { ToolPanelComponent } from './tool-panel.component';

describe('ToolPanelComponent', () => {
  let component: ToolPanelComponent;
  let fixture: ComponentFixture<ToolPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        AgGridModule.withComponents([ToolPanelComponent])
      ],
      declarations: [ ToolPanelComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
