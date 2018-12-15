import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Flashcard } from '../models/flashcard-model';

import { environment } from 'src/environments/environment';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class FlashcardService {

    constructor(private http: HttpClient) { }

    private getFlashcardsUrl = environment.urlFlashcardAll;

    public getFlascards(): Observable<Flashcard[]> {
        return this.http.get<Flashcard[]>(this.getFlashcardsUrl);
    }
}