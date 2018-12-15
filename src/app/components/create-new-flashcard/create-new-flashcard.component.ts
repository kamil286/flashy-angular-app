import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Flashcard } from 'src/app/models/flashcard-model';
import { FlashcardService } from '../../services/flashcard-service';

@Component({
    selector: 'app-create-new-flashcard',
    templateUrl: './create-new-flashcard.component.html'
})
export class CreateNewFlashcardComponent implements OnInit {

    flashcards: Flashcard[];

    constructor(private router: Router, private flashcardService: FlashcardService) { }

    ngOnInit() {
        console.log("Perform creation of the flashcard!");
    }
}