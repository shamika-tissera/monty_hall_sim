import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChartComponent } from './chart.component';
import { SharedService } from '../shared.service';
import { BehaviorSubject } from 'rxjs';

describe('ChartComponent', () => {
  let component: ChartComponent;
  let fixture: ComponentFixture<ChartComponent>;
  let sharedService: SharedService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartComponent ],
      providers: [ SharedService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartComponent);
    component = fixture.componentInstance;
    sharedService = TestBed.inject(SharedService);
    fixture.detectChanges();
  });

  it('should create the chart', () => {
    const fixture = TestBed.createComponent(ChartComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render chart', () => {
    const chartElement = fixture.nativeElement.querySelector('#bar_chart');
    expect(chartElement).toBeTruthy();
  });
});