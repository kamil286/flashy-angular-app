import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Flashcard } from 'src/app/models/flashcard-model';
import { FlashcardService } from '../../services/flashcard-service';

@Component({
    selector: 'app-list-flashcard',
    templateUrl: './flashcard-board.component.html'
})
export class FlashcardThumbnailComponent implements OnInit {

    flashcards: Flashcard[];

    constructor(private router: Router, private flashcardService: FlashcardService) { }

    ngOnInit() {
        console.log("Here is thumbnail of the flashcard!");    
    }
}