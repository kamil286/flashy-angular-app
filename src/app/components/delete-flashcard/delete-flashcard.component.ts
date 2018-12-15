import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Flashcard } from 'src/app/models/flashcard-model';
import { FlashcardService } from '../../services/flashcard-service';

@Component({
    selector: 'app-delete-flashcard',
    templateUrl: './delete-flashcard.component.html'
})
export class DeleteFlashcardComponent implements OnInit {

    flashcards: Flashcard[];

    constructor(private router: Router, private flashcardService: FlashcardService) { }

    ngOnInit() {
        console.log("Perform deletionof the flashcard!");
    }
}