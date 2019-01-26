import { Component, OnInit } from '@angular/core';
import { FlashcardService } from "../../services/flashcard-service";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators, FormControl, Form } from "@angular/forms";

@Component({
    selector: 'app-create-new-flashcard',
    templateUrl: './create-new-flashcard.component.html',
    styleUrls:['./create-new-flashcard.component.scss']
})
export class CreateNewFlashcardComponent implements OnInit {
    validatingForm: FormGroup;

    constructor(private flashcardService: FlashcardService) { }

    ngOnInit() {
      this.validatingForm = new FormGroup({
        required: new FormControl(null, Validators.required)
      });
    }
  
    get input() { return this.validatingForm.get('required'); }

    createFlashcard(form: any) {
        console.log(form.value);
        this.flashcardService.createFlashcard(null);
    }
}