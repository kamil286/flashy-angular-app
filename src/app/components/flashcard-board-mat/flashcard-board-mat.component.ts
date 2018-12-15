import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Flashcard } from 'src/app/models/flashcard-model';
import { FlashcardService } from '../../services/flashcard-service';

@Component({
  selector: 'app-flashcard-board-mat',
  templateUrl: './flashcard-board-mat.component.html',
  styleUrls: ['./flashcard-board-mat.component.scss'],
})
export class FlashcardBoardMatComponent implements OnInit {

  flashcards: Flashcard[] = [];
  flashcarsForont: any;
  isFetching: boolean = false;

  constructor(private router: Router, private flashcardService: FlashcardService,) { }

  ngOnInit(): void {
    this.isFetching = true;
    this.flashcardService.getFlascards()
      .subscribe(data => {
        data.forEach(element => {
          this.flashcards.push(element);
        })
        this.isFetching = false;
      });
  }
}
