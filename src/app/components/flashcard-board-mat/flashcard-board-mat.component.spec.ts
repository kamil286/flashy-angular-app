import { LayoutModule } from '@angular/cdk/layout';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {
  MatButtonModule,
  MatCardModule,
  MatGridListModule,
  MatIconModule,
  MatMenuModule,
} from '@angular/material';

import { FlashcardBoardMatComponent } from './flashcard-board-mat.component';

describe('FlashcardBoardMatComponent', () => {
  let component: FlashcardBoardMatComponent;
  let fixture: ComponentFixture<FlashcardBoardMatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FlashcardBoardMatComponent],
      imports: [
        NoopAnimationsModule,
        LayoutModule,
        MatButtonModule,
        MatCardModule,
        MatGridListModule,
        MatIconModule,
        MatMenuModule,
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlashcardBoardMatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
