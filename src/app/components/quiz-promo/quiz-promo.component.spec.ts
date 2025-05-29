import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizPromoComponent } from './quiz-promo.component';

describe('QuizPromoComponent', () => {
  let component: QuizPromoComponent;
  let fixture: ComponentFixture<QuizPromoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuizPromoComponent]
    });
    fixture = TestBed.createComponent(QuizPromoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
