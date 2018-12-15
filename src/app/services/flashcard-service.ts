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
        return this.http.get<Flashcard[]>(this.getFlashcardsUrl, { headers: this.getHeaders() });
    }

    private getHeaders() {
        let headers = new HttpHeaders();
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');
        headers.append('Access-Control-Allow-Headers', 'Content-Type');
        headers.append('Access-Control-Allow-Methods', 'GET')
        headers.append('Access-Control-Allow-Methods', 'HEAD');
        headers.append('Access-Control-Allow-Methods', 'POST');
        headers.append('Access-Control-Allow-Methods', 'PUT');
        headers.append('Access-Control-Allow-Methods', 'DELETE');
        headers.append('Access-Control-Allow-Methods', 'OPTIONS');
        headers.append('Access-Control-Allow-Methods', 'PATCH');
        headers.append('Access-Control-Allow-Origin', '*');
        return headers;
    }
}