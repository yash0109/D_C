import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClientTestingModule ,HttpTestingController} from '@angular/common/http/testing';
import {HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './about.component';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async (() => {
   TestBed.configureTestingModule({
    imports:[
      HttpClientModule,
      HttpClientTestingModule
    ],
      declarations: [ AboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
