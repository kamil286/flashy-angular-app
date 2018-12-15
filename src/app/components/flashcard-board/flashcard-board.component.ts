import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Flashcard } from 'src/app/models/flashcard-model';
import { FlashcardService } from '../../services/flashcard-service';

@Component({
    selector: 'app-list-flashcard',
    templateUrl: './flashcard-board.component.html'
})
export class FlashcardBoardComponent implements OnInit {

    flashcards: Flashcard[];

    constructor(private router: Router, private flashcardService: FlashcardService) { }

    ngOnInit() {
        this.flashcards.push({ title: "Title1", content: "Content1"});
        this.flashcards.push({ title: "Title2", content: "Content2"});
        this.flashcards.push({ title: "Title3", content: "Content3"});
        this.flashcards.push({ title: "Title4", content: "Content4"});
        this.flashcards.push({ title: "Title5", content: "Content5"});
        this.flashcards.push({ title: "Title6", content: "Content6"});
    }
}