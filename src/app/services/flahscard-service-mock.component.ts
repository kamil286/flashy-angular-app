import { Injectable } from '@angular/core';

import { Flashcard } from '../models/flashcard-model';

@Injectable()
export class FlashcardMockService {

    flashcards: Flashcard[] = [];

    // constructor() {
    //     this.flashcards.push({flashcardId: "1", title: "Ciekawostki Marsa", content: "Mars jest czerwony"});
    //     this.flashcards.push({flashcardId: "1", title: "Ciekawostki Ziemi", content: "Ziemia jest niebieska"});
    //     this.flashcards.push({flashcardId: "1", title: "Ciekawostki Saturna", content: "Saturn ma pierścienie"});
    //  }

    // public getFlascards(): Flashcard[] {
    //     return this.flashcards;
    // }

    // public addFlashcard(flascardId: string, title: string, content: string) {

    //     this.flashcards.push({flashcardId, title, content});
    // }

    // public deleteFlashcard(title: string) {
    //     this.flashcards.forEach(function(element, index) {
    //         if (element[index].title === title) {
    //             console.log("Index to splice: " + index);
    //         }
    //     })
    // }
}